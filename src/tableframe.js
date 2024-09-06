import React from "react";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import ListaElemente from "./listaelemente";
//import { Route, Routes, NavLink } from "react-router-dom";
import FormSantier from "./formSantiere";
import TopBar from "./topbar";

//import TopBar from "./topbar";

const TableFrame = () => {
  const [listaSantiere, setListaSantiere] = useState([]);

  const adaugInSantiere = (santierNou) => {
    // adaugare elemente noi.
    const nr = listaSantiere.length + 1;
    santierNou.id = nr;
    setListaSantiere([...listaSantiere, santierNou]); // adaugare element nou la obiect existent
  };

  return (
    <>
      {/* <FormSantier adaugSantier={adaugInSantiere} /> */}
      <Table striped bordered hover mx-100>
        <thead>
          <tr>
            <th>codSantier</th>
            <th>santier</th>
            <th>localitate</th>
            <th>judet</th>
          </tr>
        </thead>
        <ListaElemente listaElementeVechi={listaSantiere} />
      </Table>
    </>
  );
};

export default TableFrame;
