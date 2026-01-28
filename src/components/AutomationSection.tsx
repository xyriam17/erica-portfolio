import { Workflow, Settings, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const automationTools = [
  {
    icon: Workflow,
    name: "Make.com",
    title: "Complex Workflow Automation",
    description:
      "Build sophisticated automation workflows that connect multiple apps and services. Perfect for complex data transformations and multi-step processes.",
    benefits: [
      "Visual workflow builder",
      "Advanced data mapping",
      "Error handling & retry logic",
      "Webhook integrations",
      "Custom API connections",
    ],
    color: "from-purple-500/20 to-primary/20",
  },
  {
    icon: Settings,
    name: "GoHighLevel",
    title: "All-in-One CRM Automation",
    description:
      "Leverage the full power of GoHighLevel to automate your entire sales and marketing process. From lead capture to conversion and beyond.",
    benefits: [
      "Automated lead nurturing",
      "Smart pipeline triggers",
      "Appointment scheduling",
      "SMS & Email campaigns",
      "Revenue tracking",
    ],
    color: "from-primary/20 to-orange-500/20",
  },
  {
    icon: Zap,
    name: "Zapier",
    title: "Seamless App Integrations",
    description:
      "Connect your favorite apps and automate workflows with Zapier. Simple yet powerful integrations that save hours of manual work every week.",
    benefits: [
      "5,000+ app integrations",
      "Multi-step Zaps",
      "Conditional logic",
      "Filter & format data",
      "Scheduled triggers",
    ],
    color: "from-orange-500/20 to-primary/20",
  },
];

const AutomationSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="automation" className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Automation Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Streamline Your Business With{" "}
            <span className="text-gradient">Smart Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I specialize in building automation systems that eliminate manual tasks, reduce errors, 
            and help your business run more efficiently.
          </p>
        </div>

        {/* Automation Tools */}
        <div className="space-y-8">
          {automationTools.map((tool, index) => (
            <div
              key={tool.name}
              className={`group relative bg-card border border-border rounded-2xl p-6 md:p-10 overflow-hidden hover:border-primary/50 transition-all duration-300 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-30 group-hover:opacity-50 transition-opacity`}
              />

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl">
                      <tool.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                      {tool.name}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    {tool.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{tool.description}</p>
                  <Button variant="outline" onClick={scrollToContact} className="group/btn">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Benefits */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4">What You Get:</h4>
                    <ul className="space-y-3">
                      {tool.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Automate Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how automation can save you time, reduce errors, and help you scale your operations.
          </p>
          <Button variant="hero" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
