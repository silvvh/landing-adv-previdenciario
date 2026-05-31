import { WHATSAPP_URL } from "./constants";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center justify-center size-14 md:size-16 bg-whatsapp text-white rounded-full shadow-2xl ring-4 ring-whatsapp/20 transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="size-7 md:size-8" />
    </a>
  );
}
