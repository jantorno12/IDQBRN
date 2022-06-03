import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Delete(){
    return(
        <div className="content">
            <Row>
                <Col md="12">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Remover Doença</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Col md="12">
                                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option selected>Selecionar Doença</option>
                                        <option value="leishmaniose">Leishmaniose</option>
                                        <option value="esquistossomose">Esquistossomose</option>
                                        <option value="doença de chagas">Doença de Chagas</option>
                                        <option value="malaria">Malária</option>
                                        <option value="leptospirose">Leptospirose</option>
                                        <option default value="dengue">Dengue</option>
                                        <option value="febre amarela">Febre Amarela</option>
                                        <option value="tuberculose">Tuberculose</option>
                                    </select>
                                </Col>
                                <Row>
                                    <div className="update ml-auto mr-auto">
                                        <Button
                                            className="btn-round"
                                            color="danger"
                                            type="submit"
                                        >
                                            Remover Doença
                                        </Button>
                                    </div>
                                </Row>
                            </CardBody>    
                        </Card>    

                </Col>
            </Row>    
        </div>
    );
}

export default Delete;