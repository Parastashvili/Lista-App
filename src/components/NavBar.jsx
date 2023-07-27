import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import siteLogo from "../../public/vite.svg";
import Button from "./Button";

export default function NavBar() {
  const [navBG, setNavBG] = useState("transparent");
  const [navColor, setNavColor] = useState("#ffffff");
  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollHeight > 0) {
        console.log("yes");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Main style={{ backgroundColor: `${navBG}` }}>
      <Logo src={siteLogo} />
      <Navigation>
        <p style={{ color: `${navColor}` }}>Home</p>
        <p style={{ color: `${navColor}` }}>Menu</p>
        <p style={{ color: `${navColor}` }}>Locations</p>
        <p style={{ color: `${navColor}` }}>Review</p>
        <p style={{ color: `${navColor}` }}>About Us</p>
        <Button text="Contact Us" padding="7px 15px" textSize="20px" />
      </Navigation>
    </Main>
  );
}
const Main = styled.div`
  position: fixed;
  z-index: 1;
  width: calc(100% - 90px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 45px;
  @media only screen and (max-width: 600px) {
    padding: 17px 22px;
    width: calc(100% - 44px);
  }
`;
const Logo = styled.img`
  width: 40px;
  height: 40px;
`;
const Navigation = styled.div`
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
