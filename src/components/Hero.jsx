// src/components/Hero.jsx

import styled from "styled-components";

const HeroWrapper = styled.section`
  height: 90vh;
  background-image: url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 75vh;
    padding: 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
`;

const Content = styled.div`
  position: relative;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButton = styled.button`
  padding: 14px 28px;
  font-size: 16px;
  background: #ffffff;
  color: #2c3e50;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <Overlay />
      <Content>
        <Title>Find Your Dream Home Today</Title>
        <Subtitle>
          Get exclusive access to the best properties in your area. 
          Our expert agents are ready to guide you.
        </Subtitle>
        <CTAButton>Get Free Consultation</CTAButton>
      </Content>
    </HeroWrapper>
  );
}