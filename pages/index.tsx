import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inicial } from "./Inicial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sua Página Inicial</title>
        <meta name="description" content="Descrição da sua página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div>
          <div>
            <h1>BEM VINDO!</h1>
            <p>
              PROJETO COM FOCO NA INCLUSÃO PARA PESSOAS DEFICIENTES VISUAIS
              COM O OBJETIVO DE CRIAR UMA EXPERIÊNCIA ÚNICA E INCLUSIVA PARA TODOS
              OS USUÁRIOS. ESTAMOS ENTUSIASMADOS EM APRESENTAR NOSSO LEITOR DE VOZ, UMA FERRAMENTA INOVADORA, A QUAL PROPORCIONARÁ UMA INTERAÇÃO INCRÍVEL E ACESSÍVEL.
            </p>
          </div>
          <div>
            <img src="/img/olho.jpg" alt="Descrição da imagem" />
          </div>
        </div>
        <div>
          <div>
            <h2>O QUE OFERECEMOS</h2>
            <p>
              Leitor de texto dinâmico, transformando um texto em uma
              voz. Nosso leitor permite que o usuário com deficiência
              visual escute o que está sendo apresentado no texto.
            </p>
          </div>
          <div>
            <h2>CADASTRE-SE PARA UMA EXPERIÊNCIA PERSONALIZADA</h2>
            <p>
              Nós acreditamos na importância de oferecer uma experiência
              verdadeiramente personalizada e acessível. Para garantir que
              possamos atender suas necessidades específicas e proporcionar a
              melhor experiência possível, solicitamos que você realize um
              rápido cadastro informando sobre sua deficiência visual
            </p>
          </div>
          <div>
            <h2>NOSSO COMPROMISSO COM O SUPORTE INCLUSIVO</h2>
            <p>
              Estamos empenhados em oferecer suporte abrangente e acessível.
              Queremos garantir que cada pessoa, independente de suas
              necessidades, sinta-se totalmente apoiada ao explorar nossa
              plataforma. Para isso, apresentamos o nosso compromisso com o
              suporte inclusivo.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
