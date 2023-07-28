import React from "react";
import { styled } from "styled-components";
import Button from "./Button";
import Restaurant from "./Restaurant";
export default function hello() {
  return (
    <Section>
      <h3>Food of the Month</h3>
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system
      </p>
      <div className="restaurant">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
      <div className="buttonDiv">
        <Button
          text="Explore Our Menu"
          padding="5px 20px"
          textSize="16px"
        ></Button>
      </div>
    </Section>
  );
}
const Section = styled.div`
  background-color: #f8f9fb;
  height: 200px;
  border-top-right-radius: 200px;
  padding: 50px 0;
  h3 {
    color: #000;
    text-align: center;
    font-family: Playfair Display;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 40px;
  }
  p {
    color: #75797f;
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    padding: 20px 10%;
  }
  .restaurant {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (min-width: 550px) and (max-width: 1200px) {
      grid-template-columns: repeat(2, 250px);
    }
  }
  .buttonDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
  }
`;
