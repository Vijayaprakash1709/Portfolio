import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import backgroundImage from "../Resources/Images/backgroundHome.jpg";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [colorChange, setColorChange] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setColorChange(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Container>
      <Nav colorChange={colorChange}  >
        <Logo>Vijay - PortFolio</Logo>
        <Hamburger onClick={toggleMenu} style={{marginRight: "50px"}}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Hamburger>
        <Menu isMenuOpen={isMenuOpen} style={{marginRight: "50px"}}>
          <Slider activeIndex={activeIndex} />
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              active={activeIndex === index}
              onClick={() => {
                setActiveIndex(index);
                setIsMenuOpen(false);
              }}
             
            >
              <Link to={item.link} smooth={true} duration={500}>
                {item.name}
              </Link>
            </NavItem>
          ))}
          <ResumeLink>
            <a
              href="https://drive.google.com/file/d/1L9LB6GWE7l5IPemPcwPM9DLvVYKEjpvA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <DownloadIcon />
            </a>
          </ResumeLink>
        </Menu>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-image: url(${backgroundImage});
`;

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ colorChange }) => (colorChange ? "#cff3fa" : "white")};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  color:rgb(93, 0, 0);
`;

const Hamburger = styled.div`
  font-size: 28px;
  cursor: pointer;
  color:rgb(4, 17, 20);
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "block" : "none")};
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: white;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
  }
`;

const Slider = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ activeIndex }) => `calc(${activeIndex * 20}%)`};
  width: 20%;
  height: 5px;
  background-color:rgb(2, 2, 4);
  border-radius: 5px;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @media (max-width: 768px) {
    display: none; /* Hide slider in mobile view */
  }
`;

const NavItem = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: ${({ active }) => (active ? "#05095e" : "#05095e")};
  cursor: pointer;
  position: relative;
  padding: 10px;

  a {
    text-decoration: none;
    color: inherit;
    display: block;
    padding: 10px 0;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(115, 40, 5, 0.53);
      border-radius: 5px;
      padding:10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const ResumeLink = styled.div`
  text-align: center;
  padding: 10px;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background-color:rgb(3, 89, 128);
    text-decoration: none;
    gap: 5px;

    &:hover {
      background-color:rgba(3, 102, 148, 0.85);
    }
  }

  @media (max-width: 768px) {
    display: block;
    margin: 10px auto;
  }
`;

export default Navbar;
