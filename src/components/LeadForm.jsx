// src/components/LeadForm.jsx

import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
    align-items: flex-start;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 40px 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 25px 20px;
    border-radius: 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #2c3e50;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 18px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2c3e50;
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px; /* Better for mobile typing */
  }
`;

const Select = styled.select`
  width: 100%;
  height: 44px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  box-sizing: border-box;
  appearance: none;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #2c3e50;
  }

  @media (max-width: 768px) {
    height: 48px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  font-size: 15px;

  &:hover {
    background: #34495e;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    height: 52px;
    font-size: 16px;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`;

const SuccessMessage = styled.p`
  color: green;
  text-align: center;
  margin-top: 15px;
  font-weight: 500;
`;




export default function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budgetMin: "",
    budgetMax: "",
    preferredArea: "",
    propertyType: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
  const storedData = sessionStorage.getItem("prefillData");
  if (storedData) {
    const parsed = JSON.parse(storedData);
    setFormData((prev) => ({
      ...prev,
      firstName: parsed.firstName || "",
      phone: parsed.phone || "",
    }));
    sessionStorage.removeItem("prefillData");
  }
}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.email || !formData.phone) {
      return "First name, Email and Phone are required.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Lead Submitted:", formData);
      setSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        budgetMin: "",
        budgetMax: "",
        preferredArea: "",
        propertyType: "",
      });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <Title>Find Your Dream Home</Title>

        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>First Name *</Label>
            <Input name="firstName" value={formData.firstName} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Last Name</Label>
            <Input name="lastName" value={formData.lastName} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Email *</Label>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Phone *</Label>
            <Input name="phone" value={formData.phone} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Budget Min</Label>
            <Input type="number" name="budgetMin" value={formData.budgetMin} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Budget Max</Label>
            <Input type="number" name="budgetMax" value={formData.budgetMax} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Preferred Area</Label>
            <Input name="preferredArea" value={formData.preferredArea} onChange={handleChange} />
          </InputGroup>

          <InputGroup>
            <Label>Property Type</Label>
            <Select name="propertyType" value={formData.propertyType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Condo">Condo</option>
              <option value="House">House</option>
              <option value="Townhouse">Townhouse</option>
            </Select>
          </InputGroup>

          {error && <ErrorText>{error}</ErrorText>}

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Lead"}
          </Button>

          {success && (
            <SuccessMessage>
              Thank you! An agent will contact you soon.
            </SuccessMessage>
          )}
        </form>
      </FormContainer>
    </Wrapper>
  );
}