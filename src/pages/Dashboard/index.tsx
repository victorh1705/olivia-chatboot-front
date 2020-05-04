import React, { useState } from "react";
import { Title, Form, Chat } from "./styles";

interface ChatMessage {
  type: "pergunta" | "resposta";
  texto: string;
}

const DashBoard = () => {
  const [messages] = useState<ChatMessage[]>([
    { type: "pergunta", texto: "Olá Como vai?" },
    { type: "resposta", texto: "Tudo bem e vc?" },
    { type: "pergunta", texto: "Estou ótimo 😀. Obrigado por perguntar" },
    { type: "resposta", texto: " Em que posso lhe ajudar?" },
  ]);

  return (
    <>
      <Title>
        <h3 className="titulo">olivia</h3>
        <Form>
          <input placeholder="Digite a sua pergunta" />
          <button>Enviar</button>
        </Form>
      </Title>

      <Chat>
        {messages &&
          messages.map((message) => (
            <div className={message.type}>
              <p>{message.texto}</p>
            </div>
          ))}
      </Chat>
    </>
  );
};
export default DashBoard;
