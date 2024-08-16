import React from 'react';
import image from '../images/image-hero.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <TextSection>
        <h4>NEW PRODUCT</h4>
        <h1>XX00 MARK II HEADPHONES</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to='headphones/4'>
        <button className="custom-btn btn-3"><span>see Product</span></button>
        </Link>
      </TextSection>
      <ImageSection>
        <Overlay>
          <h1>SEE PRODUCT</h1>
        </Overlay>
      </ImageSection>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding: 0 50px;
  color: #fff;
  position: relative;
  z-index: 100;

  h4 {
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #DE8C8D;
  }

  h1 {
    font-size: 54px;
    margin: 10px 0;
    @media (max-width: 550px) {
      font-size: 35px;
      text-align: center;
      width: auto;
    }
  }

  p {
    font-size: 20px;
    opacity: 0.8;
    margin-top: 10px;
    @media (max-width: 550px) {
      text-align: center;
      font-size: 15px;
    }
  }

  @media (max-width: 550px) {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 27%;
  }
`;
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in;
  opacity: 0.8;

  h1 {
    opacity: 0;
    letter-spacing: 10px;
    @media (max-width: 550px) {
      text-align: center;
    }
  }
`;
const ImageSection = styled.div`
  width: 50%;
  height: 650px;
  background: url(${image}) no-repeat center center;
  background-size: cover;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  border-radius: 5px;
  position: relative;
  transition: all 4s ease-in-out;

  @media (max-width: 550px) {
    width: 100%;
    height: 400px;
  }

  &:hover ${Overlay} {
    height: 100%;
  }

  &:hover ${Overlay} h1 {
    opacity: 1;
    cursor: pointer;
  }
`;

