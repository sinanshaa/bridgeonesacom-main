import { Eye, Target, Lightbulb, Monitor, Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import logo from "@/assets/logo-bridgeone.png";

const About = () => {
  return (
    <>
      <section className="bg-[#EAF3FF] section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl text-primary">Who We Are</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
              Connecting entrepreneurs, investors, and professionals with reliable solutions across Saudi Arabia and India.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                <img src={logo} alt="BridgeOne" className="h-20 w-auto" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">Our Story</h2>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                BridgeOneSA is a growing business service company focused on helping entrepreneurs and organizations establish and manage their operations in Saudi Arabia. We provide reliable consulting, documentation support, and digital service solutions to ensure a smooth and compliant business setup experience. Our approach blends professional consultancy, digital efficiency, and human support — ensuring clients receive accurate guidance and timely execution at every stage.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          <FadeIn>
            <Card className="h-full border-accent/20 transition-all hover:shadow-xl hover:shadow-accent/5">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  To become a trusted bridge between global opportunities and local aspirations by delivering ethical, efficient, and accessible business services that empower entrepreneurs worldwide.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={100}>
            <Card className="h-full border-accent/20 transition-all hover:shadow-xl hover:shadow-accent/5">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">Our Mission</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                  <li>• Simplify company formation and compliance in Saudi Arabia</li>
                  <li>• Provide reliable remote digital and customer support</li>
                  <li>• Ensure transparency and clear guidance at every step</li>
                  <li>• Build a performance-driven and ethical service ecosystem</li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn>
            <h2 className="text-center text-3xl font-heading font-bold text-primary">Our Approach</h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Lightbulb, title: "Professional Consultancy", desc: "Expert guidance tailored to your business goals, industry, and target market in Saudi Arabia." },
              { icon: Monitor, title: "Digital Efficiency", desc: "Leveraging technology for streamlined processes, real-time updates, and seamless communication." },
              { icon: Heart, title: "Human Support", desc: "Dedicated relationship managers who understand your needs and provide personalized service." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">{item.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <FadeIn>
            <h2 className="text-center text-3xl font-heading font-bold text-primary">Global Presence</h2>
            <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-xl text-center text-muted-foreground">
              Strategically positioned to serve clients across the GCC and South Asia
            </p>
          </FadeIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { country: "Saudi Arabia", city: "Riyadh", desc: "Our headquarters in the heart of Saudi Arabia's capital, providing on-ground support for all business setup needs." },
              { country: "India", city: "Multiple Cities", desc: "Regional support offices facilitating documentation, translation, and remote client services across India." },
            ].map((loc, i) => (
              <FadeIn key={loc.country} delay={i * 100}>
                <Card className="border-border/50 transition-all hover:shadow-lg">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{loc.country}</h3>
                      <p className="text-sm text-accent font-medium">{loc.city}</p>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{loc.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-narrow relative">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Process</span>
              <h2 className="mt-3 text-3xl font-heading font-bold md:text-5xl">How It Works</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-white/50">A simple 4-step journey to your Saudi business</p>
            </div>
          </FadeIn>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              { num: "01", title: "Free Consultation", desc: "Discuss your goals and get expert advice." },
              { num: "02", title: "Document Preparation", desc: "We handle all paperwork and filings." },
              { num: "03", title: "Government Processing", desc: "Approvals, licenses, and registrations." },
              { num: "04", title: "Business Launch", desc: "Start operating with ongoing support." },
            ].map((step, i) => (
              <FadeIn key={step.num} delay={i * 120}>
                <div className="group text-center relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
                  )}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-heading font-bold text-lg shadow-lg shadow-accent/30 transition-all duration-300 group-hover:shadow-accent/50 group-hover:scale-110">
                    {step.num}
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
