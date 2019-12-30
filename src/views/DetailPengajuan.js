import React, {Component} from "react";
import {
  Card, CardBody, CardHeader, CardImg,
  Col,
  Container,
  Row
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { showLomba } from "../api";

class DetailPengajuan extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      alert: {
        type: '',
        message: '',
        open: false
      },
      lomba: {
        nama: '',
        penyelenggara: '',
        tahun: '',
        skala: '',
        sertif_link: '',
        user: {
          nama: '',
        }
      }
    }
  }

  componentDidMount() {
    this.updateLomba();
  }

  updateLomba = () => {
    const id = this.props.match.params.id;
    
    showLomba(id, (res) => {
      console.log(res.data);
      this.setState({
        lomba: res.data
      });
    });
  }
    
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4"
                     title="Detail Pengajuan"
                     subtitle="Verifikasi"
                     className="text-sm-left" />
        </Row>

        <Row>
          <Col>
            <Card small className="pb-3">
              <CardHeader className="border-bottom mb-2">
                <h6 className="m-0">{this.state.lomba.nama}</h6>
              </CardHeader>
              <CardBody>
                <Row className="mb-3">
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Mahasiswa
                    </strong>
                    <span>
                      {this.state.lomba.user.nama}
                    </span>
                  </Col>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Penyelenggara Lomba
                    </strong>
                    <span>
                      {this.state.lomba.penyelenggara}
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Skala
                    </strong>
                    <span>
                      {this.state.lomba.skala}
                    </span>
                  </Col>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Tahun
                    </strong>
                    <span>
                      {this.state.lomba.tahun}
                    </span>
                  </Col>
                </Row>
              </CardBody>
              <Card small className="m-3">
                <CardImg src={this.state.lomba.sertif_link}/>
              </Card>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default DetailPengajuan;
