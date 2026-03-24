const ITEMS = [
  {
    title: "Piscina cheia. Diagnóstico feito.",
    desc: "Usamos hidrofone subaquático com o técnico dentro da piscina. Equipamento e roupa de mergulho inclusos. A água fica onde está. Nenhum custo com esvaziamento, reenchimento ou reequilíbrio de cloro.",
  },
  {
    title: "Câmera termográfica para o que o olho não vê",
    desc: "Infrared detecta variações de temperatura em paredes, pisos e lajes, revelando umidade oculta muito antes de virar mancha. Ideal para imóveis onde o vazamento ainda não apareceu na superfície.",
  },
  {
    title: "Geofone digital de alta sensibilidade",
    desc: "Capta o som do vazamento através de concreto, cerâmica e alvenaria. O ponto exato é marcado antes de qualquer abertura. Sem desperdício de material, sem quebra desnecessária.",
  },
  {
    title: "Laudo técnico entregue na mesma visita",
    desc: "Documento formal com fotos, croqui de localização e descrição técnica do problema. Aceito por seguradoras e válido para contestar conta de água alta junto à concessionária.",
  },
  {
    title: "Diagnóstico e orçamento antes de ir embora",
    desc: "Você não fica no escuro esperando. Na mesma visita você já sabe o que está acontecendo, onde está e quanto vai custar para resolver. Sem surpresas depois.",
  },
  {
    title: "Arsenal completo para cada tipo de vazamento",
    desc: "Hidrofone subaquático · Geofone digital · Câmera termográfica · Roupa de mergulho · Pressurização de rede. Cada vazamento tem uma solução técnica específica. Não um martelo.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" style={{ background: "#f5f5f7", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header — left-aligned, Apple style */}
        <div style={{ maxWidth: 520, marginBottom: 64 }}>
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
            Diferenciais
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
            Por que escolher a Hidrodetect.
          </h2>
          <p
            style={{
              color: "#6e6e73",
              fontSize: 17,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Câmera termográfica, geofone digital, hidrofone subaquático e mergulhador. Cada ferramenta certa para cada tipo de problema. Sem achismo, sem quebra desnecessária.
          </p>
        </div>

        {/* Items */}
        <div className="diff-grid">
          {ITEMS.map(({ title, desc }) => (
            <div key={title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Check */}
              <div
                style={{
                  flexShrink: 0,
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  background: "#00b4d8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 2,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: 17,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.3,
                    marginBottom: 6,
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
