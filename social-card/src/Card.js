import React from 'react';
import styled from 'styled-components';
import cardImage from './images/img1.png';

const Container = styled.div`
  height: auto;
  width: 450px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
`;

const ImageWrapper = styled.div`
  height: 200px;
  width: 450px;
`;

const DescriptionContainer = styled.div`
  width: 450px;
  height: auto;
  font-family: sans-serif;
  line-height: 1.6;
  font-weight:lighter;
  font-size: 14px;
  border-top: 1px solid #d3d3d3;
`;

const StyledLink = styled.a`
  color: grey;
  text-decoration: none;
`;

const CardImage = styled.img`
  width: 450px;
  height: 200px;
`;

const Card = () => (
  <Container>
    <ImageWrapper>
      <CardImage src={cardImage} />
    </ImageWrapper>
    <DescriptionContainer>
      <b> Learning React? Start Small. </b>
      <br />
      Can't pry away from the tutorials ? The cure is to make tiny little experiment apps.
      <br />
      <StyledLink href='dev.to'> dev.to </StyledLink>
    </DescriptionContainer>
  </Container>
);


export default Card;