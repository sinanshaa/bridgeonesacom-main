import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConsultationDialog = ({ open, onOpenChange }: Props) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("consul-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("consul-email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("consul-phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("consul-msg") as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.text();

      setLoading(false);
      onOpenChange(false);

      toast({
        title: "Request Submitted!",
        description: "Your consultation request has been sent successfully.",
      });

      console.log(result);

    } catch (error) {
      setLoading(false);

      toast({
        title: "Error",
        description: "Failed to send request. Please try again.",
      });

      console.error(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-accent/20">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Get Free Consultation</DialogTitle>
          <DialogDescription>
            Fill in your details and our team will contact you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="consul-name">Full Name</Label>
            <Input
              id="consul-name"
              name="consul-name"
              placeholder="Your name"
              required
              maxLength={100}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consul-email">Email</Label>
            <Input
              id="consul-email"
              name="consul-email"
              type="email"
              placeholder="you@email.com"
              required
              maxLength={255}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consul-phone">Phone</Label>
            <Input
              id="consul-phone"
              name="consul-phone"
              type="tel"
              placeholder="+966 ..."
              required
              maxLength={20}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="consul-msg">Message</Label>
            <Textarea
              id="consul-msg"
              name="consul-msg"
              placeholder="Tell us about your business needs..."
              rows={3}
              maxLength={1000}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-semibold gold-glow"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>

        </form>
      </DialogContent>
    </Dialog>
  );
};