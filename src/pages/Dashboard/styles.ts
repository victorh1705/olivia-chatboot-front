import styled from "styled-components";
import { shade, tint } from "polished";

export const Title = styled.h3`
  font-size: 25px;
  color: #0c29d0;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }

  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#04d361")};
    }
  }
`;

export const Chat = styled.div`
  margin: 40px 0;
  padding: 20px;
  background: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  .pergunta {
    display: inline-flex;
    flex-direction: row-reverse;

    p {
      width: fit-content;
      padding: 10px 20px;
      background-color: #efefef;
      border-radius: 10px 0 10px 10px;
    }
  }

  .resposta {
    display: inline-flex;
    flex-direction: row;

    p {
      width: fit-content;
      padding: 10px 20px;
      background-color: ${shade(0.2, "#efefef")};
      border-radius: 0 10px 10px 10px;
    }
  }
`;
