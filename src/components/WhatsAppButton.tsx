import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918943756296?text=Hello%20BridgeOneSA%2C%20I%20am%20interested%20in%20your%20Saudi%20business%20setup%20services.%20Please%20contact%20me."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
};
