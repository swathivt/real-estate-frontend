// src/pages/LandingPage.jsx

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LeadForm from "../components/LeadForm";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

// const LeadContainer = styled.div`
//   max-width: 1100px;
//   margin: 0 auto;
// `;

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* FULL FORM */}
      <section id="lead-section">
        <LeadForm />
      </section>

      <TrustSection />
      <Testimonials />
      <Footer />
    </>
  );
}
