import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import {
    Alert,
    Button,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

import {Row, Col} from "reactstrap";

const axios = require('axios').default;

function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname, setName] = useState("")
  const [pass, setPass] = useState("")
  
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Usuário inválido",
    pass: "Senha inválida"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Pega as infos do usuario
    const userData = database.find((user) => user.username === uname);

    // Envia para o backend
    axios.post('http://localhost:5000/admin/dashboard', {
      usuario: userData.username,
      senha: userData.password,
    })
    .catch(function (error) {
      console.log(error);
    });

    // Compara as infos do usuario
    if (userData) {
      if (userData.password !== pass) {
        // Senha invalida
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Usuario nao encontrado
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Gera mensagens de erro
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <Alert color="danger">{errorMessages.message}</Alert>
    );

  const renderForm = (
    <div className="content"
    style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <Row>
      {/* <Col md="4"></Col> */}
          <Col>
          <div className="form" >
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <div className="input-container">
                  <Label>Usuário </Label>
                  <Input 
                    type="text" 
                    name="uname"
                    placeholder="exemplo@email.com"
                    id="uname"
                    value={uname}
                    onChange={(event) => setName(event.target.value)}
                    required 
                  />
                  {renderErrorMessage("uname")}
                </div>
              </FormGroup>
              <FormGroup>
                <div className="input-container">
                  <Label>Senha </Label>
                  <Input 
                    type="password" 
                    name="pass" 
                    placeholder="Senha"
                    id="pass"
                    value={pass}
                    onChange={(event) => setPass(event.target.value)}
                    required 
                  />
                  {renderErrorMessage("pass")}
                </div>
              </FormGroup>
              <FormGroup>
                <Button color="primary" type="submit" onSubmit={handleSubmit}>
                  Entrar
                </Button>
              </FormGroup>
            </form>
          </div>
        </Col>
      </Row>
    </div>
    );

  return (
    <div className="content">
      <div className="login-form">
        {isSubmitted ? 
          <Switch>
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect to="/admin/dashboard" />
          </Switch>: renderForm}
      </div>
    </div>
  );
}

export default Login