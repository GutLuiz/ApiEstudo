// src/components/CepForm.tsx
import React, { useState, ChangeEvent } from "react";
import { buscaCep } from "../network/viaCepService";

interface FormState {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
  ibge: string;
}

const CepForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    cep: "",
    rua: "",
    bairro: "",
    cidade: "",
    uf: "",
    ibge: ""
  });

  const limpaFormulario = () => {
    setForm({
      cep: "",
      rua: "",
      bairro: "",
      cidade: "",
      uf: "",
      ibge: ""
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = async () => {
    try {
      const data = await buscaCep(form.cep);
      setForm({
        cep: form.cep,
        rua: data.logradouro || "",
        bairro: data.bairro || "",
        cidade: data.localidade || "",
        uf: data.uf || "",
        ibge: data.ibge || ""
      });
    } catch (error: any) {
      limpaFormulario();
      alert(error.message);
    }
  };

  return (
    <form>
      <label>
        CEP:
        <input
          name="cep"
          type="text"
          value={form.cep}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={9}
        />
      </label>
      <br />
      <label>
        Rua:
        <input name="rua" type="text" value={form.rua} onChange={handleChange} />
      </label>
      <br />
      <label>
        Bairro:
        <input name="bairro" type="text" value={form.bairro} onChange={handleChange} />
      </label>
      <br />
      <label>
        Cidade:
        <input name="cidade" type="text" value={form.cidade} onChange={handleChange} />
      </label>
      <br />
      <label>
        Estado:
        <input name="uf" type="text" value={form.uf} onChange={handleChange} />
      </label>
      <br />
      <label>
        IBGE:
        <input name="ibge" type="text" value={form.ibge} onChange={handleChange} />
      </label>
    </form>
  );
};

export default CepForm;
