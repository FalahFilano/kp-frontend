import React, { Component } from "react";

import {
  Card,
  CardHeader, Col,
  Container,
  Row,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormInput,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  Alert
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { addLomba } from "../api";

class AddNewLomba extends Component {
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
        juara: '',
        skala: '',
        tahun: '',
        penyelenggara: '',
        sertif: ''
      }
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

  handleImageChange = (event) => {
    let file = event.target.files[0];

    this.setState({
      form: {
        ...this.state.form,
        sertif: file
      }
    });
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

    let formData  = new FormData();
    for (var key in this.state.form) {
      formData.append(key, this.state.form[key]);
    }

    addLomba(formData, this.submitSuccessCallback, this.submitErrorCallback);
  }

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4 mx-auto">
        <Row noGutters className="page-header py-4">
          <Col>
            <PageTitle sm="4" subtitle="Rekap Lomba" title="Tambah Sertifikat Lomba" className="text-sm-left" />
          </Col>
        </Row>

        <Row>
          <Col lg="8">
            <Card small className="pb-3">
              <CardHeader className="border-bottom mb-2">
                <h6 className="m-0">Form Tambah Sertifikat</h6>
              </CardHeader>

              <ListGroup flush>
                <ListGroupItem className="p-3">
                  <Row>
                    <Col>

                      <Alert theme={this.state.alert.type} open={this.state.alert.open} fade={true}>
                        {this.state.alert.message}
                      </Alert>

                      <Form onSubmit={this.handleSubmit} encType="multipart/form-data">
                        <Row form>
                          <Col md="8">
                            <FormGroup>
                              <label htmlFor="nama">Nama Lomba</label>
                              <FormInput
                                id="nama"
                                name="nama"
                                placeholder="Nama Lomba yang Anda ikuti"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="fePeringkatLomba">Peringkat</label>
                            <FormInput
                              id="fePeringkatLomba"
                              name="juara"
                              placeholder="Contoh: Juara Harapan 2"
                              onChange={this.handleChange}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4">
                            <FormGroup>
                              <label htmlFor="feSkalaLomba">Skala</label>
                              <FormInput
                                id="feSkalaLomba"
                                name="skala"
                                placeholder="Contoh: Kota/Nasional"
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md="4">
                            <FormGroup>
                              <label htmlFor="feTahunLomba">Tahun</label>
                              <InputGroup seamless>
                                <InputGroupAddon type="prepend">
                                  <InputGroupText>
                                    <i className="material-icons">date_range</i>
                                  </InputGroupText>
                                </InputGroupAddon>
                                <FormInput
                                  id="feTahunLomba"
                                  name="tahun"
                                  // type="date"
                                  onChange={this.handleChange}
                                />
                              </InputGroup>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="8">
                            <FormGroup>
                              <label htmlFor="fePenyelenggaraLomba">Penyelenggara Lomba</label>
                              <FormInput
                                id="fePenyelenggaraLomba"
                                name="penyelenggara"
                                placeholder="nama penyelenggara "
                                onChange={this.handleChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="6">
                            <FormGroup>
                              <label>Gambar Sertifikat</label>
                              <div className="custom-file mb-3">
                                <input 
                                  id="feGambarSertif" 
                                  name="sertif"
                                  type="file"
                                  className="custom-file-input"
                                  accept="image/*" 
                                  onChange={this.handleImageChange}
                                />
                                <label className="custom-file-label" htmlFor="feGambarSertif">
                                  Pilih Gambar...
                                </label>
                              </div>
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button type="submit" id="tambahSertif">Tambah Sertifikat Baru</Button>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>

            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default AddNewLomba;
