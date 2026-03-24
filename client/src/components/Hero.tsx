const WA =
  "https://wa.me/5569999463585?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20agendar%20uma%20detec%C3%A7%C3%A3o%20de%20vazamento.";

const RIPPLE_SIZES = [100, 200, 320, 450, 600, 760];

const BADGES = ["Geofone digital", "Hidrofone", "Termografia", "Laudo técnico"];

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        background: "#0a1628",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 68,
      }}
    >
      {/* Animated ripple rings — the visual signature of the page */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {RIPPLE_SIZES.map((size, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size,
              height: size,
              borderRadius: "50%",
              border: "1px solid rgba(0, 180, 216, 0.18)",
              animation: `ripple-out 7s ease-out ${i * 1.1}s infinite`,
            }}
          />
        ))}
        {/* Radial glow at center */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26, 111, 187, 0.14) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 160,
          background: "linear-gradient(to bottom, transparent, #0a1628)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "80px 24px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Location badge */}
        <div className="anim-fade-up" style={{ marginBottom: 32 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(0, 180, 216, 0.1)",
              border: "1px solid rgba(0, 180, 216, 0.28)",
              borderRadius: 980,
              padding: "6px 18px",
              color: "#00b4d8",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#00b4d8",
                display: "inline-block",
                animation: "pulse-dot 1.8s ease-in-out infinite",
              }}
            />
            Porto Velho e região
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="anim-delay-1"
          style={{
            color: "#fff",
            fontSize: "clamp(34px, 6.5vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.07,
            margin: "0 0 24px",
          }}
        >
          Caça Vazamentos em Porto Velho{" "}
          <span style={{ color: "#00b4d8" }}>sem esvaziar</span>
          {" "}e{" "}
          <span style={{ color: "#00b4d8" }}>sem quebrar.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="anim-delay-2"
          style={{
            color: "rgba(255,255,255,0.60)",
            fontSize: "clamp(16px, 2.2vw, 21px)",
            fontWeight: 400,
            lineHeight: 1.65,
            margin: "0 0 44px",
            letterSpacing: "-0.01em",
          }}
        >
          Laudo técnico com fotos na mesma visita.
          <br />
          Geofone digital e hidrofone para localizar com precisão.
        </p>

        {/* CTAs */}
        <div
          className="anim-delay-3"
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 52,
          }}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ padding: "15px 30px", fontSize: 17 }}
          >
            <WAIcon size={20} />
            Falar no WhatsApp
          </a>
          <a
            href="#como-funciona"
            className="btn-ghost"
            style={{ padding: "15px 30px", fontSize: 17 }}
          >
            Como funciona
          </a>
        </div>

        {/* Equipment badges */}
        <div
          className="anim-delay-4"
          style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}
        >
          {BADGES.map((b) => (
            <span
              key={b}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: 980,
                padding: "6px 14px",
                color: "rgba(255,255,255,0.55)",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: "0.01em",
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WAIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
