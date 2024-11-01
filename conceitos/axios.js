/*
    -> O Axios é uma biblioteca JavaScript usada para fazer requisições HTTP no navegador ou no Node.js. 
    Ele facilita chamadas a APIs RESTful, permitindo enviar e receber dados de forma assíncrona (usando Promises)
    e é muito usado em aplicações front-end para interagir com APIs.
*/
// Exemplo:
import axios from "axios"; // importação do axios

export const registerUser = async (userData) => { // Export : para a função poder exportar para outros arquivos, colocando uma variavel chamada registerUser fazendo uma funçao assincrona, colocando em parametro o userdata
  try { // abrindo um try
    const response = await axios.post( // fazendo uma const chamada response, nela tem o await que espera a resolução de uma promesssa, em seguida colocamos axios + o metodo. 
      "https://localhost:7013/api/v1/register", // coloca  a url da API que esta te fornecendo o back end
      userData // Coloca o userData para armazenar as informações que o usuario colocou.
    );
    return response.data; // Retorna as informações
  } catch (error) { // fazendo um catch
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};
