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
import {Link} from "react-router-dom";

class Login extends Component {
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

                <h3><strong>Login</strong></h3>

                <Form>
                  <Row form>
                    <Col md="8" className="mt-4">
                      <FormGroup>
                        <label htmlFor="feNRP">NRP</label>
                        <FormInput
                          id="feNRP"
                          placeholder="NRP Baru"
                        />
                      </FormGroup>

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

                  <Button type="submit" className="mt-3 px-4">Login</Button>
                  <Link to="/register">
                    <Button theme="white" className="ml-2 mt-3">Register</Button>
                  </Link>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Login;
