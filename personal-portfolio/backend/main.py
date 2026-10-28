from fastapi import FastAPI
from pydantic import BaseModel, Field
from fastapi import HTTPException

app = FastAPI()
class ProjectCreate(BaseModel):
    title: str = Field(min_length=1, max_length=100)
    description: str = Field(min_length=1, max_length=1000)
    technologies: list[str] = Field(min_length=1)


class Project(ProjectCreate):
    id: int


# Temporary in-memory database.
projects: list[Project] = [
    Project(
        id=1,
        title="Payment Ledger",
        description="A double-entry payment ledger with a React dashboard.",
        technologies=["Java", "React", "SQL"],
    ),
    Project(
        id=2,
        title="Personal Portfolio",
        description="My portfolio website with a FastAPI backend.",
        technologies=["React", "TypeScript", "Python", "FastAPI"],
    ),
]


# Endpoint 1: Retrieve all projects.
# Optional technology parameter filters the results.
@app.get("/projects", response_model=list[Project])
def get_projects(technology: str | None = None):
    if technology is None:
        return projects

    return [
        project
        for project in projects
        if any(
            item.casefold() == technology.casefold()
            for item in project.technologies
        )
    ]


# Endpoint 2: Retrieve one project by its ID.
@app.get(
    "/projects/{project_id}",
    response_model=Project,
    responses={404: {"description": "Project not found"}},
)
def get_project(project_id: int):
    for project in projects:
        if project.id == project_id:
            return project

    raise HTTPException(
        status_code=404,
        detail="Project not found",
    )


# Endpoint 3: Add a project to the in-memory list.
@app.post(
    "/projects",
    response_model=Project,
    status_code=201,
    responses={409: {"description": "Project title already exists"}},
)
def create_project(project: ProjectCreate):
    for existing in projects:
        if existing.title.casefold() == project.title.casefold():
            raise HTTPException(
                status_code=409,
                detail="A project with this title already exists",
            )

    new_id = max((item.id for item in projects), default=0) + 1

    new_project = Project(
        id=new_id,
        **project.model_dump(),
    )

    projects.append(new_project)
    return new_project