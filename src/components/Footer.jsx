import React from "react";
import { styled } from "styled-components";
import FooterImg from "./FooterImg";
import fb from "../assets/Icons/facebook.png";
import tw from "../assets/Icons/twitter.png";
import loc from "../assets/Icons/location.png";
import inst from "../assets/Icons/instagram.png";
import phone from "../assets/Icons/phone.png";
import email from "../assets/Icons/email.png";
export default function Footer() {
  return (
    <FooterCont>
      <div className="outer">
        <div className="divider innerdiv">
          <h6 className="header">Foodgram</h6>
          <p className="textContent">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system idea of denouncing pleasure ...
          </p>
          <ul className="icons">
            <FooterImg img={fb} />
            <FooterImg img={tw} />
            <FooterImg img={inst} />
          </ul>
        </div>
        <div className="divider innerdiv">
          <h5 className="header">Quick links</h5>
          <ul>
            <li className="textContent">Home</li>
            <li className="textContent">Menu</li>
            <li className="textContent">Locations</li>
            <li className="textContent">Review</li>
            <li className="textContent">About Us</li>
          </ul>
        </div>
        <div className="innerdiv">
          <h4 className="header">Contact Us</h4>
          <div className="outerCont">
            <div className="contact">
              <FooterImg img={phone} />
              <p className="textContent">+995 557 60 23 53</p>
            </div>
            <div className="contact">
              <FooterImg img={email} />
              <p className="textContent">Levani.Parastashvili@gmail.com</p>
            </div>
            <div className="contact">
              <FooterImg img={loc} />
              <p className="textContent">Georgia, Tbilisi</p>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">
        © Copyright 2023. All rights reserved. Developed by Levan Parastashvili
      </p>
    </FooterCont>
  );
}
const FooterCont = styled.div`
  .copyright {
    text-align: center;
    color: #75797f;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    padding-top: 20px;
  }
  padding: 20px 0;
  background-color: #f8f9fb;
  .textContent {
    color: #75797f;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
  .header {
    color: #444;
    font-family: Playfair Display;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  }
  .outer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 2px solid rgba(212, 212, 212, 0.5);
    padding-bottom: 40px;
    align-items: start;
    justify-content: start;
    @media only screen and (max-width: 600px) {
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-columns: auto;
      text-align: center;
      padding-bottom: 0px;
    }
  }
  .divider {
    border-right: 2px solid rgba(212, 212, 212, 0.5);
    border-bottom: none;
    @media only screen and (max-width: 600px) {
      border-bottom: 2px solid rgba(212, 212, 212, 0.5);
      border-right: none;
    }
  }
  .innerdiv {
    padding: 0 30px;
    @media only screen and (max-width: 600px) {
      padding: 5px 20px;
    }
    .outerCont {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .contact {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
    }
    .icons {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 40px;
      margin-top: 10px;
      @media only screen and (max-width: 600px) {
        justify-content: center;
      }
    }
  }
`;
