import React from 'react';
import rayan from './Utils';
import styled from 'styled-components';

const Pics = () => {
  return (
    <Container>
      <PicWrapper>
        <Product style={{ backgroundImage: `url(${rayan.img1})` }} />
        <Product style={{ backgroundImage: `url(${rayan.img2})` }} />
      </PicWrapper>
      <Product style={{ backgroundImage: `url(${rayan.img3})`, width: '61%' }} />
    </Container>
  );
};

export default Pics;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  width: 77.7%;
  height: 592px;
  padding: 10px;
  margin: 160px auto 0;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 38%;
  height: 100%;

  @media (max-width: 600px) {
    width: 100%;
    height: 50%;
  }
`;

const Product = styled.div`
  background-size: cover;
  width: 100%;
  height: 280px;

  @media (max-width: 600px) {
    height: 48%;
  }
`;
