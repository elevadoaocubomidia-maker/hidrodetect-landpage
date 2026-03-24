const ITEMS = [
  {
    title: "Sem esvaziar a piscina",
    desc: "O serviço é feito com a piscina cheia. Zero custo e inconveniência com reenchimento e reequilíbrio químico.",
  },
  {
    title: "Sem quebrar antes de saber",
    desc: "O equipamento localiza o ponto exato do vazamento. Nenhuma abertura desnecessária antes do diagnóstico.",
  },
  {
    title: "Laudo técnico na mesma visita",
    desc: "Documento com fotos e localização exata entregue no mesmo dia. Serve para seguro e contestação de conta de água.",
  },
  {
    title: "Geofone + hidrofone digital",
    desc: "Equipamento especializado que identifica o vazamento pelo som e variação de pressão na tubulação. Precisão milimétrica.",
  },
  {
    title: "Diagnóstico e orçamento no mesmo dia",
    desc: "Você sai da visita técnica sabendo exatamente qual é o problema e quanto vai custar para resolver.",
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
            Método não destrutivo, equipamento especializado e laudo formal — tudo o que um vazamento oculto exige.
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
