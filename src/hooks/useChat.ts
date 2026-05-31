import { useState, useCallback } from "react";

export type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
  action?: "whatsapp";
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "Olá. Sou o concierge digital do escritório Marcondes & Associados. Como posso ajudar com seu caso previdenciário hoje?",
    options: [
      "Planejamento Previdenciário",
      "Aposentadoria Especial / Idade",
      "Revisão de Benefício",
      "Auxílio-Doença ou BPC/LOAS",
      "Outros Casos",
    ],
  },
];

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ topic: "", name: "" });

  const addBotMessage = useCallback((text: string, options?: string[], action?: "whatsapp") => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), sender: "bot", text, options, action },
      ]);
      setIsTyping(false);
    }, 1200); // Simulate typing delay
  }, []);

  const handleSend = useCallback((text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), sender: "user", text },
    ]);

    // Logic Tree
    if (step === 0) {
      setUserData((prev) => ({ ...prev, topic: text }));
      setStep(1);
      addBotMessage(
        "Entendido. Para que o Dr. Henrique Marcondes ou nossa equipe sênior possa analisar sua situação com a devida cautela, por favor, me informe seu nome completo e sobrenome."
      );
    } else if (step === 1) {
      setUserData((prev) => ({ ...prev, name: text }));
      setStep(2);
      addBotMessage(
        `Obrigado, ${text}. Para tratarmos dos detalhes sob sigilo absoluto e agendarmos sua consulta técnica, peço que inicie um atendimento seguro em nosso WhatsApp corporativo.`,
        ["Iniciar Atendimento Seguro"],
        "whatsapp"
      );
    }
  }, [step, addBotMessage]);

  return {
    messages,
    isTyping,
    handleSend,
    userData,
  };
}
