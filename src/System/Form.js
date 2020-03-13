import React, { useState } from "react";
import { Chip, Grid, Paper } from "@material-ui/core";
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
  const [systemState, setSystemState] = useState({ Nombre: undefined }),
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
              Value: Nombre
              /*EndAdornment: (
                <InputAdornmentIcon
                  OnClick={async () => {
                    await addArrayChipCenter(centerState);
                    await setCenterState({ ID: undefined, Nombre: undefined });
                  }}
                />
              )*/
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
