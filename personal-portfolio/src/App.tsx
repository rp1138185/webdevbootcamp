import './App.css'

const experiences = [
  {
    title: 'Lead Backend Developer',
    company: 'Codinate Tutoring',
    location: 'Princeton, NJ',
    date: 'Sept. 2024 – June 2025',
    points: [
      'Engineered a fully serverless AWS backend using Lambda, API Gateway, and DynamoDB.',
      'Supported authentication, quiz logic, scoring, and notifications.',
      'Built 1500+ lines of code with <150ms median latency for 500 concurrent users.',
      'Tested REST endpoints with Postman and helped manage infrastructure.',
    ],
  },
  {
    title: 'Website Content Developer',
    company: 'Dia Amore Villa',
    location: 'Houston, TX',
    date: 'Dec. 2023 – June 2025',
    points: [
      'Collaborated with a team of 10 to build a functioning website.',
      'Designed parts of the user interface and developed platform search functionality.',
      'Contributed 90+ hours of coding.',
    ],
  },
  {
    title: 'Dental Technology Support',
    company: 'Hamilton Smiles',
    location: 'Princeton, NJ',
    date: 'June 2024 – Sept. 2025',
    points: [
      'Provided IT support and troubleshooting.',
      'Managed patient records, computer upkeep, and spreadsheets.',
      'Learned dental workflows to better support staff operations.',
    ],
  },
]

function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          <span>RP</span>
          Rohan Pathak
        </a>

        <nav aria-label="Main navigation">
          {['About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ),
          )}
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">BUILD · LEARN · SOLVE · REPEAT</p>

            <h1>
              Rohan <span>Pathak</span>
            </h1>

            <h2>Computer Science Student &amp; Backend Developer</h2>

            <p className="intro">
              University of Maryland student passionate about backend systems,
              cloud infrastructure, and building reliable software.
            </p>

            <Tags items={['☕ Java', '🐍 Python', '☁ AWS', '▤ Backend', '⚛ React']} />

            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <span>→</span>
              </a>
              <a className="button secondary" href="#contact">
                ✉ Contact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="illustration" aria-hidden="true">
              <div className="cloud-badge">aws</div>
              <div className="code-badge">&lt;/&gt;</div>

              <div className="laptop">
                <div className="laptop-screen">
                  <div className="window-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <pre>
                    <span className="code-purple">class</span>{' '}
                    <span className="code-yellow">Developer</span>
                    {' {\n'}
                    {'  name = '}
                    <span className="code-green">"Rohan"</span>
                    {';\n\n'}
                    {'  '}
                    <span className="code-blue">build</span>
                    {'() {\n'}
                    {'    return '}
                    <span className="code-green">"Better software"</span>
                    {';\n'}
                    {'  }\n'}
                    {'}'}
                  </pre>
                </div>
                <div className="laptop-base" />
              </div>

              <div className="database-badge">▤</div>
              <p className="illustration-caption">
                Better software.
                <br />
                Brighter possibilities.
              </p>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-icon">▤</span>
                <div>
                  <strong>1500+ lines</strong>
                  <small>of code</small>
                </div>
              </div>
              <div className="stat">
                <span className="stat-icon orange">ϟ</span>
                <div>
                  <strong>&lt;150ms</strong>
                  <small>median latency</small>
                </div>
              </div>
              <div className="stat">
                <span className="stat-icon">♟</span>
                <div>
                  <strong>500</strong>
                  <small>concurrent users</small>
                </div>
              </div>
              <div className="stat">
                <span className="stat-icon orange">🏆</span>
                <div>
                  <strong>7th / 50 teams</strong>
                  <small>in hackathon</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="dashboard">
          <div className="main-column">
            <div className="overview">
              <section className="panel" id="about">
                <h2>
                  <span className="section-icon">●</span> About Me
                </h2>
                <p className="about-text">
                  I enjoy building scalable backend systems, solving technical
                  problems, and creating practical software that is both
                  efficient and dependable. My experience includes serverless
                  cloud development, API testing, and full-stack project work.
                </p>
              </section>

              <section className="panel" id="education">
                <h2>
                  <span className="section-icon">◆</span> Education
                </h2>

                <div className="education-grid">
                  <article className="card">
                    <h3>University of Maryland</h3>
                    <p className="muted">College Park, MD</p>
                    <p>Bachelor of Science in Computer Science</p>
                    <p className="muted">Aug. 2026 – May 2030</p>
                    <p className="small">
                      Placed out of CMSC132. Current coursework: Multivariable
                      Calculus, Linear Algebra, Discrete Structures, Academic
                      Writing.
                    </p>
                  </article>

                  <article className="card">
                    <h3>West Windsor Plainsboro High School South</h3>
                    <p className="muted">West Windsor, NJ</p>
                    <p>GPA: 3.83 | 4.74 (W)</p>
                    <p className="muted">Sept. 2022 – June 2026</p>
                    <p className="small">
                      AP Calculus BC, AP Computer Science A, AP Computer Science
                      Principles, AP Statistics, AP Physics C, AP Chemistry, AP
                      Microeconomics.
                    </p>
                  </article>
                </div>
              </section>
            </div>

            <section className="panel" id="experience">
              <h2>
                <span className="section-icon">▣</span> Experience
              </h2>

              <div className="experience-grid">
                {experiences.map((experience) => (
                  <article className="card experience-card" key={experience.title}>
                    <h3>{experience.title}</h3>
                    <p className="date">{experience.date}</p>
                    <p className="muted">
                      {experience.company}
                      <br />
                      {experience.location}
                    </p>
                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="side-column">
            <section className="panel" id="projects">
              <h2>
                <span className="section-icon">&lt;/&gt;</span> Projects
              </h2>

              <article className="card">
                <div className="card-heading">
                  <h3>Payment Ledger</h3>
                  <span className="date">June 2025 – August 2026</span>
                </div>

                <ul>
                  <li>
                    Built a double-entry payments ledger service to maintain
                    accurate balances at both the application and database layer.
                  </li>
                  <li>
                    Prevented unbalanced transactions even from direct SQL access.
                  </li>
                  <li>
                    Ensured idempotency so duplicate or retried requests never
                    posted the same transaction twice.
                  </li>
                  <li>
                    Built the backend mostly in Java with a React dashboard on
                    the frontend.
                  </li>
                  <li>Tested performance under heavy load.</li>
                </ul>

                <Tags items={['Java', 'React', 'SQL', 'Backend']} />
              </article>
            </section>

            <section className="panel" id="skills">
              <h2>
                <span className="section-icon">⚙</span> Skills
              </h2>

              <div className="card">
                <h3>Languages</h3>
                <Tags items={['Java', 'Python']} />

                <h3 className="tools-heading">Developer Tools</h3>
                <Tags
                  items={['Git', 'VS Code', 'Visual Studio', 'IntelliJ', 'Eclipse']}
                />
              </div>
            </section>

            <section className="panel">
              <h2>
                <span className="section-icon">🏆</span> Awards
              </h2>

              <article className="card">
                <div className="card-heading">
                  <h3>WWPCC Hackathon</h3>
                  <span className="date">June 2024</span>
                </div>
                <p className="small">
                  Led a team of student developers through escalating programming
                  challenges, placing 7th out of 50 teams.
                </p>
              </article>
            </section>
          </aside>
        </div>
      </main>

      <footer id="contact">
        <div className="footer-brand">
          <span className="footer-logo">RP</span>
          <div>
            <strong>Rohan Pathak</strong>
            <p>COMPUTER SCIENCE STUDENT · BUILDER · PROBLEM SOLVER</p>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rohan-pathak-683806383/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/rp1138185"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </>
  )
}

export default App