function Projects() {
  return (
    <section id="projects" className="projects-section">

            <div className="section-title">
              <p>MY WORK</p>

              <h2>Featured Projects</h2>

              <span>
                A collection of projects that showcase my development
                and creative design skills.
              </span>
            </div>


            <div className="projects-container">

              {/* PROJECT 1 */}
              <div className="project-card">

                <div className="project-image donut">
                  <i className="fa-solid fa-circle-dot"></i>
                </div>

                <div className="project-content">

                  <span className="project-number">
                    PROJECT 01
                  </span>

                  <h3>Donut</h3>

                  <p>
                    A colorful and modern donut-themed website
                    designed to showcase products in a simple
                    and visually appealing interface.
                  </p>

                  <div className="project-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>

                  <a href="#" className="project-link">
                    View Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

              </div>


              {/* PROJECT 2 */}
              <div className="project-card">

                <div className="project-image calebs">
                  <i className="fa-solid fa-store"></i>
                </div>

                <div className="project-content">

                  <span className="project-number">
                    PROJECT 02
                  </span>

                  <h3>Caleb's</h3>

                  <p>
                    A clean business website concept created with
                    a focus on organization, usability, and
                    responsive layouts.
                  </p>

                  <div className="project-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>

                  <a href="#" className="project-link">
                    View Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

              </div>


              {/* PROJECT 3 */}
              <div className="project-card">

                <div className="project-image portfolio">
                  <i className="fa-solid fa-code"></i>
                </div>

                <div className="project-content">

                  <span className="project-number">
                    PROJECT 03
                  </span>

                  <h3>Personal Portfolio</h3>

                  <p>
                    A responsive personal portfolio website created
                    to showcase my skills, education, projects,
                    and contact information.
                  </p>

                  <div className="project-tags">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                  </div>

                  <a href="#" className="project-link">
                    View Project
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>

                </div>

              </div>

            </div>

          </section>
  );
}

export default Projects;
