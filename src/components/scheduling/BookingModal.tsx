import { useState, useEffect } from "react";
import { useBookings, type Booking } from "../../hooks/useBookings";
import { WHATSAPP_URL } from "../landing/constants";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SERVICES = [
  "Planejamento Previdenciário",
  "Aposentadoria Especial / Idade / Tempo",
  "Revisão de Benefício (INSS)",
  "Auxílio-Doença ou BPC/LOAS",
  "Análise Geral de Caso Previdenciário",
];

const TIME_SLOTS = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { createBooking } = useBookings();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedService("");
      setSelectedDate("");
      setSelectedTime("");
      setFormData({ name: "", email: "", phone: "", notes: "" });
      setConfirmedBooking(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Generate next 14 days (excluding Sundays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      if (nextDate.getDay() !== 0) { // Exclude Sunday
        dates.push(nextDate);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !formData.name || !formData.phone) return;

    const booking = createBooking({
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      notes: formData.notes,
    });

    setConfirmedBooking(booking);
    setStep(5);
  };

  const handleWhatsAppRedirect = () => {
    if (!confirmedBooking) return;
    const dateFormatted = new Date(confirmedBooking.date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    
    const message = `Olá! Gostaria de confirmar meu agendamento na Marcondes & Associados.
*Código:* ${confirmedBooking.id}
*Serviço:* ${confirmedBooking.service}
*Data:* ${dateFormatted} às ${confirmedBooking.time}
*Cliente:* ${confirmedBooking.name}`;

    window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 font-sans animate-fade-in">
      <div className="bg-background border border-border w-full max-w-lg rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90dvh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-brand text-brand-foreground border-b border-border/10 flex-shrink-0">
          <div>
            <h3 className="font-serif text-lg font-medium leading-none m-0 text-white">Agendamento de Consulta</h3>
            <p className="text-[10px] tracking-[0.2em] uppercase text-accent font-semibold m-0 mt-1.5">Passo {step} de 5</p>
          </div>
          <button
            onClick={onClose}
            className="bg-transparent border-none text-brand-foreground hover:text-white cursor-pointer p-1.5 transition-colors"
            aria-label="Fechar"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-secondary/30">
          {/* Step 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-serif text-base text-brand font-medium mb-2">Qual especialidade previdenciária você deseja analisar?</h4>
              <div className="flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedService(s);
                      handleNextStep();
                    }}
                    className={`w-full text-left px-5 py-4 border rounded-sm transition-all font-medium text-sm flex justify-between items-center ${
                      selectedService === s
                        ? "bg-brand text-brand-foreground border-brand"
                        : "bg-card text-foreground border-border hover:border-accent/40"
                    }`}
                  >
                    <span>{s}</span>
                    <span className="text-accent">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date */}
          {step === 2 && (
            <div className="space-y-4">
              <h4 className="font-serif text-base text-brand font-medium mb-3">Escolha um dia disponível para sua consulta:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {availableDates.map((date) => {
                  const dateStr = date.toISOString().split("T")[0];
                  const dayName = date.toLocaleDateString("pt-BR", { weekday: "short" });
                  const dayNum = date.toLocaleDateString("pt-BR", { day: "2-digit" });
                  const monthName = date.toLocaleDateString("pt-BR", { month: "short" });
                  
                  return (
                    <button
                      key={dateStr}
                      onClick={() => {
                        setSelectedDate(dateStr);
                        handleNextStep();
                      }}
                      className={`p-4 border rounded-sm text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        selectedDate === dateStr
                          ? "bg-brand text-brand-foreground border-brand"
                          : "bg-card text-foreground border-border hover:border-accent/40"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider opacity-60">{dayName}</span>
                      <span className="text-xl font-bold font-serif">{dayNum}</span>
                      <span className="text-[10px] uppercase tracking-wider text-accent font-semibold">{monthName}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={handlePrevStep} className="px-5 py-2.5 border border-border text-brand rounded-sm text-xs font-medium bg-card hover:bg-secondary">
                  Voltar
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Select Time */}
          {step === 3 && (
            <div className="space-y-4">
              <h4 className="font-serif text-base text-brand font-medium mb-3">Escolha o horário mais adequado para você:</h4>
              <div className="grid grid-cols-3 gap-3">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setSelectedTime(t);
                      handleNextStep();
                    }}
                    className={`py-3.5 border rounded-sm text-center font-medium text-sm transition-all ${
                      selectedTime === t
                        ? "bg-brand text-brand-foreground border-brand"
                        : "bg-card text-foreground border-border hover:border-accent/40"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={handlePrevStep} className="px-5 py-2.5 border border-border text-brand rounded-sm text-xs font-medium bg-card hover:bg-secondary">
                  Voltar
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Form */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-serif text-base text-brand font-medium mb-2">Informe seus dados para contato e registro:</h4>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-card text-foreground outline-none focus:border-accent/40 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">WhatsApp / Telefone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-card text-foreground outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1">E-mail</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-card text-foreground outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1">Alguma observação para o seu caso? (Opcional)</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                    placeholder="Ex: Já possuo negativa do INSS, gostaria de revisar aposentadoria de professor..."
                    className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-card text-foreground outline-none focus:border-accent/40 transition-colors resize-none"
                  />
                </div>
              </div>
              
              <div className="flex justify-between pt-4 border-t border-border/60">
                <button type="button" onClick={handlePrevStep} className="px-5 py-2.5 border border-border text-brand rounded-sm text-xs font-medium bg-card hover:bg-secondary">
                  Voltar
                </button>
                <button type="submit" className="px-6 py-2.5 bg-brand text-brand-foreground rounded-sm text-xs font-semibold hover:bg-brand/90 transition-opacity">
                  Confirmar Agendamento
                </button>
              </div>
            </form>
          )}

          {/* Step 5: Success & Confirm */}
          {step === 5 && confirmedBooking && (
            <div className="text-center space-y-6 py-4 animate-fade-in">
              <div className="size-16 bg-green-500/10 border border-green-500/30 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-brand font-medium">Agendamento Realizado!</h4>
                <p className="text-xs text-muted-foreground max-w-sm mx-auto">Sua pré-reserva de consulta está garantida e foi registrada localmente sob segurança técnica.</p>
              </div>

              {/* Detail Card */}
              <div className="bg-card border border-border rounded-sm p-5 text-left max-w-sm mx-auto shadow-sm space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground uppercase">Código</span>
                  <span className="font-semibold text-brand">{confirmedBooking.id}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground uppercase">Especialidade</span>
                  <span className="font-semibold text-brand text-right">{confirmedBooking.service}</span>
                </div>
                <div className="flex justify-between border-b border-border/50 pb-2">
                  <span className="text-muted-foreground uppercase">Data</span>
                  <span className="font-semibold text-brand">
                    {new Date(confirmedBooking.date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase">Horário</span>
                  <span className="font-semibold text-brand">{confirmedBooking.time}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full max-w-sm px-6 py-4 bg-[#25D366] text-white rounded-sm font-semibold text-sm flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-md shadow-green-500/10 cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.464L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.01 11.516 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.84.507 3.541 1.47 5.07l-.997 3.633 3.938-.971zm11.379-7.294c-.269-.134-1.593-.787-1.839-.877-.247-.09-.427-.135-.607.135-.18.27-.697.877-.855 1.057-.158.18-.315.202-.584.067-.27-.134-1.14-.422-2.172-1.341-.803-.715-1.346-1.599-1.503-1.869-.158-.27-.017-.417.118-.551.121-.12.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.607-1.463-.832-2.003-.22-.53-.462-.456-.63-.464-.162-.008-.347-.009-.53-.009-.18 0-.476.067-.724.337-.247.27-.945.922-.945 2.247s.965 2.6 1.1 2.78c.135.18 1.9 2.9 4.606 4.059.644.276 1.147.44 1.538.564.648.206 1.24.177 1.706.107.518-.078 1.593-.652 1.819-1.282.225-.63.225-1.17.157-1.282-.068-.113-.247-.18-.516-.314z"/>
                  </svg>
                  <span>Confirmar via WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full max-w-sm px-6 py-3 border border-border text-brand bg-card hover:bg-secondary rounded-sm font-medium text-xs transition-colors"
                >
                  Concluir e Voltar ao Site
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
