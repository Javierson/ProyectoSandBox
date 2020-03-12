import React, { useState } from "react";
import { Form } from ".";

const FormCreateCenter = () => {
  const [state, setState] = useState({
      Centro: [
        { ID: 1, Nombre: "Nombre 1" },
        { ID: 2, Nombre: "Nombre 2" },
        { ID: 3, Nombre: "Nombre 3" },
        { ID: 4, Nombre: "Nombre 4" }
      ]
    }),
    { Centro } = state;

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <Form
          state={Centro}
          setState={{
            addArrayChipCenter: async Item =>
              await setState({ ...state, Centro: Centro.concat([Item]) }),
            onDeleteArrayChipCenter: async Item =>
              await setState({
                ...state,
                Centro: Centro.filter((_, Index) => Index !== Item)
              })
          }}
        />
      </form>
    </>
  );
};

export default FormCreateCenter;
