import React from 'react';
import styled from 'styled-components';
import cardImage from './images/img1.png';

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #ffffff;
`;

const ImageWrapper = styled.div`
  height: 200px;
  width: 500px;
`;

const DescriptionContainer = styled.div`
  width: 500px;
  height: auto;
`;

const StyledLink = styled.a`
`;

const CardImage = styled.img`
  width: 500px;
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