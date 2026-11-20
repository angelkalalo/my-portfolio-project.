function About() {
  return (
    <section id="about" className="about-section">

            <div className="section-title">
              <p>ABOUT ME</p>
              <h2>Creative & Curious</h2>
            </div>

            <div className="about-content">

              <div className="about-card">
                <i className="fa-solid fa-laptop-code"></i>

                <h3>Frontend Development</h3>

                <p>
                  I enjoy creating responsive and user-friendly websites
                  using HTML, CSS, and JavaScript.
                </p>
              </div>

              <div className="about-card">
                <i className="fa-solid fa-palette"></i>

                <h3>Creative Design</h3>

                <p>
                  I combine development and design to create interfaces
                  that are simple, attractive, and easy to use.
                </p>
              </div>

              <div className="about-card">
                <i className="fa-solid fa-lightbulb"></i>

                <h3>Always Learning</h3>

                <p>
                  I continuously improve my skills by exploring new
                  technologies, design ideas, and development techniques.
                </p>
              </div>

            </div>

          </section>
  );
}

export default About;
