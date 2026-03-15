import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
name: string;
email: string;
phone: string;
subject: string;
message: string;
}

const Contact = () => {

const { toast } = useToast();

const [formData, setFormData] = useState<ContactFormData>({
name: "",
email: "",
phone: "",
subject: "",
message: "",
});

const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
setFormData({
...formData,
[e.target.id.replace("c-", "")]: e.target.value,
});
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

if (
!formData.name ||
!formData.email ||
!formData.phone ||
!formData.subject ||
!formData.message
) {
toast({
title: "Missing fields",
description: "Please fill all fields before submitting.",
});
return;
}

const whatsappNumber = "918943756296";

const message = `
New Contact Inquiry - BridgeOnesa

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
`;

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

toast({
title: "Redirecting to WhatsApp",
description: "Send the message to complete your inquiry.",
});

setFormData({
name: "",
email: "",
phone: "",
subject: "",
message: "",
});
};

return (
<>

{/* HERO */}

<section className="bg-[#F6F9FF] py-16 px-4">

<div className="max-w-7xl mx-auto text-center">

<div className="pt-14">

<div className="mx-auto mb-4 h-[3px] w-[72px] bg-accent rounded-full"></div>

<span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/30">
Get in Touch
</span>

</div>

<h1 className="mt-5 text-4xl md:text-5xl font-heading font-bold">

<span className="text-primary">Contact</span>{" "}
<span className="text-accent">BridgeOne</span>

</h1>

<p className="mt-5 max-w-2xl mx-auto text-muted-foreground">

Have questions about our business setup services? Interested in starting
your company in Saudi Arabia or the GCC? Our team is ready to guide you
through every step of your business journey.

</p>

</div>

</section>


{/* CONTACT SECTION */}

<section className="py-10 bg-background">

<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">

{/* CONTACT INFORMATION */}

<Card className="shadow-xl border-border/50 h-full">

<CardContent className="p-6 md:p-12">

<h3 className="text-2xl font-heading font-bold">
Contact Information
</h3>

<div className="mt-3 h-[4px] w-44 bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full"></div>

<div className="mt-8 space-y-7">

{/* EMAIL */}

<div className="flex gap-4 items-start">

<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
<Mail size={18}/>
</div>

<div>
<h4 className="font-semibold">Email Us</h4>
<p className="text-muted-foreground">
info@bridgeonesa.com
</p>
</div>

</div>

{/* CALL */}

<div className="flex gap-4 items-start">

<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
<Phone size={18}/>
</div>

<div>
<h4 className="font-semibold">Call Us</h4>

<p className="text-muted-foreground">
🇸🇦 +966 57 515 2994
</p>

<p className="text-muted-foreground">
🇮🇳 +91 8943 756 296
</p>

</div>

</div>

{/* VISIT */}

<div className="flex gap-4 items-start">

<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
<MapPin size={18}/>
</div>

<div>
<h4 className="font-semibold">Visit Us</h4>

<p className="text-muted-foreground">
Building No: 6846, Al Malaz <br/>
Riyadh, Saudi Arabia – 12331
</p>

</div>

</div>

{/* HOURS */}

<div className="flex gap-4 items-start">

<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
<Clock size={18}/>
</div>

<div>
<h4 className="font-semibold">Working Hours</h4>

<p className="text-muted-foreground">
Monday - Friday: 9:00 AM - 6:00 PM
</p>

<p className="text-muted-foreground">
Saturday: 10:00 AM - 2:00 PM
</p>

<p className="text-muted-foreground">
Sunday: Closed
</p>

</div>

</div>

</div>


{/* MAP */}

<div className="mt-10 rounded-xl overflow-hidden border">

<iframe
title="BridgeOne Location"
src="https://www.google.com/maps?q=Riyadh+Saudi+Arabia&output=embed"
width="100%"
height="230"
style={{ border: 0 }}
loading="lazy"
/>

</div>

</CardContent>

</Card>


{/* CONTACT FORM */}

<Card className="shadow-xl border-border/50 h-full">

<CardContent className="p-6 md:p-12">

<h3 className="text-2xl font-heading font-bold">
Send Us a Message
</h3>

<div className="mt-3 h-[4px] w-44 bg-gradient-to-r from-accent via-accent/60 to-transparent rounded-full"></div>

<form onSubmit={handleSubmit} className="mt-6 space-y-4">

<div>
<Label htmlFor="c-name">Your Name *</Label>
<Input
id="c-name"
value={formData.name}
onChange={handleChange}
placeholder="Enter your name"
/>
</div>

<div>
<Label htmlFor="c-email">Email Address *</Label>
<Input
id="c-email"
type="email"
value={formData.email}
onChange={handleChange}
placeholder="Enter your email"
/>
</div>

<div>
<Label htmlFor="c-phone">Phone</Label>
<Input
id="c-phone"
value={formData.phone}
onChange={handleChange}
placeholder="+966..."
/>
</div>

<div>
<Label htmlFor="c-subject">Subject</Label>
<Input
id="c-subject"
value={formData.subject}
onChange={handleChange}
placeholder="What is this regarding?"
/>
</div>

<div>
<Label htmlFor="c-message">Your Message *</Label>
<Textarea
id="c-message"
rows={5}
value={formData.message}
onChange={handleChange}
placeholder="How can we help you?"
/>
</div>

<Button type="submit" className="w-full">
Send Message <Send size={16}/>
</Button>

</form>

</CardContent>

</Card>

</div>

</section>


{/* OTHER WAYS TO CONNECT */}

<section className="py-10 bg-background">

<div className="max-w-7xl mx-auto">

<div className="bg-[#F6F9FF] rounded-2xl border shadow-xl p-10 md:p-14">

<div className="text-center">

<h2 className="text-3xl font-heading font-bold text-primary">
Other Ways to <span className="text-accent">Connect</span>
</h2>

<div className="mx-auto mt-4 h-[3px] w-32 bg-gradient-to-r from-accent to-transparent rounded-full"/>

<p className="mt-4 text-muted-foreground max-w-xl mx-auto">
Reach out through the appropriate channel depending on your inquiry.
</p>

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">

{[
{
title: "General Inquiries",
desc: "For general questions about our services and business consultations.",
email: "info@bridgeonesa.com"
},
{
title: "Administration",
desc: "For official communication and administrative matters.",
email: "admin@bridgeonesa.com"
},
{
title: "Technical Support",
desc: "For technical support and assistance.",
email: "support@ihubrobotics.co"
}
].map((item, i) => (

<Card
key={i}
className="text-center border-border/50 hover:-translate-y-2 hover:shadow-xl transition duration-300"
>

<CardContent className="p-8">

<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent mb-4">
<Mail size={22}/>
</div>

<h3 className="font-semibold text-lg">
{item.title}
</h3>

<p className="text-sm text-muted-foreground mt-2">
{item.desc}
</p>

<a
href={`mailto:${item.email}`}
className="block mt-3 text-accent font-medium hover:underline"
>
{item.email}
</a>

</CardContent>

</Card>

))}

</div>

</div>

</div>

</section>

</>
);
};

export default Contact;