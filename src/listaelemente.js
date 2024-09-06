import React from "react";
import Element from "./element";

const ListaElemente = (props) => {
  const lista = props.listaElementeVechi.map((item) => (
    <Element
      codSantier={item.codSantier}
      santier={item.santier}
      localitate={item.localitate}
      judet={item.judet}
      key={item.id}
    />
  ));

  return lista;
};
export default ListaElemente;
