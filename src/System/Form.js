import React, { useState } from "react";
import { Chip, MenuItem } from "@material-ui/core";
import { SettingsSharp } from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  InputAdornmentIcon,
  SelectField,
  PaperChip
} from "../App";

const FormSystem = ({
  state,
  setState: { addArrayChipSystem, onDeleteArrayChipSystem }
}) => {
  const InitialState = { ID: undefined, Nombre: undefined, Select: false },
    [systemState, setSystemState] = useState(InitialState),
    { ID, Nombre, Select } = systemState,
    ComponentState =
      Nombre?.trim() === 0
        ? {
            Title: "Primero seleccione un centro e ingrese un nombre",
            Disabled: true
          }
        : { Title: "Agregar sistema", Disabled: false },
    Required = state?.length !== 0 ? false : true,
    { Title, Disabled } = ComponentState,
    SelectState = Value => async () =>
      await setSystemState({ ...systemState, Select: Value }),
    // JSON de los centros
    Centro = [
      { ID: 1, Nombre: "Centro 1" },
      { ID: 2, Nombre: "Centro 2" },
      { ID: 3, Nombre: "Centro 3" },
      { ID: 4, Nombre: "Centro 4" }
    ];

  return (
    <>
      <GridContainer>
        <SelectField
          Name="ID"
          Value={ID}
          Open={Select}
          OnClose={SelectState(false)}
          OnOpen={SelectState(true)}
          OnChange={async e => console.log(e)}
          Required
        >
          {Centro?.map(({ ID, Nombre }, _) => (
            <MenuItem key={_} value={ID}>{`${ID} / ${Nombre}`}</MenuItem>
          ))}
        </SelectField>

        <GridTextField
          Elements={[
            {
              Name: "Nombre",
              OnChange: async ({ target: { name, value } }) =>
                await setSystemState({ ...systemState, [name]: value }),
              Value: Nombre,
              Props: {
                endAdornment: (
                  <InputAdornmentIcon
                    Title={Title}
                    Disabled={Disabled}
                    OnClick={async () => {
                      await addArrayChipSystem({ Nombre: Nombre.trim() });
                      await setSystemState(InitialState);
                    }}
                  />
                )
              },
              Required
            }
          ]}
        />

        <PaperChip Title="Agregue uno o mas sistemas" Length={state?.length}>
          {state.map(({ ID, Nombre }, Item) => (
            <Chip
              key={Item}
              label={`${ID} / ${Nombre}`}
              onDelete={async () => await onDeleteArrayChipSystem(Item)}
            />
          ))}
        </PaperChip>
      </GridContainer>

      <ButtonSubmit StartIcon={<SettingsSharp />}>
        Registrar sistema{state.length > 1 && "s"}
      </ButtonSubmit>
    </>
  );
};

export default FormSystem;
