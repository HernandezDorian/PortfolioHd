import React, { useState, useEffect } from "react";
import PageContainer from "../page-container/page-container";
import GithubSocial from "../../assets/social/github-142-svgrepo-comBlack.svg";
import DiscordSocial from "../../assets/social/discord-svgrepo-com.svg";
import InstagramSocial from "../../assets/social/instagram-167-svgrepo-com.svg";
import LinkedinSocial from "../../assets/social/internet-linkedln-media-svgrepo-com.svg";
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
// import { elastic as Menu } from "react-burger-menu";
import "./header.css";
const socials = [
  {
    name: "Github",
    logo: GithubSocial,
    link: "https://www.linkedin.com/in/dorian-hernandez-4a9bb7294/",
  },
  {
    name: "Discord",
    logo: DiscordSocial,
    link: "https://www.linkedin.com/in/dorian-hernandez-4a9bb7294/",
  },
  {
    name: "Instagram",
    logo: InstagramSocial,
    link: "https://www.linkedin.com/in/dorian-hernandez-4a9bb7294/",
  },
  {
    name: "Linkedin",
    logo: LinkedinSocial,
    link: "https://www.linkedin.com/in/dorian-hernandez-4a9bb7294/",
  },
];

export default function Header() {
  // --- SIZE START ---
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --- Size END ---

  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <PageContainer>
        <div className="Header">
          <div className="Header__right">
            <h1 className="Header__right__logo">
              <Link
                to="hello"
                smooth={true}
                duration={500}
                className="Header__right__nav__link link"
                spy={true}
                onClick={() => setOpen(false)}
              >
                Hd.
              </Link>
            </h1>
            {windowSize.width >= 880 ? (
              <nav className="Header__right__nav">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
                  onSetActive={() => setOpen(false)}
                >
                  A propos
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
                  onClick={() => setOpen(false)}
                >
                  Projets
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            ) : (
              <Hamburger toggled={isOpen} toggle={setOpen} />
            )}
            {isOpen && (
              <div className="BurgerMenu">
                <nav className="BurgerContent">
                  {" "}
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="Header__right__nav__link"
                  >
                    A propos
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="Header__right__nav__link"
                  >
                    Projets
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="Header__right__nav__link"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="BurgerSocial">
                  {socials.map((social, index) => (
                    <a href={social.link} key={index}>
                      <img
                        src={social.logo}
                        alt={social.name}
                        className="Header__left__social"
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="Header__left">
            {socials.map((social, index) => (
              <a href={social.link} key={index}>
                <img
                  src={social.logo}
                  alt={social.name}
                  className="Header__left__social"
                />
              </a>
            ))}
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
