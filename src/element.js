import React from "react";

const Element = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.codSantier}</td>
        <td>{props.santier}</td>
        <td>{props.localitate}</td>
        <td>{props.judet}</td>
      </tr>
    </tbody>
  );
};

export default Element;
