import React, { useState } from "react";
import { SettingsSharp } from "@material-ui/icons";
import { Chip } from "@material-ui/core";
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
  const InitialState = { ID: undefined, Nombre: undefined },
    [systemState, setSystemState] = useState(InitialState),
    { ID, Nombre } = systemState,
    ComponentState =
      Nombre?.trim() === 0
        ? {
            Title: "Primero seleccione un centro e ingrese un nombre",
            Disabled: true
          }
        : { Title: "Agregar sistema", Disabled: false },
    Required = state?.length !== 0 ? false : true,
    { Title, Disabled } = ComponentState;

  return (
    <>
      <GridContainer>
        <SelectField
          Name="ID"
          Value={ID}
          // Open
          // OnClose
          // OnOpen
          // OnChange
          Required
        />

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
