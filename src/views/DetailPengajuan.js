import React, {Component} from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card, CardBody, CardHeader, CardImg,
  Col,
  Container,
  Row
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import FormNewLomba from "../components/components-overview/FormNewLomba";

class DetailPengajuan extends Component{
  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        {/*<Breadcrumb>*/}
        {/*  <BreadcrumbItem>*/}
        {/*    <a href="/admin/verifikasi">Verifikasi</a>*/}
        {/*  </BreadcrumbItem>*/}
        {/*  <BreadcrumbItem active>Detail Pengajuan</BreadcrumbItem>*/}
        {/*</Breadcrumb>*/}
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
                <h6 className="m-0">Lomba Hackaton: Kartini on Rails</h6>
              </CardHeader>
              <CardBody>
                <Row className="mb-3">
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Mahasiswa
                    </strong>
                    <span>
                      Falah Nurli Filano
                    </span>
                  </Col>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Penyelenggara Lomba
                    </strong>
                    <span>
                      Departemen Teknologi HTMC ITS
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Skala
                    </strong>
                    <span>
                      Jurusan
                    </span>
                  </Col>
                  <Col lg="6">
                    <strong className="text-muted d-block mb-1">
                      Tahun
                    </strong>
                    <span>
                      2017
                    </span>
                  </Col>
                </Row>
              </CardBody>
              <Card small className="m-3">
                <CardImg src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-template-design-654663e2d327b1a9c9c4c2f48759dfaa_screen.jpg?ts=1561531593"/>
              </Card>
            </Card>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default DetailPengajuan;
