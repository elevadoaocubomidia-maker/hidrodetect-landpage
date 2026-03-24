const WA =
  "https://wa.me/5569999463585?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20detec%C3%A7%C3%A3o%20de%20vazamento.";

export default function FinalCTA() {
  return (
    <section id="contato" style={{ background: "#fff", padding: "100px 24px" }}>
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            color: "#1a6fbb",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 16,
            marginTop: 0,
          }}
        >
          Fale agora
        </p>

        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(30px, 5vw, 52px)",
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: 16,
            marginTop: 0,
            color: "#1d1d1f",
          }}
        >
          Mande uma mensagem agora.
        </h2>

        <p
          style={{
            color: "#6e6e73",
            fontSize: 19,
            lineHeight: 1.6,
            marginBottom: 44,
            marginTop: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Atendemos Porto Velho e região. Resposta rápida, visita técnica com hora marcada.
        </p>

        {/* Main CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
          style={{
            padding: "18px 40px",
            fontSize: 19,
            justifyContent: "center",
          }}
        >
          <WAIcon />
          Falar no WhatsApp
        </a>

        {/* Contact info */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
          }}
        >
          <a
            href="tel:+5569999463585"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#1d1d1f",
              textDecoration: "none",
              fontSize: 16,
              fontWeight: 500,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fbb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1d1d1f")}
          >
            <PhoneIcon />
            (69) 9946-3585
          </a>
          <a
            href="mailto:cacavazamentoshidrodetect@gmail.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#6e6e73",
              textDecoration: "none",
              fontSize: 15,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1a6fbb")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
          >
            <MailIcon />
            cacavazamentoshidrodetect@gmail.com
          </a>
          <a
            href="https://www.instagram.com/hidrodetect_cacavazamentos/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#6e6e73",
              textDecoration: "none",
              fontSize: 15,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6e73")}
          >
            <InstagramIcon />
            @hidrodetect_cacavazamentos
          </a>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
