import { Link } from "react-scroll";
import { useState, useEffect } from "react";

export default function Nav() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`nav ${navActive ? "active" : ""}`}>
      <div className={`nav-items ${navActive ? "active" : ""}`}>
      
        
        <a
          className={`nav-ham ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </a>

        <div className="home">
          <ul>
            <li>Home</li>
          </ul>
        </div>

        <div className={`navLinks ${navActive ? "active" : ""}`}>
          <ul className={`ulitem ${navActive ? "active" : "hidden"}`}>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="nav-acive"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="home-section"
                className="navbar--content"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="nav-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about-section"
                className="navbar--content"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="nav-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="skill-section"
                className="navbar--content"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="nav-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="project-section"
                className="navbar--content"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                activeClass="nav-active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact-section"
                className="navbar--content"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
