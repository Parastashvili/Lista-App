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
export default function Slider() {
  const index = 6;
  const images = [img1, img2, img3, img4, img5, img6];
  return (
    <Main>
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          focus: "center",
        }}
        aria-label="My Favorite Images"
      >
        {[...Array(index)].map((_, index) => (
          <SplideSlide key={index}>
            <SlideInner>
              <div style={{ backgroundImage: `${images[index]}` }}></div>
              {/* <img src={images[index]} alt="Image 1" /> */}
              <h6>Hello darknes</h6>
              <div>
                <p>$6.30</p>
                <button>Order Now</button>
              </div>
            </SlideInner>
          </SplideSlide>
        ))}
      </Splide>
    </Main>
  );
}
const Main = styled.div`
  margin: 300px 0;
`;
const SlideInner = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
