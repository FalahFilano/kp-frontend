import React, {Component} from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { getListLomba } from "../api";

class Beranda extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      alert: {
        type: '',
        message: '',
        open: false
      },
      lombas: []
    }
  }

  componentDidMount() {
    this.updateLomba();
  }
  
  updateLomba = () => {
    getListLomba((res) => {
      this.setState({
        lombas: res.data
      });
    });
  }

  renderLomba = () => {
    return this.state.lombas.map((lomba, index) => {
      const {nama, skala, tahun, sertif_link, status_text, status} = lomba;

      let status_display, status_icon = null;
      if (status === 1) {
        status_display = <span className='text-muted'>{status_text}</span>
      } else if (status === 2) {
        status_icon = <i className="material-icons text-primary">verified_user</i>
        status_display = <span className='text-primary'>{status_text}</span>
      } else if (status === 3) {
        status_icon = <i className="material-icons text-danger">cancel</i>
        status_display = <span className='text-danger'>{status_text}</span>
      }

      return (
        <Col lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: 'url('+sertif_link+')' }}>
              <Badge theme="dark" className={`card-post__category`}>
                Lomba
              </Badge>
            </div>
            <CardBody>
              <h5 className="card-title">
                <a href="#" className="text-fiord-blue">
                  {nama}
                </a>
              </h5>
              {/*Skala*/}
              <span className="card-text d-inline-block mb-3">{skala}</span> { }
              <span className="card-text d-inline-block mb-3"> · </span> { }
              {/*Tahun*/}
              <span className="card-text d-inline-block mb-3">{tahun}</span>
            </CardBody>
            <CardFooter className="text-muted border-top py-3">
              {status_icon} { }
              {status_display}
            </CardFooter>
          </Card>
        </Col>
      );
    });
  }
  
  render() {
    return(
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Lomba" subtitle="Beranda" className="text-sm-left mb-3" />
        </Row>
        <Row>
          {this.renderLomba()}
        </Row>

        <Row noGutters className="page-header py-4">
          <PageTitle title="Sertifikasi"  className="text-sm-left mb-3" />
        </Row>
        <Row>
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://www.elearnexcel.com/wp-content/uploads/2017/09/excel_master.jpg)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Sertifikasi
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Microsoft Excel Certification
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2016</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <i className="material-icons text-primary">
                  verified_user
                </i> { }
                <span className="text-primary">Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://www.elearnexcel.com/wp-content/uploads/2017/09/excel_master.jpg)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Sertifikasi
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Microsoft Excel Certification
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2016</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <i className="material-icons text-primary">
                  verified_user
                </i> { }
                <span className="text-primary">Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://www.elearnexcel.com/wp-content/uploads/2017/09/excel_master.jpg)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Sertifikasi
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Microsoft Excel Certification
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2016</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <i className="material-icons text-primary">
                  verified_user
                </i> { }
                <span className="text-primary">Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Beranda;
