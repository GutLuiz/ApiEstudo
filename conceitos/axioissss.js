import axios from "axios";

export const login = async (userDate) => {
  try {
    const response = await axios.post(url, userDate);
    return response.data;
  } catch (error) {
    console.log("Erro ao registrar" + error);
    throw error;
  }
};
