import React from "react";
import Layout from "../components/layout";
import emoji from "../components/emoji";

const NotFoundPage = () => (
  <Layout>
    <section className="section has-text-centered">
      <h2 className="title">404 Não Encontrado</h2>
      <p>
        Você tentou acessar uma página que não existe{" "}
        <emoji emoji="😥">😥</emoji>
      </p>
    </section>
  </Layout>
);

export default NotFoundPage;
