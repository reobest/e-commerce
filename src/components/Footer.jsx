import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  const { handleScroll } = useGlobalContext();

  return (
    <FooterContainer>
      <LogoSection>
        <img src={logo} alt="Company Logo" />
        <p>Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <small>Copyright 2021. All Rights Reserved</small>
      </LogoSection>
      <NavigationSection>
        <NavLinks>
          <ul>
            <NavItem><StyledLink to='/' onClick={handleScroll}>Home</StyledLink></NavItem>
            <NavItem><StyledLink to='/headphones' onClick={handleScroll}>HEADPHONES</StyledLink></NavItem>
            <NavItem><StyledLink to='/speakers' onClick={handleScroll}>SPEAKERS</StyledLink></NavItem>
            <NavItem><StyledLink to='/earphones' onClick={handleScroll}>EARPHONES</StyledLink></NavItem>
          </ul>
        </NavLinks>
        <SocialIcons>
          <IconButton><AiFillFacebook /></IconButton>
          <IconButton><AiOutlineTwitter /></IconButton>
          <IconButton><AiOutlineInstagram /></IconButton>
        </SocialIcons>
      </NavigationSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: black;
  color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 280px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    height: 25px;
    width: 145px;
  }

  p {
    margin-top: 20px;
    font-size: 15px;
    opacity: 0.8;
    max-width: 400px;
    margin: 0 auto;
  }

  small {
    display: block;
    margin-top: 50px;
    font-size: 15px;
    opacity: 0.8;
  }

  @media (min-width: 550px) {
    text-align: left;
    margin-bottom: 0;
    margin-right: 40px;
  }
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (min-width: 550px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: auto;
  }
`;

const NavLinks = styled.div`
  margin-bottom: 20px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;

    @media (min-width: 550px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 10px 0;

  @media (min-width: 550px) {
    margin: 0 15px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  @media (min-width: 550px) {
    font-size:12px;
  }
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: rgb(233, 15, 113);
    transform: rotate(360deg);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 550px) {
    margin-top: 0;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
  margin: 0 10px;

  &:nth-child(1) { color: blue; }
  &:nth-child(2) { color: rgb(33, 170, 225); }
  &:nth-child(3) { color: rgb(233, 15, 113); }

  @media (min-width: 550px) {
    margin: 0 15px;
  }
`;
