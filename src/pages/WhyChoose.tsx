import { ShieldCheck, Headphones, Globe, Zap, Heart, Award, Users, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "We believe in complete transparency. Every step is clearly communicated — no hidden charges, no surprise fees, and no ambiguous timelines." },
  { icon: Headphones, title: "End-to-End Support", desc: "From your very first consultation to business launch and beyond, we provide continuous support. Our team handles every aspect of your business setup." },
  { icon: Globe, title: "Saudi Market Expertise", desc: "With deep knowledge of Saudi Arabia's regulatory framework, cultural nuances, and business environment, we navigate complexities with precision." },
  { icon: Zap, title: "Fast Processing", desc: "Our streamlined workflows and established government relationships enable faster processing times and minimize delays." },
  { icon: Heart, title: "Ethical & Reliable Service", desc: "Integrity is the foundation of everything we do. We maintain the highest ethical standards with honest communication and reliable deliverables." },
  { icon: Award, title: "Proven Track Record", desc: "We've successfully helped numerous businesses establish their presence in Saudi Arabia across diverse industries." },
  { icon: Users, title: "Dedicated Team", desc: "Each client gets a dedicated relationship manager who understands your unique needs and provides personalized guidance." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Whether you're a startup or enterprise, our solutions scale with your business and evolving needs." },
];

const WhyChoose = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0B1F3A] via-[#112d55] to-[#1E3A8A] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">Why Choose BridgeOne</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-white/60 text-lg">
              Discover what makes us the preferred partner for business setup in Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 60}>
                <Card className="h-full border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                  <CardContent className="flex gap-5 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <r.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{r.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
