import React, { useState } from "react";
import { Chip, Grid, Paper } from "@material-ui/core";
import { BusinessCenterSharp, SettingsSharp } from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  InputAdornmentIcon,
  PaperChip
} from "../App";

const FormSystem = ({
  state,
  setState: { addArrayChipSystem, onDeleteArrayChipSystem }
}) => {
  const InitialState = { Nombre: undefined },
    [systemState, setSystemState] = useState(InitialState),
    { Nombre } = systemState,
    ComponentState =
      Nombre?.trim() === 0
        ? {
            Title: "Primero seleccione un centro e ingrese un nombre",
            Disabled: true
          }
        : { Title: "Agregar sistema", Disabled: false },
    { Title, Disabled } = ComponentState;

  return (
    <>
      <GridContainer>
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
                      await addArrayChipSystem(systemState);
                      await setSystemState(InitialState);
                    }}
                  />
                )
              }
            }
          ]}
        />

        <PaperChip Title="Agregue uno o mas sistemas" Length={state.length}>
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
        Registrar sistema{!Nombre?.trim() < 2 && "s"}
      </ButtonSubmit>
    </>
  );
};

export default FormSystem;
