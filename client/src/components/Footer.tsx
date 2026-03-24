const WA =
  "https://wa.me/5569999463585?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20detec%C3%A7%C3%A3o%20de%20vazamento.";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f5f5f7",
        borderTop: "1px solid #d2d2d7",
        padding: "52px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top: logo + contact */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <img
                src="/logo-preto.png"
                alt="Hidrodetect"
                style={{ height: 32, width: "auto", objectFit: "contain" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <div
                  style={{
                    color: "#1d1d1f",
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  HIDRODETECT
                </div>
                <div
                  style={{
                    color: "#1a6fbb",
                    fontWeight: 600,
                    fontSize: 9,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Caça Vazamentos
                </div>
              </div>
            </div>
            <p
              style={{
                color: "#6e6e73",
                fontSize: 13,
                lineHeight: 1.6,
                margin: 0,
                maxWidth: 260,
              }}
            >
              Hidrodetect Engenharia e Impermeabilização
              <br />
              Porto Velho, Rondônia
            </p>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                color: "#1d1d1f",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.02em",
                marginBottom: 12,
                marginTop: 0,
              }}
            >
              Contato
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#6e6e73", textDecoration: "none", fontSize: 14, transition: "color 200ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fbb")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
              >
                (69) 9946-3585
              </a>
              <a
                href="mailto:engenheirobatistel@gmail.com"
                style={{ color: "#6e6e73", textDecoration: "none", fontSize: 14, transition: "color 200ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fbb")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
              >
                engenheirobatistel@gmail.com
              </a>
              <span style={{ color: "#6e6e73", fontSize: 14 }}>
                R. Jardins, 1228, Bairro Novo, Porto Velho/RO
              </span>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p
              style={{
                color: "#1d1d1f",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.02em",
                marginBottom: 12,
                marginTop: 0,
              }}
            >
              Navegação
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Como funciona", href: "#como-funciona" },
                { label: "Serviços", href: "#servicos" },
                { label: "Diferenciais", href: "#diferenciais" },
                { label: "Contato", href: "#contato" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "#6e6e73",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fbb")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: legal */}
        <div
          style={{
            borderTop: "1px solid #d2d2d7",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#6e6e73", fontSize: 12, margin: 0 }}>
            © {new Date().getFullYear()} Hidrodetect Engenharia e Impermeabilização · Batistel Engenharia Diagnóstica e Soluções em Impermeabilização Ltda
          </p>
          <p style={{ color: "#6e6e73", fontSize: 12, margin: 0 }}>
            CNPJ 65.566.133/0001-75
          </p>
        </div>
      </div>
    </footer>
  );
}
