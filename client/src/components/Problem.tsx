const SYMPTOMS = [
  {
    icon: <PoolIcon />,
    title: "Piscina que perde nível toda semana",
    desc: "Você completa a piscina com frequência e acha que é evaporação. Na maioria dos casos, é um vazamento na tubulação de circulação ou no fundo — invisível para quem não tem o equipamento certo.",
  },
  {
    icon: <DropIcon />,
    title: "Conta de água veio alta sem motivo aparente",
    desc: "A conta subiu e ninguém mudou os hábitos. Isso geralmente indica um vazamento oculto em tubulação embutida na parede ou no piso — perdendo água 24 horas por dia.",
  },
  {
    icon: <HouseIcon />,
    title: "Mancha de umidade que volta depois de pintar",
    desc: "Pintou, mas a mancha voltou em semanas. O problema não é a tinta — é um vazamento ou infiltração que ainda não foi localizado. Sem diagnóstico correto, o problema sempre volta.",
  },
];

export default function Problem() {
  return (
    <section id="problema" style={{ background: "#f5f5f7", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
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
            Você reconhece algum desses sintomas?
          </p>
          <h2
            style={{
              color: "#1d1d1f",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Você não está sozinho.
          </h2>
          <p
            style={{
              color: "#6e6e73",
              fontSize: 19,
              lineHeight: 1.6,
              margin: "0 auto",
              maxWidth: 520,
              letterSpacing: "-0.01em",
            }}
          >
            A maioria das pessoas demora meses para perceber. A Hidrodetect localiza o ponto exato e resolve.
          </p>
        </div>

        {/* Cards */}
        <div className="cards-grid">
          {SYMPTOMS.map(({ icon, title, desc }) => (
            <div key={title} className="problem-card">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(0, 180, 216, 0.09)",
                  border: "1px solid rgba(0, 180, 216, 0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00b4d8",
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 19,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                  marginBottom: 12,
                  marginTop: 0,
                  color: "#1d1d1f",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "#6e6e73",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoolIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M2 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 17c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M12 13c0 1.1.9 2 2 2s2-.9 2-2c0-2-2-4-2-4s-2 2-2 4z" />
    </svg>
  );
}
