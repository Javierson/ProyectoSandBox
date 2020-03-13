import React, { useState } from "react";
import { Chip, Grid, Paper, InputAdornmentIcon } from "@material-ui/core";
import { BusinessCenterSharp, SettingsSharp } from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  // InputAdornmentIcon,
  PaperChip
} from "../App";

const FormSystem = ({
  state,
  setState: { addArrayChipSystem, onDeleteArrayChipSystem }
}) => {
  const InitialState = { Nombre: undefined },
    [systemState, setSystemState] = useState(InitialState),
    { Nombre } = systemState;

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
                    Title="Agregar sistema"
                    Disabled={Nombre?.trim().length === 0 ? true : false}
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
        Registrar sistema
      </ButtonSubmit>
    </>
  );
};

export default FormSystem;
