import {
  Badge, Button,
  Card,
  CardBody, CardHeader,
  CardImg, CardImgOverlay,
  Col,
  Container, Form, FormFeedback, FormGroup, FormInput,
  Row
} from "shards-react";
import React, {Component} from "react";
import PageTitle from "../components/common/PageTitle";

class Register extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="my-5">
          <Col
            lg={{ size: 6, offset: 3 }}
            sm={{ size: 12, offset: 0 }}
            className="mb-4">
            <Card small className="card-post card-post--aside card-post--1">
              <div
                className="card-post__image"
                style={{
                  backgroundImage: `url('https://www.its.ac.id/lppm/wp-content/uploads/sites/71/2019/01/RC-2-EDIT.jpg')`,
                  minWidth: '50%'
                }}
              >
              </div>
              <CardBody className="p-5">

                <h3><strong>Register</strong></h3>

                <Form>

                  <Row form>
                    <Col md="12"className="mt-4">
                      <FormGroup>
                        <label htmlFor="feNamaLengkap">Nama Lengkap</label>
                        <FormInput
                          id="feNamaLengkap"
                          placeholder="Nama Lengkap"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="6">
                      <FormGroup>
                        <label htmlFor="feNRP">NRP</label>
                        <FormInput
                          id="feNRP"
                          placeholder="NRP Baru"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="feEmail">Email</label>
                        <FormInput
                          id="feEmail"
                          placeholder="Email"
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="fePassword">Password</label>
                        <FormInput
                          id="fePassword"
                          placeholder="Password"
                          type="password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Button type="submit" className="mt-3 px-4">Register</Button> { }
                  <Button outline className="mt-3">Login</Button>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Register;
