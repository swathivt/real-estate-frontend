// src/components/TrustSection.jsx

import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  background: #f8f9fb;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #2c3e50;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
`;

export default function TrustSection() {
  return (
    <Section>
      <Container>
        <Title>Why Choose Us</Title>

        <Grid>
          <Card>
            <Icon>🏆</Icon>
            <CardTitle>Top Rated Agents</CardTitle>
            <Description>
              Experienced professionals with proven track records in your area.
            </Description>
          </Card>

          <Card>
            <Icon>🔒</Icon>
            <CardTitle>Secure Process</CardTitle>
            <Description>
              Safe and transparent transactions from start to finish.
            </Description>
          </Card>

          <Card>
            <Icon>📈</Icon>
            <CardTitle>Market Expertise</CardTitle>
            <Description>
              Deep understanding of local trends and property values.
            </Description>
          </Card>

          <Card>
            <Icon>🤝</Icon>
            <CardTitle>Personalized Service</CardTitle>
            <Description>
              Tailored property recommendations based on your needs.
            </Description>
          </Card>
        </Grid>
      </Container>
    </Section>
  );
}