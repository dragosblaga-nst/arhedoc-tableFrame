import React from "react";
import Santier from "./santier";
const ListaSantiere = (props) => {
  const lista = props.listaSantiereVechi.map((item) => (
    <Santier
      codSantier={item.codSantier}
      santier={item.santier}
      localitate={item.localitate}
      judet={item.judet}
      key={item.id}
    />
  ));

  return lista;
};
export default ListaSantiere;
