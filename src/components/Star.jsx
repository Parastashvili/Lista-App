import React from "react";
import styled from "styled-components";
import blank from "../assets/Decorations/starblank.png";
import fill from "../assets/Decorations/starfill.png";
export default function Star(props) {
  const totalStars = 5;
  return (
    <Container>
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < props.filled ? fill : blank}
          alt="star icon"
        />
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media only screen and (max-width: 600px) {
    scale: 0.8;
  }
  img {
    transition: ease 0.3s;
    &:hover {
      transform: translateY(-5px);
    }
  }
`;
