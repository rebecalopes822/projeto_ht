import React, { ChangeEvent, useState } from "react";
import { Button, Form, Input, Label, PageContainer, Title, FormContainer, InputGroup } from "./styles";

export default function Login() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    telefone: "",
    cargo: "",
    loginEmail: "",
    loginSenha: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleButtonClick = () => {
    setFormData({
      nome: "",
      sobrenome: "",
      email: "",
      senha: "",
      telefone: "",
      cargo: "",
      loginEmail: "",
      loginSenha: "",
    });
    setIsButtonVisible(false);
  };

  return (
    <PageContainer>
      <FormContainer>
        <Form>
          <Title>PREENCHA COM SUAS INFORMAÇÕES PESSOAIS</Title>
          <InputGroup>
            <Label htmlFor="nome">NOME</Label>
            <Input
              id="nome"
              name="nome"
              type="text"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleInputChange}
            />
          </InputGroup>
          {/* Outros campos do formulário aqui */}
          {isButtonVisible && <Button onClick={handleButtonClick}>Enviar</Button>}
        </Form>

        {/* Outro formulário aqui */}
      </FormContainer>
    </PageContainer>
  );
}
