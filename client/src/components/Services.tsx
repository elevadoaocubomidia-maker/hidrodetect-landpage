const SERVICES = [
  {
    icon: <PoolServiceIcon />,
    tag: "Piscina cheia",
    title: "Piscinas",
    subtitle: "Hidrofone digital · sem esvaziar",
    desc: "Detectamos vazamentos na tubulação de circulação, ralo de fundo ou estrutura com a piscina cheia. Sem custo e inconveniência de reenchimento.",
  },
  {
    icon: <WallServiceIcon />,
    tag: "Precisão milimétrica",
    title: "Imóveis e paredes",
    subtitle: "Geofone digital · sem quebrar antes de saber",
    desc: "Localizamos vazamentos em tubulações embutidas em paredes, pisos e lajes. Indicamos o ponto exato antes de qualquer abertura na alvenaria.",
  },
  {
    icon: <DocServiceIcon />,
    tag: "Validade técnica",
    title: "Laudo técnico",
    subtitle: "Documento formal na mesma visita",
    desc: "Fotos, localização exata e descrição do problema. Serve para contestar conta de água junto à concessionária, acionar seguro ou registrar o serviço.",
  },
  {
    icon: <PressureTestIcon />,
    tag: "Confirmação técnica",
    title: "Teste de estanqueidade",
    subtitle: "Pressurização da rede · resultado na hora",
    desc: "Pressurizamos a tubulação e monitoramos a queda de pressão para confirmar se há perda no circuito. Indicado antes de obras, reformas ou quando o medidor gira mesmo com tudo fechado.",
  },
];

export default function Services() {
  return (
    <section id="servicos" style={{ background: "#0a1628", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              color: "#00b4d8",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            Serviços
          </p>
          <h2
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            O que a Hidrodetect resolve.
          </h2>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {SERVICES.map(({ icon, tag, title, subtitle, desc }) => (
            <div key={title} className="service-card">
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(0, 180, 216, 0.1)",
                  border: "1px solid rgba(0, 180, 216, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#00b4d8",
                  marginBottom: 20,
                }}
              >
                {icon}
              </div>

              {/* Tag */}
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(0, 180, 216, 0.08)",
                  border: "1px solid rgba(0, 180, 216, 0.18)",
                  borderRadius: 980,
                  padding: "3px 12px",
                  color: "#00b4d8",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {tag}
              </span>

              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: 6,
                  marginTop: 0,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.42)",
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  marginBottom: 16,
                  marginTop: 0,
                }}
              >
                {subtitle}
              </p>
              <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PoolServiceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h20" />
      <path d="M2 7c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 17c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </svg>
  );
}

function WallServiceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18M15 3v18M3 9h6M15 9h6M3 15h6M15 15h6" />
    </svg>
  );
}

function DocServiceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function PressureTestIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
      <path d="M7 3.34A9 9 0 0 1 21 12" />
    </svg>
  );
}
