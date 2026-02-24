import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, FileText, Users, Landmark, Languages, Monitor, ShieldCheck, Headphones, Globe, Zap, Heart, ArrowRight, Star, CheckCircle2, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { FadeIn } from "@/components/FadeIn";
import { HeroSlider } from "@/components/HeroSlider";
import logo from "@/assets/logo-bridgeone.png";

const services = [
  { icon: Building2, title: "Company Formation", desc: "End-to-end Saudi company registration — MISA, CR, and licensing support." },
  { icon: FileText, title: "Business Setup Guidance", desc: "MISA registration, investment licenses, and commercial registration." },
  { icon: Users, title: "PRO Services", desc: "Government liaison, visa processing, and administrative support." },
  { icon: Landmark, title: "Bank Account Opening", desc: "Corporate bank account setup with major Saudi banks." },
  { icon: Languages, title: "Legal Translation", desc: "Certified Arabic-English translation for legal and business documents." },
  { icon: Monitor, title: "Digital Business Services", desc: "Digital solutions for modern business operations and growth." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Transparent Process", desc: "No hidden fees. Clear timelines and honest communication at every step." },
  { icon: Headphones, title: "End-to-End Support", desc: "From consultation to business launch, we're with you throughout." },
  { icon: Globe, title: "Saudi Market Expertise", desc: "Deep understanding of Saudi regulations and business environment." },
  { icon: Zap, title: "Fast Processing", desc: "Streamlined workflows for quick approvals and turnaround." },
  { icon: Heart, title: "Ethical & Reliable", desc: "Built on integrity, trust, and client-first values." },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "Discuss your goals and get expert advice." },
  { num: "02", title: "Document Preparation", desc: "We handle all paperwork and filings." },
  { num: "03", title: "Government Processing", desc: "Approvals, licenses, and registrations." },
  { num: "04", title: "Business Launch", desc: "Start operating with ongoing support." },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "CEO, TechVentures KSA", text: "BridgeOneSA made our company formation seamless. Their expertise in Saudi regulations saved us months of effort." },
  { name: "Priya Sharma", role: "Founder, IndiaGCC Trade", text: "Professional, transparent, and incredibly efficient. They bridged every gap between India and Saudi Arabia for us." },
  { name: "Mohammed Al-Faisal", role: "Director, Gulf Investments", text: "From consultation to launch, BridgeOneSA delivered exactly what they promised. Highly recommended." },
];

const highlights = [
  { label: "Reliable & Transparent Service" },
  { label: "Expert Guidance for Saudi Business Setup" },
  { label: "Fast & Hassle-Free Processing" },
  { label: "Dedicated Client Support" },
];

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <HeroSlider onConsultation={() => setDialogOpen(true)} />

      {/* Credibility Bar */}
      <section className="relative z-10 -mt-16">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
            {highlights.map((item, i) => (
              <FadeIn key={item.label} delay={i * 100}>
                <div className="bg-primary/95 backdrop-blur-xl p-6 md:p-8 text-center border-r border-white/5 last:border-r-0 flex flex-col items-center gap-3">
                  <CheckCircle2 size={24} className="text-accent" />
                  <div className="text-sm font-medium text-white/80">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-sm font-medium text-accent uppercase tracking-widest">Who We Are</span>
                <h2 className="mt-3 text-3xl font-heading font-bold text-primary md:text-5xl leading-tight">
                  About BridgeOneSA
                </h2>
                <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  BridgeOneSA is a growing business service company focused on helping entrepreneurs and organizations establish and manage their operations in Saudi Arabia. We provide reliable consulting, documentation support, and digital service solutions.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our approach blends professional consultancy, digital efficiency, and human support — ensuring clients receive accurate guidance and timely execution at every stage.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Target size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">Our Mission</h4>
                      <p className="text-xs text-muted-foreground mt-1">Simplify Saudi business expansion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Eye size={20} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">Our Vision</h4>
                      <p className="text-xs text-muted-foreground mt-1">Trusted partner for cross-border success</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold rounded-full px-8">
                  <Link to="/about">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="h-full w-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center relative">
                    <div className="absolute inset-0 tech-grid opacity-30" />
                    <div className="text-center relative z-10 flex flex-col items-center gap-4">
                      <img src={logo} alt="BridgeOne" className="h-24 w-auto" />
                      <div className="text-white/60 text-sm font-medium tracking-widest uppercase">Bridging Global Services</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-xl bg-accent/20 blur-2xl" />
                <div className="absolute -top-4 -left-4 h-32 w-32 rounded-xl bg-secondary/30 blur-3xl" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-narrow relative">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-widest">What We Do</span>
              <h2 className="mt-3 text-3xl font-heading font-bold md:text-5xl">Our Services</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-white/50">Comprehensive business solutions tailored for the Saudi & GCC market</p>
            </div>
          </FadeIn>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:border-accent/30 hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-all duration-300 group-hover:from-accent group-hover:to-accent/80 group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20">
                    <s.icon size={26} />
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-accent text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-12 text-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold rounded-full px-8">
                <Link to="/services">
                  View All Services <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-widest">Why Us</span>
              <h2 className="mt-3 text-3xl font-heading font-bold text-primary md:text-5xl">Why Choose BridgeOneSA</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
              <p className="mt-4 text-muted-foreground">What sets us apart in business consulting</p>
            </div>
          </FadeIn>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80}>
                <Card className="group h-full border-border/50 bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-lg group-hover:shadow-accent/20">
                      <item.icon size={22} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-medium text-accent uppercase tracking-widest">Testimonials</span>
              <h2 className="mt-3 text-3xl font-heading font-bold text-primary md:text-5xl">What Our Clients Say</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            </div>
          </FadeIn>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 100}>
                <Card className="group h-full border-border/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="mb-5 flex gap-1 text-accent">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                    <div className="mt-6 flex items-center gap-4 pt-6 border-t border-border/50">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-accent/5 text-accent font-heading font-bold">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-accent via-accent to-accent/80 text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white/15,transparent_50%)]" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h2 className="text-3xl font-heading font-bold md:text-5xl">
              Ready to Start Your Business Journey?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/80 text-lg">
              Get expert guidance on company formation, licensing, and business setup in Saudi Arabia. Your first consultation is free.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={() => setDialogOpen(true)}
                className="bg-primary text-white hover:bg-primary/90 font-heading font-semibold text-base px-10 py-6 rounded-full shadow-xl"
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 font-heading font-semibold text-base px-8 py-6 rounded-full"
              >
                <a href="https://wa.me/918943756296?text=Hello%20BridgeOneSA%2C%20I%20am%20interested%20in%20your%20Saudi%20business%20setup%20services.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer">Contact Us</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-background border-t border-border/50">
        <div className="container-narrow">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            {["100% Transparent", "Saudi Market Experts", "End-to-End Support", "GCC & India", "Client First"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Index;
