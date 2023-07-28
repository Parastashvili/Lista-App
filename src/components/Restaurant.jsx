import React from "react";
import { styled } from "styled-components";
import cover1 from "../assets/MenuItems/cover1.png";
import cover2 from "../assets/MenuItems/cover2.png";
import cover3 from "../assets/MenuItems/cover3.png";
import Button from "./Button";
export default function Restaurant() {
  const covers = [cover1, cover2, cover3];
  return (
    <Main>
      <img src={cover1} alt="cover images" />
      <h6>Little Caesars Crazy Bread</h6>
      <p className="dsc">
        But I must explain to you how all this mistaken idea of will give you a
        complete account of the system
      </p>
      <div className="price">
        <p>$6.30</p>
        <Button text="Order Now" padding="5px 10px" textSize="14px"></Button>
      </div>
    </Main>
  );
}
const Main = styled.div`
  text-align: center;
  background-color: #ffffff;
  height: 330px;
  box-shadow: 0px 10px 10px rgb(196, 196, 196);
  overflow: hidden;
  border-radius: 30px;
  transition: ease 0.7s;
  &:hover {
    transform: translateY(-10px);
  }
  cursor: default;
  img {
    width: 100%;
  }
  h6 {
    color: #191d23;
    text-align: center;
    font-family: Playfair Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .dsc {
    color: #75797f;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 10px;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    p {
      color: #191d23;
      text-align: center;
      font-family: Playfair Display;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
    }
  }
`;
