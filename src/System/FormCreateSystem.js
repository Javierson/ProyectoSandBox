import React, { useState } from "react";
import { Form } from ".";

const FormCreateSystem = () => {
  const [state, setState] = useState({
      Sistema: [] /* [
        { ID: 1, Nombre: "Nombre 1" },
        { ID: 2, Nombre: "Nombre 2" },
        { ID: 3, Nombre: "Nombre 3" },
        { ID: 4, Nombre: "Nombre 4" }
      ] */
    }),
    { Sistema } = state;

  return (
    <form onSubmit={e => e.preventDefault()}>
      <Form
        state={Sistema}
        setState={{
          addArrayChipSystem: async Item =>
            await setState({ ...state, Sistema: Sistema?.concat([Item]) }),
          onDeleteArrayChipSystem: async Item =>
            await setState({
              ...state,
              Sistema: Sistema?.filter((_, Index) => Index !== Item)
            })
        }}
      />
    </form>
  );
};

export default FormCreateSystem;
