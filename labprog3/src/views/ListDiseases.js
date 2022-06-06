import React,{ useState, useEffect } from "react";

import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col,
  } from "reactstrap";

  const axios = require("axios").default;

  function Diseases() {

    // GET
    const [occ, setDocumento] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:5000/admin/data-dis")
            .then((response) => setDocumento(response.data))
            .catch((error) => console.log(error));
    }, []);

    console.log((occ[0])[0]);
    console.log(typeof(occ[0][0]));


    return(
        <div className="content">
            <Col>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">{(occ[0])[0]}</CardTitle>
                                    <CardText tag="p">Prevalência: {(occ[0])[1]}</CardText>
                                    <CardText tag="p">Agente Infeccioso: {(occ[0])[3]}</CardText>
                                    <CardText tag="p">Formas de Contágio: {(occ[0])[4]}</CardText>
                                    <CardText tag="p">Quadro Clínico Comum: {(occ[0])[7]}</CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: {(occ[0])[8]}</CardText>
                                    <CardText tag="p">Medidas de Prevenção: {(occ[0])[5]}</CardText>
                                    <CardText tag="p">Transmissibilidade: {(occ[0])[6]}</CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Leishmaniose</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Esquitossomose</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Doença de Chagas</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Malária</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Leptospirose</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Febre Amarela</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
                <Card body className="text-left">
                        <CardBody>
                            <Row>
                                <Col >
                                    <CardTitle style={{fontWeight:"bold"}} tag="h4">Tuberculose</CardTitle>
                                    <CardText tag="p">Descrição: </CardText>
                                    <CardText tag="p">Prevalência: </CardText>
                                    <CardText tag="p">Agente Infeccioso: </CardText>
                                    <CardText tag="p">Formas de Contágio: </CardText>
                                    <CardText tag="p">Quadro Clínico Comum: </CardText>
                                    <CardText tag="p">Unidades de Saúde Referência: </CardText>
                                    <CardText tag="p">Medidas de Prevenção: </CardText>
                                    <CardText tag="p">Transmissibilidade: </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                </Card>
            </Col>
        </div>
    );
  }

  export default Diseases