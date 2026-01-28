import { Code, Workflow, Settings, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Custom, responsive websites built with modern technologies. From landing pages to complex web applications, I create fast, SEO-optimized sites that convert visitors into customers.",
    features: ["Custom Design", "Responsive Layout", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Workflow,
    title: "Make Automation",
    description:
      "Powerful automation workflows using Make.com (formerly Integromat). Connect your apps, automate repetitive tasks, and streamline your business processes for maximum efficiency.",
    features: ["App Integrations", "Custom Workflows", "Data Sync", "Error Handling"],
  },
  {
    icon: Settings,
    title: "GoHighLevel (GHL)",
    description:
      "Complete GoHighLevel CRM setup and automation. From sales funnels to automated follow-ups, I help you leverage the full power of GHL to grow your business.",
    features: ["CRM Setup", "Sales Funnels", "Email Automation", "Pipeline Management"],
  },
  {
    icon: Zap,
    title: "Zapier Automation",
    description:
      "Seamless integrations between your favorite apps using Zapier. Automate workflows, sync data, and eliminate manual tasks with custom Zap configurations.",
    features: ["Multi-step Zaps", "Conditional Logic", "Data Mapping", "Webhook Setup"],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Services That Drive{" "}
            <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning websites to powerful automation systems, I provide comprehensive 
            digital solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 card-hover"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant="ghost"
                className="text-primary hover:text-primary group/btn p-0"
                onClick={scrollToContact}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
