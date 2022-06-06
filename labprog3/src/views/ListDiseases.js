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
    console.log(dict)
    console.log(typeof(dict))
    // console.log((dict[0])[0]);
    // console.log(typeof(dict[0][0]));

    

    return(
        
        <div className="content">
                    <Col>
                        <Card body className="text-left">
                            <CardBody>
                                <Row>
                                    <Col>
                                        <CardTitle style={{fontWeight:"bold"}} tag="h4">{(dict[0])[0]}</CardTitle>
                                        <CardText tag="p">Prevalência: {(dict[0])[1]}</CardText>
                                        <CardText tag="p">Agente Infeccioso: {(dict[0])[3]}</CardText>
                                        <CardText tag="p">Formas de Contágio: {(dict[0])[4]}</CardText>
                                        <CardText tag="p">Quadro Clínico Comum: {(dict[0])[7]}</CardText>
                                        <CardText tag="p">Unidades de Saúde Referência: {(dict[0])[8]}</CardText>
                                        <CardText tag="p">Medidas de Prevenção: {(dict[0])[5]}</CardText>
                                        <CardText tag="p">Transmissibilidade: {(dict[0])[6]}</CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>    
                    </Col>
        </div>
        
    );
  }

  export default Diseases