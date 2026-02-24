import { useState } from "react";
import { Building2, FileText, Users, Landmark, Languages, CheckCircle2, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ConsultationDialog } from "@/components/ConsultationDialog";
import { FadeIn } from "@/components/FadeIn";

const services = [
  {
    icon: Building2,
    title: "Saudi Company Formation",
    desc: "Complete end-to-end company registration and licensing in Saudi Arabia.",
    benefits: ["LLC, branch & representative office setup", "MISA foreign investment license", "Commercial registration (CR)", "Municipality & chamber of commerce registration"],
  },
  {
    icon: FileText,
    title: "Business Setup Guidance",
    desc: "Expert guidance through Saudi Arabia's business regulatory landscape.",
    benefits: ["MISA registration assistance", "Investment license applications", "Regulatory compliance advisory", "Sector-specific licensing support"],
  },
  {
    icon: Users,
    title: "PRO & Business Support",
    desc: "Professional government liaison services including visa processing and work permits.",
    benefits: ["Government liaison services", "Visa & work permit processing", "Iqama management", "Labor office procedures"],
  },
  {
    icon: Landmark,
    title: "Bank Account Opening",
    desc: "Streamlined assistance in opening corporate bank accounts with major Saudi banks.",
    benefits: ["Corporate account setup", "Multi-bank options", "Documentation preparation", "KYC compliance support"],
  },
  {
    icon: Languages,
    title: "Certified Legal Translation",
    desc: "Professional Arabic-English translation for legal, commercial, and official documents.",
    benefits: ["Certified Arabic-English translation", "Legal document translation", "Commercial contracts", "Government submissions"],
  },
  {
    icon: Monitor,
    title: "Digital Business Services",
    desc: "Modern digital solutions for business operations, marketing, and growth.",
    benefits: ["Digital transformation consulting", "Business process optimization", "Online presence setup", "E-commerce enablement"],
  },
];

const Services = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <section className="bg-[#EAF3FF] section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl text-primary">Our Services</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
              Comprehensive business solutions designed to simplify your journey in the Saudi market.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 60}>
              <Card className="overflow-hidden border-border/50 transition-all hover:shadow-xl hover:shadow-accent/5">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5">
                    <div className="flex flex-col justify-center bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:col-span-2">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <service.icon size={28} />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-foreground">{service.title}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:col-span-3">
                      <h4 className="mb-4 font-heading font-semibold text-foreground">Key Benefits</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((b) => (
                          <li key={b} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle2 size={18} className="shrink-0 text-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        onClick={() => setDialogOpen(true)}
                        className="mt-6 w-fit bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <ConsultationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
};

export default Services;
