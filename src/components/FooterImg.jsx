import React from "react";
import { styled } from "styled-components";
export default function FooterImg(props) {
  return (
    <BG>
      <img src={props.img} alt="" />
    </BG>
  );
}
const BG = styled.li`
  width: 35px;
  height: 35px;
  background-color: #df6751;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: ease 0.3s;
  cursor: pointer;
  &:hover {
    scale: 1.1;
  }
`;
