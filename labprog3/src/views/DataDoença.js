import React from "react";

import {
  Row,
  Button,
  Col,
} from "reactstrap";


    function Dado (){
        return(
            <div className="content">
                <Col md="12">
                    <form method="post">
                                <div className="form-group files">
                                    <h4>Insira seus arquivos</h4>
                                    <input type="file" className="form-control" ></input>
                                </div>
                            <Row>    
                            <div className="update ml-auto mr-auto">
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                >
                                Submeter
                                </Button>
                            </div>
                            </Row>
                    </form>
                </Col>
            </div>
        )
    }


export default Dado;