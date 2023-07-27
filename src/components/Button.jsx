import React from "react";
import styled from "styled-components";
export default function Button(props) {
  return (
    <ButtonCont textSize={props.textSize} padding={props.padding}>
      {props.text}
    </ButtonCont>
  );
}
const ButtonCont = styled.button`
  position: relative;
  padding: ${(props) => props.padding};
  border-radius: 43px;
  background: #df6751;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: ${(props) => props.textSize};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-width: 0px;
  cursor: pointer;
  transition: ease 0.5s;
  z-index: 2;
  @media only screen and (max-width: 600px) {
    padding: 5px 10px;
    font-size: 14px;
  }
  &:hover {
    scale: 1.05;
  }
`;
