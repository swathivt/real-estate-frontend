// src/components/Hero.jsx

import { useState } from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0.55)
    ),
    url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c");
  background-size: cover;
  background-position: center;
  padding: 80px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Left = styled.div`
  color: white;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;


const MiniForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export default function Hero() {
  const [miniForm, setMiniForm] = useState({
    firstName: "",
    phone: "",
  });

  const handleChange = (e) => {
    setMiniForm({
      ...miniForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save mini form data
    sessionStorage.setItem("prefillData", JSON.stringify(miniForm));

    // Scroll to full form
    const section = document.getElementById("lead-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroWrapper>
      <Container>
        <Left>
          <Title>Find Your Dream Home in Vancouver</Title>
          <Subtitle>
            Get exclusive access to premium listings and expert guidance
            from trusted local agents.
          </Subtitle>
        </Left>

        <FormCard>
          <MiniForm onSubmit={handleSubmit}>
            <Input
              type="text"
              name="firstName"
              placeholder="Your Name"
              value={miniForm.firstName}
              onChange={handleChange}
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={miniForm.phone}
              onChange={handleChange}
              required
            />
            <Button type="submit">
              Get Free Consultation
            </Button>
          </MiniForm>
        </FormCard>
      </Container>
    </HeroWrapper>
  );
}