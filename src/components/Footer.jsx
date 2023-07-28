import React from "react";
import { styled } from "styled-components";
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
          <div></div>
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
          <div>
            <img src="" alt="" />
            <p className="textContent">+995 557 60 23 53</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="textContent">Levani.Parastashvili@gmail.com</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="textContent">Georgia, Tbilisi</p>
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
    font-size: 18px;
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
    grid-template-columns: 1.5fr 1fr 1fr;
    border-bottom: 2px solid rgba(212, 212, 212, 0.5);
    padding-bottom: 40px;
  }
  .divider {
    border-right: 2px solid rgba(212, 212, 212, 0.5);
  }
  .innerdiv {
    padding: 10%;
  }
`;
