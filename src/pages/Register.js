import {
  Button,
  Card,
  CardBody,
  Col,
  Container, Form, FormGroup, FormInput,
  Row,
  Alert
} from "shards-react";
import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import { register } from "../api";
import SessionManager from "../utils/session";

class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: {
        type: '',
        message: '',
        open: false
      },
       form: {
         nama: '',
         nrp: '',
         email: '',
         password: '',
         password_confirmation: ''
       }
    }
  }

  componentDidMount() {
    if (SessionManager.isLoggedIn()) {
      this.props.history.replace('/beranda');
    }
  }

  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  }

  submitSuccessCallback = () => {
    this.props.history.replace({
      pathname: '/login'
    });
  }

  submitErrorCallback = (data) => {
    this.setState({
      alert: {
        type: 'danger',
        open: true,
        message: data
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      alert: {
        ...this.state.alert,
        open: false
      }
    });

    register(this.state.form, this.submitSuccessCallback, this.submitErrorCallback);
  }
  
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

                <h3 className="mb-4"><strong>Register</strong></h3>

                <Alert theme={this.state.alert.type} open={this.state.alert.open} fade={true}>
                  {this.state.alert.message}
                </Alert>

                <Form onSubmit={this.handleSubmit}>
                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="nama">Nama Lengkap</label>
                        <FormInput
                          id="nama"
                          name="nama"
                          placeholder="Nama Lengkap"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="6">
                      <FormGroup>
                        <label htmlFor="nrp">NRP</label>
                        <FormInput
                          id="nrp"
                          name="nrp"
                          placeholder="NRP Baru"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="email">Email</label>
                        <FormInput
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="password">Password</label>
                        <FormInput
                          id="password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md="12">
                      <FormGroup>
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <FormInput
                          id="password_confirmation"
                          name="password_confirmation"
                          placeholder="Confirm Password"
                          type="password"
                          onChange={this.handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Button type="submit" className="mt-3 px-4">Register</Button>
                  <Link to="/login">
                    <Button theme="white" className="ml-2 mt-3">Login</Button>
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

export default withRouter(Register);