import styled from "styled-components";
const Phrase = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  text-align: center;
  font-family: Playfair Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  padding-top: 110px;
  cursor: default;
  max-width: 1000px;
  margin: auto;
  @media only screen and (max-width: 900px) {
    font-size: 34px;
    line-height: 44px;
  }
  @media only screen and (max-width: 600px) {
    padding: 80px 30px 0 30px;
    font-size: 22px;
    line-height: 30px;
  }
`;
export default Phrase;
