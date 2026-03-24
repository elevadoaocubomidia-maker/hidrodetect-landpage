const STEPS = [
  {
    num: "01",
    title: "Chamado via WhatsApp",
    desc: "Manda mensagem descrevendo o sintoma: nível da piscina caindo, conta de água alta, mancha de umidade.",
  },
  {
    num: "02",
    title: "Visita técnica agendada",
    desc: "O Rafael vai ao local com equipamento especializado em hora marcada. Atendemos Porto Velho e região.",
  },
  {
    num: "03",
    title: "Detecção com geofone e hidrofone",
    desc: "O equipamento mapeia a tubulação e localiza o ponto exato do vazamento pelo som e variação de pressão.",
  },
  {
    num: "04",
    title: "Laudo técnico com fotos",
    desc: "Documento formal com localização exata, fotos e descrição do problema. Entregue na mesma visita.",
  },
  {
    num: "05",
    title: "Orçamento de reparo",
    desc: "Após confirmar o diagnóstico, o Rafael apresenta o orçamento para correção. Transparência total.",
  },
  {
    num: "06",
    title: "Reparo (opcional)",
    desc: "A Hidrodetect também executa o reparo dependendo do caso. Ciclo completo dentro da mesma empresa.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ background: "#fff", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
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
            Processo
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
            Da ligação ao laudo:<br />tudo na mesma visita.
          </h2>
          <p
            style={{
              color: "#6e6e73",
              fontSize: 17,
              lineHeight: 1.6,
              margin: "0 auto",
              maxWidth: 460,
            }}
          >
            Sem surpresa, sem obra desnecessária. Você sabe o que tem antes de qualquer martelada.
          </p>
        </div>

        {/* Steps grid */}
        <div className="steps-grid">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Number */}
              <div
                style={{
                  flexShrink: 0,
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: "#0a1628",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00b4d8",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.05em",
                }}
              >
                {num}
              </div>
              <div style={{ paddingTop: 2 }}>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                    marginBottom: 8,
                    marginTop: 0,
                    color: "#1d1d1f",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "#6e6e73", fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
