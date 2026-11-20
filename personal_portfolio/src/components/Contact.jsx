function Contact() {
  return (
    <section id="contact" className="contact-section">

            <div className="contact-container">

              <div className="contact-heading">
                <p>GET IN TOUCH</p>

                <h2>Let's Connect</h2>

                <span>
                  Have a project or opportunity in mind?
                  Feel free to reach out.
                </span>
              </div>


              <div className="contact-info">

                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>

                  <div>
                    <h4>Email</h4>
                    <a href="mailto:angelann.kalalo@lspu.edu.ph">
                      angelann.kalalo@lspu.edu.ph
                    </a>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>

                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+639059516101">
                      +63 905 951 6101
                    </a>
                  </div>

                </div>


                <div className="contact-item">

                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <div>
                    <h4>Location</h4>
                    <p>Santa Maria, Laguna</p>
                  </div>

                </div>

              </div>


              <div className="social-section">

                <h3>Social Media</h3>

                <div className="social-icons">

                  <a href="#" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  <a href="#" aria-label="GitHub">
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href="#" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a href="#" aria-label="TikTok">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>

                </div>

              </div>

            </div>

          </section>
  );
}

export default Contact;
