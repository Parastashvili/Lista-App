import React from "react";

import { styled } from "styled-components";
import Button from "./Button";
export default function hello() {
  return (
    <Section>
      <h3>Food of the Month</h3>
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system
      </p>
      <div></div>
      <Button
        text="Explore Our Menu"
        padding="5px 20px"
        textSize="16px"
      ></Button>
    </Section>
  );
}
const Section = styled.div`
  background-color: #f8f9fb;
  height: 200px;
  border-top-right-radius: 200px;
`;
