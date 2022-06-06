import React, {useState} from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const axios = require('axios').default;

function Update({history}) {
  const [name, setName] = useState('');
  const [prev, setPrev] = useState('');
  const [area, setArea] = useState('');
  const [agnt, setAgnt] = useState('');
  const [cont, setCont] = useState('');
  const [mprev, setMprev] = useState('');
  const [trans, setTrans] = useState('');
  const [apclin, setApclin] = useState('');
  const [unref, setUnref] = useState('');

  const cadastro = {name, prev, area, agnt, cont, mprev, trans, apclin, unref}

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(cadastro)
    //Envia para o backend
    axios.post('http://localhost:5000/admin/update',cadastro)
    .then((response)=>{
      history.push('/dashboard')
    })
    .catch(function (error) {
      console.log(error);
    });
  };





  return (
    <>
      <div className="content">
        <Row>
          <Col >
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Atualizar Doença</CardTitle>
              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit}>
                    <Row> 
                    <Col>
                        <FormGroup>
                            <label>Nome da Doença</label>
                            <Input
                              placeholder="Nome"
                              type="text"
                              value={name}
                              id = "name"
                              onChange={(e)=>{setName(e.target.value);console.log(cadastro)}}
                              required
                            />
                          </FormGroup>
                    </Col>
                    </Row>
                    <Col className="pl-1">
                      <FormGroup>
                        <label> Prevalência </label>
                        <Input placeholder="Prevalência" 
                        type="text"
                        value = {prev}
                        onChange={(e)=>setPrev(e.target.value)} 
                        />
                      </FormGroup>
                    </Col>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label> Área de Risco de Contágio</label>
                        <Input
                          placeholder="Área de risco"
                          type="text"
                          value = {area}
                          onChange={(e)=>setArea(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Agente Infeccioso</label>
                        <Input
                          placeholder="Agente infeccioso"
                          type="text"
                          value = {agnt}
                          onChange={(e)=>setAgnt(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Formas de Contágio</label>
                        <Input
                          placeholder="Formas de Contágio"
                          type="text"
                          value = {cont}
                          onChange={(e)=>setCont(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Medidas de Prevenção</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={mprev} onChange={(e)=>setMprev(e.target.value)}></textarea>
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Transmissibilidade</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={trans} onChange={(e)=>setTrans(e.target.value)}></textarea>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1">
                      <FormGroup>
                        <label>Apresentação Clínica</label>
                        <Input
                          placeholder="Apresentação Clínica"
                          type="multiline"
                          value = {apclin}
                          onChange={(e)=>setApclin(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1">
                      <FormGroup>
                        <label>Unidades de Saúde de Referência</label>
                        <Input
                          placeholder="Unidades Referência"
                          type="multiline"
                          value = {unref}
                          onChange={(e)=>setUnref(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        name= "btn"
                        value = "alterar"
                      >
                        Salvar Alterações
                      </Button>
                    </div>
                  </Row>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Update;
