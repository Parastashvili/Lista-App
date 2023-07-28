import React from "react";
import { styled } from "styled-components";
import down from "../assets/MenuItems/topq.png";
import up from "../assets/MenuItems/bottomq.png";
import Star from "./Star";
import arrowright from "../assets/Icons/left.png";
import arrowleft from "../assets/Icons/right.png";
import avatar from "../assets/Icons/profile.png";
export default function Rating() {
  return (
    <Outer>
      <img className="top" src={up} alt="" />
      <img className="bottom" src={down} alt="" />
      <h2>What our popular customers are saying</h2>
      <div className="outerDiv">
        <div className="leftDiv">
          <img src={avatar} alt="profile pic" />
        </div>
        <div className="rightDiv">
          <p>Levan Parastashvili</p>
          <p>1 day ago</p>
        </div>
      </div>
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system idea of denouncing pleasure ...But I must explain
        to you how all this mistaken idea of denouncing pleasure and praising
        pain was born and I will give you a complete account of the system idea
        of denouncing pleasure ...
      </p>
      <Star filled="5" />
      <Arrows>
        <button>
          <img
            onClick={() => changeOver("-")}
            src={arrowleft}
            alt="arrow left"
          />
        </button>
        <button>
          <img
            onClick={() => changeOver("+")}
            src={arrowright}
            alt="arrow rigth"
          />
        </button>
      </Arrows>
    </Outer>
  );
}
const Outer = styled.div`
  position: relative;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  h2 {
    color: #000;
    font-family: Playfair Display;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    text-align: center;
    @media only screen and (max-width: 600px) {
      font-size: 28px;
    }
  }
  p {
    color: #75797f;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    @media only screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  .outerDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    .leftDiv {
      img {
        width: 60px;
        border-radius: 50%;
      }
    }
  }
  .top {
    position: absolute;
    bottom: 15%;
    right: 5%;
  }
  .bottom {
    position: absolute;
    top: 25%;
    left: 5%;
  }
`;
const Arrows = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
`;
