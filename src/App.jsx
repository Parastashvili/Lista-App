import { styled } from "styled-components";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import HeroSlogan from "./styledComponents/HeroSlogan.styled";
import HeroPar from "./styledComponents/HeroPar.styled";
import Button from "./components/Button";
import Star from "./components/Star";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <HeroBanner />
      <NavBar />
      <HeroSlogan>
        "The most wonderful people have an insatiable appetite for life and
        food."
      </HeroSlogan>
      <HeroPar>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni aspernatur aut odit aut fugit, sed
        quia consequuntur magni dolores...
      </HeroPar>
      <HeroCentred>
        <Button text="Explore Menu" padding="5px 20px" textSize="16px" />
        <Star filled="4" />
      </HeroCentred>
      <Slider />
    </>
  );
}

export default App;
const HeroCentred = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 600px) {
    gap: 5px;
    margin-top: 0px;
  }
`;
