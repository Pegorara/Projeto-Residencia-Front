import axios from "axios";
import { useState, useEffect } from "react";
import {CFormSelect} from '@coreui/react'
import './style.css'

const Cadastro = () => {
  const [estados, setEstados] = useState();
  const [cidades, setCidades] = useState();
  const [currentUf, setCurrentUf] = useState();
  const [currentEstado, setCurrentEstado] = useState("Estado");
  const [currentCidade, setCurrentCidade] = useState("Cidade");

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => setEstados(res.data));
  }, []);

  useEffect(() => {
    console.log("opdsapojadsjpodsa");
    if (currentUf && currentUf != null) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentUf}/municipios`
        )
        .then((res) => setCidades(res.data));
    }
  }, [currentUf]);

  return (
    <>
      {currentUf && <h1>{currentUf}</h1>}
      <section className="cadastroLocal">
        <form action="" method="POST">
          <fieldset>
            <legend>Dados do usuário</legend>
            <select name="type" id="typeUser">
              <option value="estabelecimento">Estabelecimento</option>
              <option value="produtor">Produtor Rural</option>
            </select>
            <input
              type="text"
              name="nome"
              required
              placeholder="Nome do Estabelecimento"
            />
            <input type="email" name="email" required placeholder="Email" />
            <input type="password" name="senha" required placeholder="Senha" />
            <input type="number" name="cnpj" required plaaceholder="CNPJ" />
          </fieldset>
          <fieldset>
            <legend>Endereço</legend>
            <CFormSelect aria-label="Default select example">
            {estados &&
                estados.map((e) => (
                <option style={{color:"black"}} key={e.id} onClick={()=>{setCurrentUf(()=>e.id);setCurrentEstado(()=>e.nome);setCurrentCidade(()=>"Cidade")}}>{e.name}</option>
                ))}
            </CFormSelect>
            {/* <CDropdown>
              <CDropdownToggle>
                {currentCidade}
              </CDropdownToggle>
              <CDropdownMenu>
              {cidades &&
                cidades.map((e) => (
                <CDropdownItem key={e.id} onClick={()=>{setCurrentCidade(()=>e.nome)}}>{e.name}</CDropdownItem>
                ))}
              </CDropdownMenu>
            </CDropdown> */}
          </fieldset>
        </form>
      </section>
    </>
  );
};

export default Cadastro;
