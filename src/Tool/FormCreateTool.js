import React, { useState } from "react";
import { FormTool } from ".";

const FormCreateTool = () => {
  const [state, setState] = useState({
      Herramienta: [
        { Nombre: "Herramienta 1", Tipo: 1 },
        { Nombre: "Herramienta 2", Tipo: 2 }
      ]
    }),
    { Herramienta } = state;

  return (
    <form onSubmit={e => e.preventDefault()}>
      <FormTool
        state={Herramienta}
        setState={{
          addArrayChipTool: async Item =>
            await setState({
              ...state,
              Herramienta: Herramienta.concat([Item])
            }),
          onDeleteArrayChipTool: async Item =>
            await setState({
              ...state,
              Herramienta: Herramienta.filter((_, Index) => Index !== Item)
            })
        }}
      />
    </form>
  );
};

export default FormCreateTool;
