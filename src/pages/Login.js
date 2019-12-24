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
import { login } from "../api";
import axios from "axios";
import SessionManager from "../utils/session";

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: {
        type: '',
        message: '',
        open: false
      },
      form: {
        nrp: '',
        password: ''
      }
    }
  }

  componentDidMount() {
    if (SessionManager.isLoggedIn()) {
      this.props.history.replace('/b');
    }
  }
  
  handleChange = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    })
  }

  submitSuccessCallback = (data) => {
    this.props.history.push('/');
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

    login(this.state.form, this.submitSuccessCallback, this.submitErrorCallback);
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

                <h3 className="mb-4"><strong>Login</strong></h3>

                <Alert theme={this.state.alert.type} open={this.state.alert.open} fade={true}>
                  {this.state.alert.message}
                </Alert>

                <Form onSubmit={this.handleSubmit}>
                  <Row form>
                    <Col md="8">
                      <FormGroup>
                        <label htmlFor="nrp">NRP</label>
                        <FormInput
                          id="nrp"
                          name="nrp"
                          placeholder="NRP Baru"
                          onChange={this.handleChange}
                        />
                      </FormGroup>

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

export default withRouter(Login);