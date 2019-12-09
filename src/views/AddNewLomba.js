import React, { Component } from "react";

import {
  Card,
  CardHeader, Col,
  Container,
  Row
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import FormNewLomba from "../components/components-overview/FormNewLomba";

class AddNewLomba extends Component {

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4 mx-auto">
                <Row noGutters className="page-header py-4">
                  <Col>
                    <PageTitle sm="4"
                               subtitle="Rekap Lomba"
                               title="Tambah Sertifikat Lomba"
                               className="text-sm-left" />
                  </Col>
                </Row>

                <Row>
                  <Col lg="8">
                    <Card small className="pb-3">
                      <CardHeader className="border-bottom mb-2">
                        <h6 className="m-0">Form Tambah Sertifikat</h6>
                      </CardHeader>
                      <FormNewLomba />
                    </Card>
                  </Col>
                </Row>
            </Container>
        );
    }

}

export default AddNewLomba;
