import React from "react";
import { styled } from "styled-components";
import cover1 from "../assets/MenuItems/cover1.png";
import cover2 from "../assets/MenuItems/cover2.png";
import cover3 from "../assets/MenuItems/cover3.png";
import cover4 from "../assets/MenuItems/cover4.png";
import Button from "./Button";
export default function Restaurant() {
  const data = [
    {
      img: cover1,
      name: "Little Caesars Crazy Bread",
      dsc: "But I must explain to you how all this mistaken idea of  will give you a complete account of the system",
      price: "$6.30",
    },
    {
      img: cover2,
      name: "Two-Piece Fish Meal",
      dsc: "Aq daiwereba restornis da kerdiz agwera",
      price: "$21.30",
    },
    {
      img: cover3,
      name: "Dunkin' Munchkins",
      dsc: "Aq daiwereba restornis da kerdiz agwera",
      price: "$9.30",
    },
    {
      img: cover4,
      name: "Long Island Ice Tea",
      dsc: "Aq daiwereba restornis da kerdiz agwera",
      price: "$16.30",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <Main key={index}>
          <img src={item.img} alt="cover images" />
          <h6>{item.name}</h6>
          <p className="dsc">{item.dsc}</p>
          <div className="price">
            <p>{item.price}</p>
            <Button text="Order Now" padding="5px 10px" textSize="14px" />
          </div>
        </Main>
      ))}
    </>
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
    height: 160px;
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
