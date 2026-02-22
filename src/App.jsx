import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import styled from "styled-components";



const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;


function App() {
  

  return (
   
     <PageWrapper>
  <LeadForm />
  <Hero />
</PageWrapper>
    
  )
}

export default App
