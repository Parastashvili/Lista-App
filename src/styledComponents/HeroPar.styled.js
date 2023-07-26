import styled from "styled-components";
const Phrase = styled.div`
  position: relative;
  color: #ededed;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  padding: 0 20px;
  cursor: default;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
    padding: 15px;
  }
`;
export default Phrase;
