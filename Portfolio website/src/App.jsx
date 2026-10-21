
import { useState } from "react";
import "./App.css";

const email = "dharshinipriya11077@gmail.com";

const projects = [
  {
    number: "01",
    name: "Student Management System",
    category: "JAVA ",
    description:
      "A Java application to add, view, update and delete student records using object-oriented programming.",
    tech: ["Java", "ArrayList", "OOP"],
  },
  {
    number: "02",
    name: "RoadCare AI",
    category: "AI • HACKATHON",
    description:
      "A road health intelligence project designed to identify potholes, cracks and damaged road surfaces from uploaded images.",
    tech: ["React", "AI", "Computer Vision"],
  },
  {
    number: "03",
    name: "Personal Portfolio Website",
    category: "WEB DEVELOPMENT",
    description:
      "A responsive portfolio website showcasing my profile, technical skills, projects and certifications.",
    tech: ["React", "JavaScript", "CSS"],
  },
];


const certificates = [
  {
    name: "NPTEL Certificate",
    description: "NPTEL Course Certificate",
    file: "/certificates/Nptel.pdf",
  },
  {
    name: "Hackathon Certificate",
    description: "Hackathon Achievement",
    file: "/certificates/hackathon.pdf",
  },
  {
    name: "C Programming",
    description: "Coursera Certificate",
    file: "/certificates/C.pdf",
  },
  {
    name: "Frontend Development",
    description: "Coursera Certificate",
    file: "/certificates/Frontend.pdf",
  },
  {
    name: "Java",
    description: "Coursera Certificate",
    file: "/certificates/Java.pdf",
  },
  {
    name: "Microsoft",
    description: "Coursera Certificate",
    file: "/certificates/Microsoft.pdf",
  },
  {
    name: "Object Oriented Programming",
    description: "Coursera Certificate",
    file: "/certificates/Oops.pdf",
  },
  {
    name: "Python",
    description: "Coursera Certificate",
    file: "/certificates/Python.pdf",
  },
  {
    name: "React JS",
    description: "Coursera Certificate",
    file: "/certificates/React%20js.pdf",
  },
];


const skills = [
  "Java",
  "C Programming",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "SQL",
  "Git & GitHub",
];

function App() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          DP<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#contact">
          Let's Talk ↗
        </a>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <p className="eyebrow">HELLO, WORLD! I'M</p>

            <h1>
              Dharshini <span>Priya</span>
            </h1>

            <h2>Aspiring Web Developer</h2>

            <p className="hero-description">
              I am a B.Sc. Computer Science student passionate
              about programming, web development and creating
              useful digital solutions. I enjoy learning new
              technologies and improving my coding skills.
            </p>

            <div className="hero-buttons">
              <a className="primary-button" href="#projects">
                Explore My Work ↗
              </a>

              <a className="secondary-button" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/dharshini110708"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dharshinipriya02"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              
<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
  target="_blank"
  rel="noreferrer"
>
  Email ↗
</a>

            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-glow" />

            <img
              src="/profile.jpeg"
              alt="Dharshini Priya"
              className="profile-photo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display =
                  "flex";
              }}
            />

            <div className="profile-fallback">DP</div>

            <div className="floating-card">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Always Learning</strong>
                <p>Growing every day</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
            <p>A little introduction about my journey.</p>
          </div>

          <div className="about-card">
            <div className="about-symbol">✦</div>

            <div className="about-content">
              <h3>My Journey</h3>

              <p>
                I am Dharshini Priya, pursuing B.Sc. Computer
                Science at KG College of Arts and Science.
                I am interested in  Web development, Java
                programming, web technologies and problem-solving.
              </p>

              <p>
                My goal is to become a skilled Web developer
                by strengthening my programming fundamentals,
                building practical projects and learning
                industry-relevant technologies.
              </p>

              <div className="about-details">
                <div>
                  <span>Education</span>
                  <strong>B.Sc. Computer Science</strong>
                </div>

                <div>
                  <span>College</span>
                  <strong>KG College of Arts and Science</strong>
                </div>

                <div>
                  <span>Interests</span>
                  <strong>Programming & Web Development</strong>
                </div>

                <div>
                  <span>Career Goal</span>
                  <strong>Web Developer</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Technical <span>Skills</span></h2>
            <p>Technologies I am learning and practising.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-line" />
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
            <h2>Featured <span>Projects</span></h2>
            <p>Some of my academic and personal projects.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-symbol">⌘</div>

                <h3>{project.name}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.name === "Personal Portfolio Website" && (
                  <a href="#home" className="project-link">
                    Back to Home ↑
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="section">
          <div className="section-heading">
            <p className="eyebrow">PROOF OF LEARNING</p>
            <h2>My <span>Certificates</span></h2>
            <p>Courses and achievements from my learning journey.</p>
          </div>

          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.name}
              >
                <div className="certificate-icon">✧</div>

                <h3>{certificate.name}</h3>

                <p>{certificate.description}</p>

                <button
                  className="certificate-button"
                  onClick={() => setSelectedCertificate(certificate)}
                >
                  View My Certificate ↗
                </button>
              </article>
            ))}
          </div>

          {selectedCertificate && (
            <div
              className="certificate-modal"
              onClick={() => setSelectedCertificate(null)}
            >
              <div
                className="certificate-modal-content"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate preview"
                >
                  ×
                </button>

                <p className="eyebrow">CERTIFICATE PREVIEW</p>
                <h3>{selectedCertificate.name}</h3>
                <p>{selectedCertificate.description}</p>

                <iframe
                  className="certificate-frame"
                  src={selectedCertificate.file}
                  title={selectedCertificate.name}
                />

                <a
                  href={selectedCertificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open / Download PDF ↗
                </a>
              </div>
            </div>
          )}
        </section>

        <section id="contact" className="section">
          <div className="contact-card">
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>Let's build something <span>great.</span></h2>

            <p>
              Interested in connecting or collaborating on a
              project? Feel free to reach out to me.
            </p>

            <a
              className="primary-button"
              href={`mailto:${email}`}
            >
              Send Me an Email ↗
            </a>

            <div className="contact-details">
              <a href={`mailto:${email}`}>{email}</a>

              <a
                href="https://github.com/dharshini110708"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dharshinipriya02"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          DP<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Dharshini Priya. Built
          with React.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
