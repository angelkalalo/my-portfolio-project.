import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
            <div className="logo">Angel</div>

            <nav className={menuOpen ? "show" : ""}>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#education" onClick={closeMenu}>Education</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a
                href="#contact"
                className="contact-btn"
                onClick={closeMenu}
              >
                Contact Me
              </a>
            </nav>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </header>
  );
}

export default Navbar;
