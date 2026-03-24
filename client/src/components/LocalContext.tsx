export default function LocalContext() {
  return (
    <section
      style={{
        background: "#0a1628",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-10%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0, 180, 216, 0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="stat-layout">
          {/* Stat — the unmissable number */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(88px, 16vw, 148px)",
                fontWeight: 800,
                color: "#00b4d8",
                letterSpacing: "-0.06em",
                lineHeight: 1,
              }}
            >
              77%
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 10,
              }}
            >
              da água tratada perdida
            </div>
          </div>

          {/* Text content */}
          <div>
            <p
              style={{
                color: "#00b4d8",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
                marginTop: 0,
              }}
            >
              Contexto local
            </p>
            <h2
              style={{
                color: "#fff",
                fontWeight: 800,
                fontSize: "clamp(22px, 3.5vw, 38px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: 20,
                marginTop: 0,
              }}
            >
              Porto Velho perde 77% da água tratada. O pior índice do Brasil.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 14,
                marginTop: 0,
              }}
            >
              Se você mora em Porto Velho, as chances de ter um vazamento não detectado são altíssimas. Boa parte dessa perda acontece dentro das residências, sem que o morador perceba.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.58)",
                fontSize: 17,
                lineHeight: 1.7,
                marginBottom: 24,
                marginTop: 0,
              }}
            >
              A Hidrodetect está aqui para resolver isso.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.25)",
                fontSize: 13,
                margin: 0,
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 16,
              }}
            >
              Fonte: Instituto Trata Brasil 2024. Porto Velho ocupa o 100º lugar (último) no Ranking de Saneamento entre 100 municípios avaliados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
