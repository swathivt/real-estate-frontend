// src/components/Testimonials.jsx

import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  background: white;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 50px;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #f8f9fb;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  text-align: left;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Stars = styled.div`
  color: #f4c150;
  margin-bottom: 15px;
  font-size: 18px;
`;

const Quote = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;
`;

const Author = styled.div`
  font-weight: 600;
  color: #2c3e50;
`;

const Role = styled.div`
  font-size: 13px;
  color: #777;
`;

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <Title>What Our Clients Say</Title>

        <Grid>
          <Card>
            <Stars>★★★★★</Stars>
            <Quote>
              The team helped us find our dream home in just two weeks. 
              Professional, responsive, and truly knowledgeable about the market.
            </Quote>
            <Author>Sarah Johnson</Author>
            <Role>First-Time Home Buyer</Role>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Quote>
              Selling our property was seamless. They handled everything 
              with transparency and delivered beyond expectations.
            </Quote>
            <Author>Michael Thompson</Author>
            <Role>Home Seller</Role>
          </Card>

          <Card>
            <Stars>★★★★★</Stars>
            <Quote>
              Highly recommend! Their expertise and personal attention 
              made the buying process stress-free and enjoyable.
            </Quote>
            <Author>Emily Rodriguez</Author>
            <Role>Property Investor</Role>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}