import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import siteLogo from "../../public/vite.svg";
import Button from "./Button";
import { Divide as Hamburger } from "hamburger-react";
import HamburgerMenu from "./HamburgerMenu";
export default function NavBar() {
  const [navBG, setNavBG] = useState("transparent");
  const [navColor, setNavColor] = useState("#ffffff");
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBG("#ffffff");
      setNavColor("#000000");
    } else {
      setNavBG("transparent");
      setNavColor("#ffffff");
    }
  };
  useEffect(() => {
    handleScroll();
    const handleScrollEvent = () => {
      handleScroll();
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);
  const [isOpen, setOpen] = useState(false);
  const hamburger = () => {
    setOpen(!isOpen);
    if (!isOpen) {
      setNavColor("#000000");
    } else {
      setNavColor("#ffffff");
    }
    console.log(isOpen);
  };
  return (
    <Main style={{ backgroundColor: `${navBG}` }}>
      <Logo src={siteLogo} />
      <Navigation>
        <div className="navbar">
          <p style={{ color: `${navColor}` }}>Home</p>
          <p style={{ color: `${navColor}` }}>Menu</p>
          <p style={{ color: `${navColor}` }}>Locations</p>
          <p style={{ color: `${navColor}` }}>Review</p>
          <p style={{ color: `${navColor}` }}>About Us</p>
        </div>
        <Button text="Contact Us" padding="7px 15px" textSize="20px" />
        <div className="hamburger">
          <Hamburger
            toggled={isOpen}
            toggle={hamburger}
            color={`${navColor}`}
          />
        </div>
        <div style={{ position: "absolute", zIndex: -1 }}>
          {isOpen ? <HamburgerMenu /> : null}
        </div>
      </Navigation>
    </Main>
  );
}
const Main = styled.div`
  position: fixed;
  z-index: 20;
  width: calc(100% - 90px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 45px;
  @media only screen and (max-width: 600px) {
    padding: 15px 22px;
    width: calc(100% - 44px);
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const Navigation = styled.div`
  .hamburger {
    display: none;
    @media only screen and (max-width: 786px) {
      display: block;
    }
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 30px;
    @media only screen and (max-width: 786px) {
      display: none;
    }
  }
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 30px;
  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
  p {
    cursor: pointer;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
    &:hover {
      opacity: 0.7;
    }
  }
`;
