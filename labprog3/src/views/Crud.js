import React from "react";
import { Link } from 'react-router-dom';
// reactstrap components
import {
  Button,
  Row,
  Col,
} from "reactstrap";

function crud() {
  return (
    <div className="content">
      <Col>
        <Row>
          <Link to="./user-page">
            <Button
              className="btn-round"
              color="success"
              type="submit"
            >
              Cadastrar Doença
            </Button>
          </Link>
        </Row>
        <Row>
          <Link to="./data-dis">
            <Button
              className="btn-round"
              color="success"
              type="submit"
            >
              Acessar Dados de Doenças
            </Button>
          </Link>
        </Row>
        <Row>
          <Link to="./update">
            <Button
              className="btn-round"
              color="success"
              type="submit"
            >
              Atualizar Dados
            </Button>
          </Link>
        </Row>
        <Row>
          <Link to="./delete">
            <Button
              className="btn-round"
              color="success"
              type="submit"
            >
              Remover Doença
            </Button>
          </Link>
        </Row>
      </Col>
    </div>
  );
}

export default crud;