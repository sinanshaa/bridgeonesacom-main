import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn } from "@/components/FadeIn";

const faqs = [
  { q: "How long does it take to set up a company in Saudi Arabia?", a: "The timeline varies depending on the type of entity and license. Generally, a full company setup including MISA registration, commercial registration, and all approvals takes 4–8 weeks. BridgeOne's streamlined process helps minimize delays." },
  { q: "What documents are required to start a business in Saudi Arabia?", a: "Key documents typically include: passport copies of shareholders/directors, company memorandum and articles of association, proof of address, bank reference letters, and power of attorney. We provide a complete checklist based on your specific business type." },
  { q: "How much does it cost to form a company in Saudi Arabia?", a: "Costs depend on the entity type, license category, and scope of services. We provide transparent, detailed cost estimates during the initial consultation with no hidden charges." },
  { q: "Who is eligible to start a business in Saudi Arabia?", a: "Both Saudi nationals and foreign investors can establish businesses. Foreign investors typically need a MISA (Ministry of Investment) license. Certain sectors may have restrictions or require local partners." },
  { q: "Do I need to be physically present in Saudi Arabia to start a business?", a: "While some steps may require physical presence (such as certain bank account openings), much of the process can be handled remotely through our power of attorney services." },
  { q: "Can BridgeOne help with ongoing compliance after company formation?", a: "Absolutely. We offer ongoing PRO services, compliance monitoring, license renewals, and government liaison support to ensure your business remains fully compliant." },
  { q: "What types of business entities can be formed in Saudi Arabia?", a: "Common entity types include Limited Liability Company (LLC), branch office, representative office, and joint stock company. We'll recommend the best structure based on your objectives." },
  { q: "Does BridgeOne provide services in India as well?", a: "Yes, we have operations in India providing documentation support, translation services, and client coordination. This dual presence allows us to serve clients efficiently across both regions." },
];

const FAQ = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0B1F3A] via-[#112d55] to-[#1E3A8A] text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl">Frequently Asked Questions</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-white/60 text-lg">
              Everything you need to know about starting a business in Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-lg border border-border/50 bg-card px-6 data-[state=open]:border-accent/30 data-[state=open]:shadow-lg data-[state=open]:shadow-accent/5 transition-all"
                >
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline hover:text-accent transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default FAQ;
