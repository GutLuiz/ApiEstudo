// src/services/viaCepService.ts
import axios from "axios";

interface CepData {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
}

export const buscaCep = async (cep: string): Promise<CepData> => {
  const cepLimpo = cep.replace(/\D/g, "");

  if (cepLimpo.length === 8) {
    try {
      const response = await axios.get<CepData>(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (!("erro" in response.data)) {
        return response.data;
      } else {
        throw new Error("CEP não encontrado.");
      }
    } catch (error) {
      throw new Error("Erro ao consultar o CEP.");
    }
  } else {
    throw new Error("Formato de CEP inválido.");
  }
};
