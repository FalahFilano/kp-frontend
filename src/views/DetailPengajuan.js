import React, {Component} from "react";
import {Breadcrumb, BreadcrumbItem, Container, Row} from "shards-react";
import PageTitle from "../components/common/PageTitle";

class DetailPengajuan extends Component{
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/*<Breadcrumb>*/}
        {/*  <BreadcrumbItem>*/}
        {/*    <a href="/admin/verifikasi">Verifikasi</a>*/}
        {/*  </BreadcrumbItem>*/}
        {/*  <BreadcrumbItem active>Detail Pengajuan</BreadcrumbItem>*/}
        {/*</Breadcrumb>*/}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Detail Pengajuan" subtitle="Verifikasi" className="text-sm-left" />
        </Row>

        

      </Container>
    );
  }
}

export default DetailPengajuan;
