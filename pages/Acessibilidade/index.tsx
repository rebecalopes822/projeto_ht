import {
    Section,
    BlueDiv,
    FlexDiv,
    TextContainer,
    Paragraph,
    Button,
    ImageContainer,
    Image,
    FlexDivButtons,
  } from "./styles";
  import imagem from "../../img/icon.jpg";
  import { LayoutContainer } from "../Inicial/styles";
  import { useState } from "react";
  
  export const Acessibilidade = () => {
    const [isReading, setIsReading] = useState(false);
  
    const speechSynthesis = window.speechSynthesis;
  
    const startReading = () => {
      if (isReading) return;
      setIsReading(true);
  
      const textToRead = `BEM-VINDO À NOSSA ABA DEDICADA À ACESSIBILIDADE, ONDE A INOVAÇÃO SE ENCONTRA COM A INCLUSÃO...`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      speechSynthesis.speak(utterance);
  
      utterance.onend = () => {
        setIsReading(false);
      };
    };
  
    const stopReading = () => {
      if (!isReading) return;
      speechSynthesis.cancel();
      setIsReading(false);
    };
  
    return (
      <Section>
        <BlueDiv>
          <h1>ACESSIBILIDADE</h1>
        </BlueDiv>
        <LayoutContainer>
          <FlexDiv>
            <TextContainer>
              <Paragraph>
                BEM-VINDO À NOSSA ABA DEDICADA À ACESSIBILIDADE, ONDE A INOVAÇÃO
                SE ENCONTRA COM A INCLUSÃO. AQUI APRESENTAMOS NOSSO REVOLUCIONÁRIO
                LEITOR DE TELA, PROJETADO PARA TORNAR A EXPERIÊNCIA DIGITAL
                ACESSÍVEL E EFICIENTE PARA TODOS. DESCUBRA COMO VOCÊ PODE EXPLORAR
                O CONTEÚDO DE MANEIRA ÚNICA E INTUITIVA:
              </Paragraph>
              <Paragraph>1. Leitura de Tela:</Paragraph>
              <Paragraph>
                Descrição Instantânea: Pressione “ATIVAR” para ouvir descrições
                detalhadas dos textos. Navegação Rápida: Pule entre os textos
                com facilidade usando comandos simples do seu teclado (ALT + /←/→)
              </Paragraph>
              <FlexDivButtons>
                <Button onClick={startReading}>ATIVAR</Button>
                <Button onClick={stopReading}>DESATIVAR</Button>
              </FlexDivButtons>
            </TextContainer>
            <ImageContainer>
              <Image src={imagem} alt="Ícone de acessibilidade" />
            </ImageContainer>
          </FlexDiv>
        </LayoutContainer>
      </Section>
    );
  };