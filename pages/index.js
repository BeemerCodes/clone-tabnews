import React from "react";
import Image from "next/image";
import Head from "next/head";
import image from "../img/construction.jpg";

function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="../img/favicon.png" />
      </Head>

      <h1
        style={{
          color: "#1c2e35",
          textAlign: "center",
          fontSize: "6em",
          margin: "0px",
        }}
      >
        Hello Word!
      </h1>
      <p
        style={{
          color: "#17242A",
          textAlign: "center",
          lineHeight: "1.6",
          fontSize: "23px",
          margin: "10px 0px 0px 0px",
        }}
      >
        A persistência é uma qualidade que pode nos ajudar a superar a
        insegurança. Como disse o famoso filósofo Confúcio, <br />
        <span style={{ fontStyle: "italic" }}>
          "Transportai um punhado de terra todos os dias e fareis uma montanha".
        </span>
      </p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          style={{
            width: "400px",
            height: "400px",
            margin: "0 auto",
            paddingTop: "30px",
          }}
          src={image}
        />
        {""}
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#17242A",
          fontStyle: "oblique",
          margin: "0",
          paddingTop: "30px",
        }}
      >
        Esta página está em desenvolvimento. Volte em breve. :&#41;
      </p>
    </div>
  );
}

export default Home;
