import React from "react";
import { styled } from "styled-components";
import mask from "../assets/Banners/mask.png";
import over from "../assets/Banners/over.png";
import over1 from "../assets/Banners/over1.png";
import over2 from "../assets/Banners/over2.png";
import Button from "./Button";
import arrowright from "../assets/Icons/left.png";
import arrowleft from "../assets/Icons/right.png";
import deco from "../assets/Decorations/bannerdeco.png";
export default function Banner() {
  return (
    <Cont>
      <div className="banners">
        <img className="mask" src={mask} alt="" />
        <img className="over" src={over2} alt="" />
      </div>
      <div className="textContent">
        <h2>
          Part of the secret of success is to eat what you like and let the food
          fight it out inside.
        </h2>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a comple I
          must explain to you how all this mistaken idea of denouncing pleasure
          and praising pain was bmplete account of the system....
        </p>
        <Button text="Learn More" padding="5px 10px" textSize="14px"></Button>
        <div className="arrows">
          <button>
            <img src={arrowleft} alt="arrow left" />
          </button>
          <button>
            <img src={arrowright} alt="arrow rigth" />
          </button>
        </div>
        <img className="decoration" src={deco} alt="" />
      </div>
    </Cont>
  );
}
const Cont = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 100px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
  .banners {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 800px) {
      transform: rotate(-90deg);
      margin: -150px 0 -60px 0;
    }
    position: relative;
    height: 400px;
    .mask {
      position: absolute;
      left: 0;
      width: 350px;
      filter: brightness(50%);
      @media only screen and (max-width: 800px) {
        display: none;
      }
    }
    .over {
      width: 350px;
      position: absolute;
      background-color: #ffffff;
      border-radius: 50%;
      left: 70px;
      transition: ease 1s;
      cursor: pointer;
      @media only screen and (max-width: 800px) {
        width: 250px;
        position: unset;
      }
      &:hover {
        transform: rotate(90deg);
        scale: 1.1;
      }
    }
  }
  .textContent {
    position: relative;
    .decoration {
      position: absolute;
      bottom: 0;
      right: 10%;
      width: 50%;
      max-width: 250px;
    }
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 40px;
    width: 80%;
    margin-right: 30px;
    @media only screen and (max-width: 800px) {
      gap: 30px;
    }
    @media only screen and (min-width: 1300px) {
      width: 200%;
    }
    h2 {
      color: #000;
      font-family: Playfair Display;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 36px;
      @media only screen and (max-width: 800px) {
        font-size: 22px;
        line-height: 30px;
      }
    }
    p {
      color: #75797f;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      @media only screen and (max-width: 800px) {
        font-size: 12px;
        line-height: 24px;
      }
    }
    .arrows {
      button {
        cursor: pointer;
        border-radius: 50%;
        background-color: transparent;
        border-width: 0px;
        &:hover {
          opacity: 0.95;
          scale: 0.95;
        }
        img {
          width: 25px;
        }
      }
    }
  }
`;
