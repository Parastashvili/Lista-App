import React from "react";
import { styled } from "styled-components";
import HeroBg2 from "../assets/HeroBanners/hero2.png";
import HeroBg3 from "../assets/HeroBanners/hero3.png";
import HeroBg4 from "../assets/HeroBanners/hero4.png";
import HeroBg5 from "../assets/HeroBanners/hero5.png";
import dish1 from "../assets/HeroBanners/dish1.png";
import dish2 from "../assets/HeroBanners/dish2.png";
import dish3 from "../assets/HeroBanners/dish3.png";
import { useState, useEffect } from "react";

export default function HeroBanner() {
  const images = [HeroBg2, HeroBg3, HeroBg4, HeroBg5];
  const [heroBg, setHeroBg] = useState(HeroBg2);
  let currentIndex = 0;

  const changeBg = () => {
    setHeroBg(images[currentIndex]);
    currentIndex = (currentIndex + 1) % images.length;
  };

  useEffect(() => {
    const interval = setInterval(changeBg, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Outer>
      <Inner bgImage={heroBg} />
      <DishMain src={dish3} alt="main dish" />
      <DishLeft src={dish1} alt="left dish" />
      <DishRight src={dish2} alt="right dish" />
    </Outer>
  );
}
const Outer = styled.div`
  width: 100%;
  height: 610px;
  position: absolute;
  overflow: hidden;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    height: 450px;
  }
`;

const Inner = styled.div`
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  position: absolute;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 110%;
  left: -5%;
  height: 500px;
  border-radius: 70% / 0 0 100% 100%;
  filter: brightness(50%);
  box-shadow: 0 5px 10px black;
  transition: background-image 2.5s ease;
  @media only screen and (max-width: 600px) {
    border-radius: 70% / 0 0 40% 40%;
    height: 350px;
  }
`;
const DishMain = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 30%;
  max-width: 200px;
  transition: ease 0.5s;
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    bottom: 10%;
    width: 25%;
  }
  &:hover {
    transform: translate(-50%) rotate(-30deg);
    scale: 0.95;
  }
`;
const DishLeft = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 15%;
  left: 15%;
  transform: translate(-50%);
  width: 25%;
  max-width: 180px;
  transition: ease 0.5s;
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    bottom: 18%;
    width: 20%;
  }
  &:hover {
    transform: translate(-50%) rotate(30deg);
    scale: 0.95;
  }
`;
const DishRight = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 15%;
  left: 85%;
  transform: translate(-50%);
  width: 25%;
  max-width: 180px;
  transition: ease 0.5s;
  cursor: pointer;
  @media only screen and (max-width: 320px) {
    display: none;
  }
  @media only screen and (max-width: 600px) {
    bottom: 18%;
    width: 20%;
  }
  &:hover {
    transform: translate(-50%) rotate(30deg);
    scale: 0.95;
  }
`;
