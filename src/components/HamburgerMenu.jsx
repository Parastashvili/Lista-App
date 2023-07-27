import React from "react";

import { styled } from "styled-components";
export default function HamburgerMenu() {
  return <Main>Menu items</Main>;
}
const Main = styled.div`
  position: fixed;
  width: 300px;
  height: 100vh;
  background-color: #ffffff;
  top: 0;
  right: 0;
`;
