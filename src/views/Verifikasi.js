import React, {Component} from "react";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import {Link} from "react-router-dom";
import { getUnverifiedLomba } from "../api";

class Verifikasi extends Component{
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
    getUnverifiedLomba((res) => {
      this.setState({
        lombas: res.data
      });
    });
  }

  handleRowClick = (e, id) => {
    e.preventDefault();
    this.props.history.push('/admin/verifikasi/' + id);
  }

  renderLomba = () => {
    return this.state.lombas.map((lomba, index) => {
      const {id, nama, skala, tahun, user, created_at} = lomba;

      return (
        <tr key={id} onClick={(e) => this.handleRowClick(e, id)} style={{ cursor: 'pointer' }}>
          <td>{index+1}</td>
          <td>{user.nama}</td>
          <td>{user.nrp}</td>
          <td>{nama}</td>
          <td>{created_at}</td>
          <td>
            <Badge theme="secondary">Belum Diproses</Badge>
          </td>
        </tr>
      );
    });
  }
  
  render() {
    return(
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Pengajuan Prestasi Mahasiswa" subtitle="Verifikasi" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Bidang Akademik</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">
                        #
                      </th>
                      <th scope="col" className="border-0">
                        Nama
                      </th>
                      <th scope="col" className="border-0">
                        NRP
                      </th>
                      <th scope="col" className="border-0">
                        Nama Lomba
                      </th>
                      <th scope="col" className="border-0">
                        Tanggal Pengajuan
                      </th>
                      <th scope="col" className="border-0">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderLomba()}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Default Dark Table */}
        <Row>
          <Col>
            <Card small className="mb-4 overflow-hidden">
              <CardHeader className="bg-dark">
                <h6 className="m-0 text-white">Bidang Sertifikasi</h6>
              </CardHeader>
              <CardBody className="bg-dark p-0 pb-3">
                <table className="table table-dark mb-0">
                  <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Nama
                    </th>
                    <th scope="col" className="border-0">
                      NRP
                    </th>
                    <th scope="col" className="border-0">
                      Nama Lomba
                    </th>
                    <th scope="col" className="border-0">
                      Tanggal Pengajuan
                    </th>
                    <th scope="col" className="border-0">
                      Status
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Muhajir bin Abd. Latif</td>
                    <td>05111640000104</td>
                    <td>Lomba Makan Kerupuk Se Kecamatan Taman Kota Sidoarjo bersih hatinya</td>
                    <td>11/12/2019</td>
                    <td>
                      <Badge theme="secondary">Belum Diproses</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Falah Nurli Filano</td>
                    <td>05111640000122</td>
                    <td>Lomba Hackaton: Kartini on Rails dari departemen Tekno HMTC ke MIS Lab </td>
                    <td>11/12/2019</td>
                    <td>
                      <Badge theme="success">Diterima</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Marde Fasma</td>
                    <td>05111640000122</td>
                    <td>Lomba Hackaton: Kartini on Rails</td>
                    <td>11/12/2019</td>
                    <td>
                      <Badge theme="danger">Ditolak</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Ivanda Zevi Amalia</td>
                    <td>05111640000122</td>
                    <td>Lomba Hackaton: Kartini on Rails</td>
                    <td>11/12/2019</td>
                    <td>
                      <Badge theme="danger">Ditolak</Badge>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Verifikasi;
