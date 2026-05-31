import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useChat } from "../../hooks/useChat";
import { FIRM_NAME, WHATSAPP_URL } from "../landing/constants";
import { WhatsAppIcon } from "../landing/WhatsAppIcon";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { messages, isTyping, handleSend, userData } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [messages, isTyping, isOpen]);

  const handleWhatsAppRedirect = () => {
    const text = `Olá, meu nome é ${userData.name} e procuro atendimento sobre ${userData.topic}.`;
    window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(text)}`, "_blank");
  };

  if (!mounted) return null;

  const widget = (
    <>
      {/* WhatsApp FAB Button (Mobile & Desktop) to open Chatbot */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 flex items-center justify-center size-14 md:size-16 bg-whatsapp text-white rounded-full shadow-2xl ring-4 ring-whatsapp/20 transition-transform hover:scale-110 cursor-pointer border-none"
          style={{ zIndex: 2147483647 }}
        >
          <WhatsAppIcon className="size-7 md:size-8 fill-current text-white" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 md:bottom-6 md:right-6 w-full md:w-[380px] h-[100dvh] md:h-[600px] bg-background border-l md:border border-border md:shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right rounded-sm overflow-hidden"
          style={{ zIndex: 2147483647 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 bg-brand text-brand-foreground border-b border-border/10 flex-shrink-0">
            <div>
              <h3 className="font-serif text-lg font-medium leading-none m-0 text-white">{FIRM_NAME}</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold m-0 mt-1.5">Concierge Digital</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-transparent border-none text-brand-foreground hover:text-white cursor-pointer p-1.5 transition-colors"
              aria-label="Fechar chat"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 bg-secondary/50">
            <div className="text-center my-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground bg-background px-3 py-1 border border-border/80 rounded-sm">Hoje</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-brand text-brand-foreground rounded-[16px_4px_16px_16px]"
                      : "bg-card text-foreground border border-border/80 rounded-[4px_16px_16px_16px]"
                  } shadow-sm`}
                >
                  {msg.text}
                </div>
                {msg.options && (
                  <div className="mt-3 flex flex-col gap-2 w-full max-w-[85%]">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => msg.action === "whatsapp" ? handleWhatsAppRedirect() : handleSend(opt)}
                        className={`w-full px-4 py-3 text-xs tracking-wider uppercase font-medium text-left transition-all rounded-sm shadow-sm border border-border/60 hover:scale-[1.01] active:scale-95 cursor-pointer ${
                          msg.action === "whatsapp"
                            ? "bg-[#25D366] text-white hover:bg-[#25D366]/95 border-none font-bold text-center justify-center flex items-center gap-2"
                            : "bg-card text-foreground hover:bg-secondary"
                        }`}
                      >
                        {msg.action === "whatsapp" && (
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.01 11.516 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.84.507 3.541 1.47 5.07l-.997 3.633 3.938-.971zm11.379-7.294c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.158.18-.315.202-.584.067-.27-.134-1.14-.422-2.172-1.341-.803-.715-1.346-1.599-1.503-1.869-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.607-1.463-.832-2.003-.22-.53-.462-.456-.63-.464-.162-.008-.347-.009-.53-.009-.18 0-.476.067-.724.337-.247.27-.945.922-.945 2.247s.965 2.6 1.1 2.78c.135.18 1.9 2.9 4.606 4.059.644.276 1.147.44 1.538.564.648.206 1.24.177 1.706.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.113-.247-.18-.516-.314z"/>
                          </svg>
                        )}
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex">
                <div className="bg-card border border-border/80 rounded-[4px_16px_16px_16px] px-4 py-3 flex gap-1.5 items-center shadow-sm">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-background border-t border-border flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.elements.namedItem("message") as HTMLInputElement;
                if (input?.value.trim()) {
                  handleSend(input.value);
                  input.value = "";
                }
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem..."
                autoComplete="off"
                disabled={isTyping || messages[messages.length - 1]?.action === "whatsapp"}
                className="flex-1 px-4 py-3 text-sm border border-border/80 bg-secondary/30 text-foreground outline-none rounded-sm focus:border-accent/40 font-sans transition-colors"
              />
              <button
                type="submit"
                disabled={isTyping || messages[messages.length - 1]?.action === "whatsapp"}
                className="px-4 py-3 bg-brand text-brand-foreground border-none rounded-sm cursor-pointer flex items-center justify-center transition-opacity hover:opacity-90 active:scale-95 disabled:opacity-50"
                aria-label="Enviar"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );

  return createPortal(widget, document.body);
}
