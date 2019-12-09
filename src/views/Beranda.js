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

class Beranda extends Component{
  render() {
    return(
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle title="Lomba" subtitle="Beranda" className="text-sm-left mb-3" />
        </Row>
        <Row>
          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Lomba
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Roboboat Competition
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2018</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <span className="text-muted">Belum Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="12" className="mb-4">
          <Card small className="card-post card-post--1">
            <div
              className="card-post__image"
              style={{ backgroundImage: `url(https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png)` }}>
              <Badge theme="dark" className={`card-post__category`}>
                Lomba
              </Badge>
            </div>
            <CardBody>
              <h5 className="card-title">
                <a href="#" className="text-fiord-blue">
                  Roboboat Competition
                </a>
              </h5>
              {/*Skala*/}
              <span className="card-text d-inline-block mb-3">Internasional</span> { }
              <span className="card-text d-inline-block mb-3"> · </span> { }
              {/*Tahun*/}
              <span className="card-text d-inline-block mb-3">2018</span>
            </CardBody>
            <CardFooter className="text-muted border-top py-3">
              <span className="text-muted">Belum Diverifikasi</span>
            </CardFooter>
          </Card>
        </Col>

          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Lomba
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Roboboat Competition
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2018</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <span className="text-muted">Belum Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="12" className="mb-4">
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(https://omextemplates.content.office.net/support/templates/en-us/lt04027254.png)` }}>
                <Badge theme="dark" className={`card-post__category`}>
                  Lomba
                </Badge>
              </div>
              <CardBody>
                <h5 className="card-title">
                  <a href="#" className="text-fiord-blue">
                    Roboboat Competition
                  </a>
                </h5>
                {/*Skala*/}
                <span className="card-text d-inline-block mb-3">Internasional</span> { }
                <span className="card-text d-inline-block mb-3"> · </span> { }
                {/*Tahun*/}
                <span className="card-text d-inline-block mb-3">2018</span>
              </CardBody>
              <CardFooter className="text-muted border-top py-3">
                <span className="text-muted">Belum Diverifikasi</span>
              </CardFooter>
            </Card>
          </Col>
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
