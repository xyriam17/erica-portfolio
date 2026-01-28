import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AutomationSection from "@/components/AutomationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ericamae</title>
        <meta
          name="description"
          content="Professional website developer and automation specialist. Expert in GoHighLevel, Make.com, and Zapier integrations. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="web developer, automation specialist, GoHighLevel, Make.com, Zapier, website development, CRM automation"
        />
        <meta property="og:title" content="Ericamae Atenta | Website Developer & Automation Specialist" />
        <meta
          property="og:description"
          content="Professional website developer and automation specialist. Expert in GoHighLevel, Make.com, and Zapier integrations."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://ericaatenta.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <AutomationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Analytics placeholder */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Analytics or other analytics code goes here
            // Example: gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      />
    </>
  );
};

export default Index;
