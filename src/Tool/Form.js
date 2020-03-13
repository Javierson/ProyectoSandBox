import React, { useState } from "react";
import { Chip, MenuItem } from "@material-ui/core";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  SelectField,
  PaperChip
} from "../App";

const FormTool = ({
  state,
  setState: { addArrayChipTool, onDeleteArrayChipTool }
}) => {
  const [toolState, setToolState] = useState({
      Nombre: undefined,
      Tipo: undefined,
      Select: false
    }),
    { Nombre, Tipo, Select } = toolState,
    SelectState = value => async () =>
      await setToolState({ ...toolState, Select: value }),
    Tools = [
      { Nombre: "Framework", Tipo: 0 },
      { Nombre: "Lenguaje de programacion", Tipo: 1 },
      { Nombre: "Libreria", Tipo: 2 },
      { Nombre: "Patron de diseÃ±o", Tipo: 3 }
    ];

  return (
    <>
      <GridContainer>
        <SelectField
          Label="Tipo de herramienta de desarrollo"
          Name="Tipo"
          Open={Select}
          OnClose={SelectState(false)}
          OnOpen={SelectState(true)}
          OnChange={e => {
            console.log(e);
            //  await setTypeState({ ...typeState, [name]: value })
          }}
          Value={"Tipo"}
          XS={6}
        >
          {Tools.map(({ Nombre, Tipo }, _) => (
            <MenuItem key={_} value={Tipo}>
              {Nombre}
            </MenuItem>
          ))}
        </SelectField>

        <GridTextField
          Elements={[
            {
              XS: 6,
              Name: "Nombre",
              Value: Nombre,
              OnChange: async ({ target: { name, value } }) =>
                await setToolState({ ...toolState, [name]: value })
            }
          ]}
        />

        <PaperChip
          Title="Agregue una o mas herramientas de desarrollo"
          Length={state.length}
        >
          {state.map(({ Nombre, Tipo }, Item) => (
            <Chip
              key={Item}
              label={`${Nombre} / ${Tipo}`}
              // onDelete={async () => await onDeleteArrayChipCenter(Item)}
            />
          ))}
        </PaperChip>
      </GridContainer>
      <ButtonSubmit>Registrar</ButtonSubmit>
    </>
  );
};

export default FormTool;
