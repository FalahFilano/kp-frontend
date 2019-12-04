import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  Button, InputGroup, InputGroupAddon, InputGroupText, Tooltip, FormFeedback
} from "shards-react";

const FormNewLomba = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>

            <Row form>
              <Col md="8">
                <FormGroup>
                  <label htmlFor="feNamaLomba">Nama Lomba</label>
                  <FormInput
                    id="feNamaLomba"
                    placeholder="Nama Lomba yang Anda ikuti"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="fePeringkatLomba">Peringkat</label>
                <FormInput
                  id="fePeringkatLomba"
                  placeholder="Contoh: Juara Harapan 2"
                />
              </Col>
            </Row>

            <Row form>
              <Col md="4">
                <FormGroup>
                  <label htmlFor="feSkalaLomba">Skala</label>
                  <FormInput
                    id="feSkalaLomba"
                    placeholder="Contoh: Kota/Nasional"
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
                      type="date"
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
                    placeholder="nama penyelenggara "
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md="6">
                <FormGroup>
                  <label>Gambar Sertifikat</label>
                  <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" accept="image/*" id="feGambarSertif" />
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
);

export default FormNewLomba;
