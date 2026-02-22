// src/components/Footer.jsx

import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 60px 20px 30px;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div``;

const Logo = styled.h3`
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #ddd;
`;

const ColumnTitle = styled.h4`
  margin-bottom: 15px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  color: #ddd;

  &:hover {
    color: white;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  color: #ccc;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Column>
            <Logo>DreamHomes</Logo>
            <Description>
              Helping families find their perfect homes with trust,
              transparency, and expertise.
            </Description>
          </Column>

          <Column>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList>
              <LinkItem>Home</LinkItem>
              <LinkItem>Listings</LinkItem>
              <LinkItem>Contact</LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Contact</ColumnTitle>
            <LinkList>
              <LinkItem>📞 (123) 456-7890</LinkItem>
              <LinkItem>📧 info@dreamhomes.com</LinkItem>
              <LinkItem>📍 Vancouver, BC</LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Follow Us</ColumnTitle>
            <LinkList>
              <LinkItem>Facebook</LinkItem>
              <LinkItem>Instagram</LinkItem>
              <LinkItem>LinkedIn</LinkItem>
            </LinkList>
          </Column>
        </Grid>

        <BottomBar>
          © {new Date().getFullYear()} DreamHomes. All rights reserved.
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}