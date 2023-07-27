import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { styled } from "styled-components";
import "../CustomCss/Slide.css";
import img1 from "../assets/MenuItems/menu1.png";
import img2 from "../assets/MenuItems/menu2.png";
import img3 from "../assets/MenuItems/menu3.png";
import img4 from "../assets/MenuItems/menu4.png";
import img5 from "../assets/MenuItems/menu5.png";
import img6 from "../assets/MenuItems/menu6.png";
import "@splidejs/react-splide/css/sea-green";
import Button from "./Button";
export default function Slider() {
  const index = 6;
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <Main>
      <Splide
        options={{
          type: "loop",
          focus: "center",
          autoplay: true,
          fixedWidth: "250px",
        }}
        aria-label="My Favorite Images"
      >
        {[...Array(index)].map((_, index) => (
          <SplideSlide key={index}>
            <SlideInner>
              <div
                className="img"
                style={{
                  backgroundImage: `url(${images[index]})`,
                }}
              />
              <p>Khachapuri</p>
              <div className="priceCont">
                <p>$6.30</p>
                <Button text="Order Now" padding="5px 15px" textSize="16px">
                  Order Now
                </Button>
              </div>
            </SlideInner>
          </SplideSlide>
        ))}
      </Splide>
    </Main>
  );
}
const Main = styled.div`
  margin: 0;
`;
const SlideInner = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 20px;
  .img {
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: ease 0.5s;
    &:hover {
      scale: 1.1;
    }
  }
  p {
    color: #191d23;
    text-align: center;
    font-family: Playfair Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  .priceCont {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    p {
      font-size: 18px;
    }
  }
`;
