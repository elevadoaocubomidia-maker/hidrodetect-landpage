import { useState } from "react";

const FAQS = [
  {
    q: "Precisa esvaziar a piscina para detectar o vazamento?",
    a: "Não. O serviço é realizado com a piscina cheia. Usamos hidrofone digital subaquático, com o técnico dentro da água, que identifica o ponto exato do vazamento pelo som. Você não tem nenhum custo com esvaziamento, reenchimento ou reequilíbrio de produtos químicos.",
  },
  {
    q: "Precisa quebrar a parede ou o piso para encontrar o vazamento?",
    a: "Não antes do diagnóstico. O geofone digital capta o som do vazamento através de concreto, cerâmica e alvenaria. Só após identificar o ponto exato é que qualquer abertura é necessária — e só naquele ponto específico, sem demolição desnecessária.",
  },
  {
    q: "Como saber se tenho um vazamento oculto em casa?",
    a: "Os sinais mais comuns são: conta de água alta sem mudança de hábitos, mancha de umidade que volta depois de pintar, piso frio em um ponto específico, pressão da torneira caindo progressivamente ou o medidor de água girando com tudo fechado. Se identificar algum desses sintomas, a indicação é chamar um profissional com equipamento especializado.",
  },
  {
    q: "O que é geofone digital e como funciona na detecção de vazamentos?",
    a: "Geofone digital é um equipamento de escuta eletrônica de alta sensibilidade que capta vibrações acústicas produzidas pela água escapando sob pressão em tubulações embutidas. O técnico posiciona o sensor na superfície — parede, piso ou laje — e o equipamento amplifica o som do vazamento, permitindo localizar o ponto exato sem abertura prévia.",
  },
  {
    q: "O que é hidrofone e para que serve?",
    a: "Hidrofone é um microfone subaquático especializado para detecção de vazamentos em piscinas. Ele é inserido na água e capta o som do fluxo de água escapando pela tubulação de circulação, pelo ralo de fundo ou pela estrutura da piscina. Funciona com a piscina completamente cheia e em operação normal.",
  },
  {
    q: "O que é câmera termográfica e quando é usada?",
    a: "Câmera termográfica detecta variações de temperatura na superfície de paredes, pisos e lajes. Vazamentos causam diferença de temperatura que o infrared capta visualmente antes de qualquer mancha aparecer. É especialmente útil em imóveis onde o vazamento ainda não se manifestou na superfície, ou para confirmar suspeitas em grandes áreas.",
  },
  {
    q: "O que é teste de estanqueidade?",
    a: "Teste de estanqueidade é o procedimento em que a tubulação é pressurizada e monitorada durante um período. Se houver queda de pressão, confirma-se que existe perda no circuito. É indicado antes de reformas, obras novas, ou quando o medidor de água gira com todos os registros fechados e não há vazamento visível.",
  },
  {
    q: "O que é o laudo técnico de vazamento?",
    a: "É um documento formal emitido na mesma visita, com fotos do local, descrição técnica do problema, croqui de localização do ponto do vazamento e identificação do tipo de falha. O laudo é aceito por seguradoras para acionamento do seguro residencial e pode ser usado para contestar uma conta de água alta junto à concessionária.",
  },
  {
    q: "Quanto tempo demora o serviço de detecção?",
    a: "Em média de 1 a 3 horas, dependendo do tipo de vazamento e da extensão da área a ser inspecionada. O laudo técnico é entregue na mesma visita. O orçamento para o reparo também é apresentado no mesmo dia.",
  },
  {
    q: "A Hidrodetect atende fora de Porto Velho?",
    a: "Sim. Atendemos Porto Velho e região, incluindo municípios próximos. Entre em contato pelo WhatsApp para verificar disponibilidade para o seu endereço específico.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "#1a6fbb",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            Perguntas frequentes
          </p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: "0 0 16px",
              color: "#1d1d1f",
            }}
          >
            Respostas diretas.
          </h2>
          <p
            style={{
              color: "#6e6e73",
              fontSize: 17,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            As dúvidas mais comuns sobre detecção de vazamentos em Porto Velho.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: `1px solid ${isOpen ? "rgba(26,111,187,0.25)" : "#e5e5e5"}`,
                  transition: "border-color 200ms",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    padding: "20px 24px",
                    background: isOpen ? "rgba(26,111,187,0.04)" : "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 200ms",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: 16,
                      color: isOpen ? "#1a6fbb" : "#1d1d1f",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.4,
                      transition: "color 200ms",
                    }}
                  >
                    {q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: isOpen ? "#1a6fbb" : "#f0f0f2",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background 200ms, transform 200ms",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <line x1="5" y1="0" x2="5" y2="10" stroke={isOpen ? "#fff" : "#6e6e73"} strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="0" y1="5" x2="10" y2="5" stroke={isOpen ? "#fff" : "#6e6e73"} strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 22px",
                      background: "rgba(26,111,187,0.04)",
                    }}
                  >
                    <p
                      style={{
                        color: "#6e6e73",
                        fontSize: 15,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
