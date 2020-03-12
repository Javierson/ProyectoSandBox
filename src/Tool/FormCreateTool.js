import React, { useState } from "react";
import { Form } from ".";

const FormCreateTool = () => {
  const [state, setState] = useState({
    Herramienta: [
      { Nombre: "Herramienta 1", Tipo: 1 },
      { Nombre: "Herramienta 2", Tipo: 2 }
    ]
  });

  return (
    <form onSubmit={e => e.preventDefault()}>
      {/* setState = { async ({ target: { name, value } }) => await setState({ ...state, Herramienta: { Array(...state.Herramienta).concat([]), [name]: value } }) } */}

      <Form state={state} />
    </form>
  );
};

export default FormCreateTool;
