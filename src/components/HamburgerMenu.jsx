import React from "react";
import { styled } from "styled-components";
export default function HamburgerMenu(props) {
  return (
    <Main
      style={
        props.isOpen
          ? { transform: "translateX(0px)" }
          : { transform: "translateX(300px)" }
      }
    >
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Locations</li>
        <li>Review</li>
        <li>About Us</li>
      </ul>
    </Main>
  );
}
const Main = styled.div`
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: #ffffff;
  top: 0;
  right: 0;
  padding: 100px 50px;
  transform: translateX(200px);
  transition: ease-out 0.3s;
  @media only screen and (min-width: 786px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
      cursor: pointer;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      transition: ease 0.3s;
      &:hover {
        transform: translateX(5px);
      }
    }
  }
`;
