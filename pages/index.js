import React from "react";

function Home() {
  return (
    <div>
      <h1 style={{ color: "#2A4156", textAlign: "center", fontSize: "6em" }}>
        Hello Word!
      </h1>
      <p
        style={{
          color: "#2A3641",
          textAlign: "center",
          lineHeight: "1.6",
          fontSize: "23px",
        }}
      >
        A persistência é uma qualidade que pode nos ajudar a superar a
        insegurança. Como disse o famoso filósofo Confúcio, <br />
        <span style={{ fontStyle: "italic" }}>
          "Transportai um punhado de terra todos os dias e fareis uma montanha".
        </span>
      </p>

      <img src="/images/construction.jpg" alt="construction" />
    </div>
  );
}

export default Home;
