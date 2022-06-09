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
    const [dict, setDocumento] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:5000/admin/data-dis")
            .then((response) => setDocumento(response.data))
            .catch((error) => console.log(error));
    }, []);
    
    return (      
      <div className="content">
        {Object.entries(dict).map(([key, value]) => (
          <Col key = {key}>
            <Card body className="text-left">
              <CardBody>                             
                <Row>
                  <Col>
                      <CardTitle style={{fontWeight:"bold"}} tag="h4">{(dict[key])[0]}</CardTitle>
                      <CardText tag="p">Prevalência: {(dict[key])[1]}</CardText>
                      <CardText tag="p">Agente Infeccioso: {(dict[key])[3]}</CardText>
                      <CardText tag="p">Formas de Contágio: {(dict[key])[4]}</CardText>
                      <CardText tag="p">Quadro Clínico Comum: {(dict[key])[7]}</CardText>
                      <CardText tag="p">Unidades de Saúde Referência: {(dict[key])[8]}</CardText>
                      <CardText tag="p">Medidas de Prevenção: {(dict[key])[5]}</CardText>
                      <CardText tag="p">Transmissibilidade: {(dict[key])[6]}</CardText>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    );
}

  export default Diseases