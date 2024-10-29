/*
    -> O Axios é uma biblioteca JavaScript usada para fazer requisições HTTP no navegador ou no Node.js. 
    Ele facilita chamadas a APIs RESTful, permitindo enviar e receber dados de forma assíncrona (usando Promises)
    e é muito usado em aplicações front-end para interagir com APIs.
*/
// Exemplo:
import axios from "axios";

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "https://localhost:7013/api/v1/register",
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};
/*
 Neste exemplo, ele faz uma função assincrona e cria uma variavel chamada response
 para guardar o metodo post junto com o url + as respostas do usuario.
 Em seguida dele retorna as respostas.
*/