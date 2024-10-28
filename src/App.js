import React, { useState } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import ListaSantiere from "./listaSantiere";
import NoPage from "./noPage";
import SideBar from "./sidebar";
import { Route, Routes, NavLink } from "react-router-dom";
import FormSantier from "./formSantiere";

import TopBar from "./topbar";

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
  const [listaSantiere, setListaSantiere] = useState([]);

  const adaugInSantiere = (santierNou) => {
    // adaugare elemente noi.
    const nr = listaSantiere.length + 1;
    santierNou.id = nr;
    setListaSantiere([...listaSantiere, santierNou]); // adaugare element nou la obiect existent
  };

  return (
    <div>
      <TopBar />
      <SideBar />
      <Row>
        <Col sm>
          <Table striped bordered hover mx-100>
            <thead>
              <tr>
                <th>codSantier</th>
                <th>santier</th>
                <th>localitate</th>
                <th>judet</th>
              </tr>
            </thead>
            <ListaSantiere listaSantiereVechi={listaSantiere} />
          </Table>
        </Col>
      </Row>

      <FormSantier adaugSantier={adaugInSantiere} />

      {/* <FormExample />

        NavScrollExample />

        <NoPage /> */}
    </div>
  );
}
