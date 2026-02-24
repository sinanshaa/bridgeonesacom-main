import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll respond within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="bg-[#EAF3FF] section-padding relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10" />
        <div className="container-narrow text-center relative">
          <FadeIn>
            <h1 className="text-4xl font-heading font-bold md:text-5xl text-primary">Contact Us</h1>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg">
              Get in touch with our team for personalized business consultation. Serving Saudi Arabia, UAE, all GCC countries &amp; India.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-heading font-bold text-primary">Get in Touch</h2>
                <div className="mt-2 h-1 w-12 rounded-full bg-accent" />
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Reach out to us via phone, email, or visit our office. We're here to help you start your business journey.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Office Address</h3>
                      <p className="mt-1 text-sm text-muted-foreground">Building No: 6846, Al Malaz, Riyadh, Saudi Arabia – 12331</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Phone</h3>
                      <p className="mt-1 text-sm text-muted-foreground">🇸🇦 +966 57 515 2994 <span className="text-xs text-muted-foreground/60">(Saudi / GCC)</span></p>
                      <p className="text-sm text-muted-foreground">🇮🇳 +91 8943 756 296 <span className="text-xs text-muted-foreground/60">(India)</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">Email</h3>
                      <p className="mt-1 text-sm text-muted-foreground">info@bridgeonedot.com</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-3">
              <FadeIn delay={100}>
                <Card className="border-border/50 shadow-xl shadow-accent/5">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="text-xl font-heading font-bold text-foreground">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="c-name">Full Name</Label>
                          <Input id="c-name" placeholder="Your name" required maxLength={100} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="c-email">Email</Label>
                          <Input id="c-email" type="email" placeholder="you@email.com" required maxLength={255} />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="c-phone">Phone</Label>
                          <Input id="c-phone" type="tel" placeholder="+966 ..." required maxLength={20} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="c-subject">Subject</Label>
                          <Input id="c-subject" placeholder="How can we help?" required maxLength={200} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="c-message">Message</Label>
                        <Textarea id="c-message" placeholder="Tell us about your business needs..." rows={5} required maxLength={2000} />
                      </div>
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold green-glow"
                      >
                        {loading ? "Sending..." : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>

          <FadeIn>
            <div className="mt-16 overflow-hidden rounded-xl border border-border/50 shadow-lg">
              <iframe
                title="BridgeOne Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.6!2d46.72!3d24.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM5JzM2LjAiTiA0NsKwNDMnMTIuMCJF!5e0!3m2!1sen!2ssa!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Contact;
