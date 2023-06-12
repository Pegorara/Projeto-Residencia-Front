import { useState } from "react";
import axios from "axios";
import { CButton, CCard, CForm, CFormInput, CFormLabel } from "@coreui/react";
import { Link } from "react-router-dom";

import './style.css'

const Login = () => {
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  function userLogin() {
    const data = {
      email: userEmail,
      senha: userPassword,
    }

    axios
    .post(`http://localhost:8080/login`, data)
  }

  function submitRequest(e) {
    e.preventDefault()
    e.stopPropagation()
    userLogin()
  }

  return (
    <div className="containerLogin">
      <div className="imgLogin"></div>
      <div className="loginForm">
        <CCard className="p-3" style={{background: '#EEE', height: '100%'}}>
          <h2>Login</h2>
          <hr />
          <CForm style={{height: '100%'}} onSubmit={(e) => submitRequest(e)}>
            <div className="loginInfos">
              <div>
                <CFormLabel htmlFor="email">E-mail</CFormLabel>
                <CFormInput type="email" id="email" onChange={(e) => setUserEmail(e.target.value)} />                
              </div>

              <div>
                <CFormLabel htmlFor="password">
                  Senha
                </CFormLabel>
                <CFormInput type="password" id="password" onChange={(e) => setUserPassword(e.target.value)} />
              </div>
              
              <CButton color="success" type="submit" style={{color: 'black'}}>Entrar</CButton>
              
              <div className="infos">
                <p>Não possui login? <Link style={{textDecoration: 'none', color: 'green'}} to="/cadastro">Cadastre-se</Link></p>
              </div>
            </div>
          </CForm>
        </CCard>
      </div>
    </div>
  )
}

export default Login;