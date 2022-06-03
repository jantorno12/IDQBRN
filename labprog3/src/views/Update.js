import React from "react";

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

function update() {
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
                <Form>
                    <Row> 
                    <Col>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Selecionar Doença</option>
                            <option value="leishmaniose">Leishmaniose</option>
                            <option value="esquistossomose">Esquistossomose</option>
                            <option value="doença de chagas">Doença de Chagas</option>                                <option value="malaria">Malária</option>
                            <option value="leptospirose">Leptospirose</option>
                            <option default value="dengue">Dengue</option>
                            <option value="febre amarela">Febre Amarela</option>
                            <option value="tuberculose">Tuberculose</option>
                        </select>
                    </Col>
                    </Row>
                    <Col className="pl-1">
                      <FormGroup>
                        <label> Prevalência </label>
                        <Input placeholder="Prevalência" type="text" />
                      </FormGroup>
                    </Col>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label> Área de Risco de Contágio</label>
                        <Input
                          placeholder="Área de risco"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Agente Infeccioso</label>
                        <Input
                          placeholder="Agente infeccioso"
                          type="text"
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
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Medidas de Prevenção</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Transmissibilidade</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1">
                      <FormGroup>
                        <label>Unidades de Saúde de Referência</label>
                        <Input
                          placeholder="Unidades Referência"
                          type="multiline"
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
                      >
                        Salvar Alterações
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default update;
