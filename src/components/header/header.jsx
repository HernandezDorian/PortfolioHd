import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PageContainer from "../page-container/page-container";
import GithubSocial from "../../assets/social/github-142-svgrepo-comBlack.svg";
import DiscordSocial from "../../assets/social/discord-svgrepo-com.svg";
import InstagramSocial from "../../assets/social/instagram-167-svgrepo-com.svg";
import LinkedinSocial from "../../assets/social/internet-linkedln-media-svgrepo-com.svg";

// White version
import GithubSocialWhite from "../../assets/social/github-white.svg";
import DiscordSocialWhite from "../../assets/social/discord-white.svg";
import InstagramSocialWhite from "../../assets/social/instagram-white.svg";
import LinkedinSocialWhite from "../../assets/social/linkedin-white.svg";
//
import { Link } from "react-scroll";
import Hamburger from "hamburger-react";
// import { elastic as Menu } from "react-burger-menu";
import "./header.css";
const socials = [
  {
    name: "Github",
    logo: GithubSocial,
    white: GithubSocialWhite,
    link: "https://github.com/HernandezDorian",
  },
  {
    name: "Discord",
    logo: DiscordSocial,
    white: DiscordSocialWhite,
    link: "https://discord.gg/H7Vz4ayrqg",
  },
  {
    name: "Instagram",
    logo: InstagramSocial,
    white: InstagramSocialWhite,
    link: "https://www.instagram.com/spikountryy/",
  },
  {
    name: "Linkedin",
    logo: LinkedinSocial,
    white: LinkedinSocialWhite,
    link: "https://www.linkedin.com/in/dorian-hernandez-4a9bb7294/",
  },
];

export default function Header({ switchDarkMode }) {
  Header.propTypes = {
    switchDarkMode: PropTypes.bool.isRequired,
  };
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

  const handleClick = () => {
    setOpen(false);
  };
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
                duration={400}
                className="Header__right__nav__link link"
                spy={true}
                onClick={handleClick}
              >
                Hd.
              </Link>
            </h1>
            {windowSize.width >= 880 ? (
              <nav className="Header__right__nav">
                <Link
                  to="about"
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
                >
                  A propos
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
                >
                  Projets
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={400}
                  offset={-80}
                  className="Header__right__nav__link link"
                  spy={true}
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
                  <Link
                    to="about"
                    smooth={true}
                    duration={400}
                    offset={-80}
                    className="Header__right__nav__link"
                    onClick={handleClick}
                  >
                    A propos
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={400}
                    offset={-80}
                    className="Header__right__nav__link"
                    onClick={handleClick}
                  >
                    Projets
                  </Link>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={400}
                    offset={-80}
                    className="Header__right__nav__link"
                    onClick={handleClick}
                  >
                    Contact
                  </Link>
                </nav>
                <div className="BurgerSocial">
                  {socials.map((social, index) => (
                    <a href={social.link} key={index} target="_blank">
                      <img
                        src={switchDarkMode ? social.white : social.logo}
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
              <a href={social.link} key={index} target="_blank">
                <img
                  src={switchDarkMode ? social.white : social.logo}
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
