import { Code2, Zap, Users, Award } from "lucide-react";

const stats = [
  { icon: Code2, value: "10+", label: "Projects Completed" },
  { icon: Zap, value: "20+", label: "Automations Built" },
  { icon: Users, value: "3+", label: "Happy Clients" },
  { icon: Award, value: "3+", label: "Years Experience" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-dark-surface">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-primary/30">
                <img
                  src="/er.jpeg"
                  alt="Ericamae Atenta - Web Developer and Automation Specialist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/50 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl" />
              
              {/* Floating Badge */}
              <div className="absolute -right-4 bottom-20 bg-card border border-border rounded-xl p-4 shadow-xl yellow-glow-sm">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Transforming Ideas Into{" "}
              <span className="text-gradient">Digital Reality</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Ericamae Atenta, a passionate Website Developer and Automation Specialist 
                based in the Philippines. With over 3 years of experience, I've helped businesses 
                across the globe establish their digital presence and streamline their operations.
              </p>
              <p>
                My expertise spans across modern web development, GoHighLevel CRM implementation, 
                and creating powerful automation workflows using Make.com and Zapier. I believe 
                in crafting solutions that not only look beautiful but also drive real results.
              </p>
              <p>
                Whether you need a stunning website, a complex automation system, or a complete 
                GoHighLevel setup, I'm here to help you achieve your business goals efficiently.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
