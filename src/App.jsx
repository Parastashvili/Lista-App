import { styled } from "styled-components";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import NavBar from "./components/NavBar";
import HeroSlogan from "./styledComponents/HeroSlogan.styled";
import HeroPar from "./styledComponents/HeroPar.styled";
import Button from "./components/Button";
import Star from "./components/Star";
import Slider from "./components/Slider";
import Decoration1 from "./assets/Decorations/decoration1.png";
import Decoration2 from "./assets/Decorations/decoration2.png";
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
        <img className="tomato" src={Decoration1} alt="tomatoes" />
        <img className="egg" src={Decoration2} alt="egg" />
        <div className="text">
          <h4>Explore Tasty Eateries</h4>
          <p>
            "Explore nearby restaurants, check out their menus, and book tables
            hassle-free! Find your perfect dining experience and indulge in
            delicious flavors with ease. Discover new tastes and create
            unforgettable memories at your fingertips. Start your culinary
            journey now!"
          </p>
        </div>
      </HeroCentred>
      <Slider />
    </>
  );
}

export default App;
const HeroCentred = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  position: relative;
  background-color: transparent;
  height: 420px;
  @media only screen and (max-width: 600px) {
    gap: 5px;
    margin-top: 0px;
  }
  .tomato {
    position: absolute;
    bottom: -30px;
    left: 0;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  .egg {
    position: absolute;
    bottom: -10px;
    right: 6%;
    @media only screen and (max-width: 700px) {
      display: none;
    }
  }
  .text {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: -50px;
    max-width: 60%;
    display: flex;
    gap: 20px;
    @media only screen and (max-width: 972px) {
      flex-direction: column;
      text-align: center;
    }
    h4 {
      width: 200px;
      color: #191d23;
      text-align: center;
      font-family: Playfair Display;
      font-size: 30px;
      font-style: normal;
      font-weight: 600;
      line-height: 44px;
    }
    p {
      max-width: 450px;
      color: #75797f;
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }
`;
