import React from 'react';
import styled from 'styled-components';

const Features = () => {
  return (
    <Container>
      <FeaturesContent>
        <Heading>FEATURES</Heading>
        <Paragraph>
          Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
        </Paragraph>
        <Paragraph>
          The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. It lets you enjoy your audio in peace but quickly interact with your surroundings when needed. Combined with Bluetooth 5.0 compliant connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.
        </Paragraph>
      </FeaturesContent>
      <Box>
        <Heading>In the Box</Heading>
        <List>
          <ListItem><Quantity>1X</Quantity><Item>Headphone Unit</Item></ListItem>
          <ListItem><Quantity>2X</Quantity><Item>Replacement Earcups</Item></ListItem>
          <ListItem><Quantity>1X</Quantity><Item>User Manual</Item></ListItem>
          <ListItem><Quantity>1X</Quantity><Item>3.5mm 5m Audio Cable</Item></ListItem>
          <ListItem><Quantity>1X</Quantity><Item>Travel Bag</Item></ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;
  background-color: #fff;
  margin: 0 auto;
  width: 77.7%;
  height: auto;
  border-radius: 5px;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const FeaturesContent = styled.div`
  flex: 1 1 70%;
  padding: 0 20px;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: 400;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 15px;
  margin-top: 20px;
`;

const Box = styled.div`
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;

  @media (max-width: 420px) {
    margin-top: 20px;
  }
`;

const ListItem = styled.li`
  display: flex;
  margin: 7px 0;
  align-items: center;
`;

const Quantity = styled.span`
  color: #D87D4A;
  margin-right: 30px;

  @media (max-width: 420px) {
    margin: 0 10px;
  }
`;

const Item = styled.span``;
