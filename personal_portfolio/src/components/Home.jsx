function Home() {
  return (
    <section id="home" className="hero">

            <div className="hero-content">

              <div className="hero-badge">
                <span></span>
                WELCOME TO MY PORTFOLIO
              </div>

              <h1>
                Hi, I'm <span>Angel Ann</span>
                <br />
                Kalalo
              </h1>

              <h2>Aspiring Frontend Developer</h2>

              <p>
                I create clean, responsive, and visually engaging websites
                using modern web technologies and creative design principles.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn">
                  View My Projects
                  <i className="fa-solid fa-arrow-right"></i>
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>

              <div className="hero-bottom">
                <span>Frontend Development</span>
                <span>Creative Design</span>
                <span>Digital Experiences</span>
              </div>

            </div>

            <div className="hero-decoration">
              <div className="purple-orb orb-one"></div>
              <div className="purple-orb orb-two"></div>
              <div className="floating-card card-one">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="floating-card card-two">
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>
            </div>

          </section>
  );
}

export default Home;
