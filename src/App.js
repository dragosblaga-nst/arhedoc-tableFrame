import React, { useState } from "react";
import { Nav, Container, Row, Col } from "react-bootstrap";

import NoPage from "./noPage";
import SideBar from "./sidebar";
import { Route, Routes, NavLink } from "react-router-dom";
import FormSantier from "./formSantiere";
import Div from "react-bootstrap";
import TopBar from "./topbar";
import TableFrame from "./tableframe";

//const [listaSantiere, setListaSantiere] = useState([]);
// import SideBar from "./sidebar";
// const listaSantiere = [
//   {
//     id: 1,
//     codSantier: "AAA",
//     santier: "santier",
//     localitate: "Localitate1",
//     judet: "judet1"
//   },
//   {
//     id: 2,
//     codSantier: "AAA",
//     santier: "santier2",
//     localitate: "Localitate2",
//     judet: "judet2"
//   },
//   {
//     id: 3,
//     codSantier: 3,
//     santier: "santier3",
//     localitate: "Localitate3",
//     judet: "judet3"
//   }
// ];

// const listaUnitSapaturi = [
//   {
//     nume_unit: "sectiunea1",
//     tip_sap:"sectiune",
//     an_sap: "localitate1",
//     id_sap: 1,
//   }
// ];

export default function App() {
  return (
    <Container>
      <TopBar />
      <Row>
        <Col sm={3}>
          <SideBar />
        </Col>
        <Col sm>
          <TableFrame />
        </Col>
      </Row>
    </Container>
  );
}
