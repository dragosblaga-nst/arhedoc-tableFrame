import Button from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const FormSantier = (props) => {
  const [codSantier, setCodSantier] = useState("");
  const [santier, setSantier] = useState("");
  const [localitate, setLocalitate] = useState("");
  const [judet, setJudet] = useState("");

  const SalvezFormular = (evt) => {
    evt.preventDefault();
    const santierNou = {
      // echivalent cu {codSantier,santier localitate judet}
      codSantier: codSantier,
      santier: santier,
      localitate: localitate,
      judet: judet
    };
    props.adaugSantier(santierNou);
    setCodSantier("");
    setSantier("");
    setLocalitate("");
    setJudet("");
  };

  return (
    <Form onSubmit={SalvezFormular} className="bg-light p-5">
      <Form.Group className="mb-3">
        <Form.Label>
          Cod Santier<sup>*</sup>
        </Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Cod Santier"
          value={codSantier}
          onChange={(e) => setCodSantier(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>

        <Form.Text className="text-muted">Cod SIRUTA / LMI</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Nume Santier</Form.Label>
        <Form.Control
          required //MANDATORY FIELD
          type="text"
          placeholder="Numele Santierului"
          value={santier}
          onChange={(e) => setSantier(e.target.value)}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Row>
        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>Judet</Form.Label>
            <Form.Control
              type="text"
              placeholder="Judet"
              value={judet}
              onChange={(e) => setJudet(e.target.value)}
            />
          </Form.Group>
        </Col>

        <Col md>
          <Form.Group className="mb-3">
            <Form.Label>Localitate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Localitate"
              value={localitate}
              onChange={(e) => setLocalitate(e.target.value)}
            />
            <Form.Text className="text-muted">
              UAT-ul careia ii corespunde
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Salveaza
      </Button>
    </Form>
  );
};

export default FormSantier;
