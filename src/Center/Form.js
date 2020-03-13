import React, { useState } from "react";
import { Chip, Grid, Paper } from "@material-ui/core";
import { BusinessCenterSharp } from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  // InputAdornmentIcon,
  PaperChip
} from "../App";

const FormCenter = ({
  state,
  setState: { addArrayChipCenter, onDeleteArrayChipCenter }
}) => {
  const [centerState, setCenterState] = useState({
      ID: undefined,
      Nombre: undefined
    }),
    { ID, Nombre } = centerState;

  /*

async () => { await addArrayChipCenter(centerState); await setCenterState({ ID: undefined, Nombre: undefined }) }

            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={ AriaLabel }
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge = {Edge} // "end"
                >
                  children
                </IconButton>
              </InputAdornment>
            }

*/
  //  console.table(state);
  return (
    <>
      <GridContainer>
        <GridTextField
          Elements={[
            {
              Type: "number",
              Name: "ID",
              OnChange: async ({ target: { name, value } }) =>
                await setCenterState({
                  ...centerState,
                  [name]: parseInt(value)
                }),
              Value: ID
            },
            {
              Name: "Nombre",
              OnChange: async ({ target: { name, value } }) =>
                await setCenterState({ ...centerState, [name]: value }),
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

        <PaperChip Title="Agregue uno o mas centros" Length={state.length}>
          {state.map(({ ID, Nombre }, Item) => (
            <Chip
              key={Item}
              label={`${ID} / ${Nombre}`}
              onDelete={async () => await onDeleteArrayChipCenter(Item)}
            />
          ))}
        </PaperChip>

        {/* <Grid item xs={12}>
          <Paper>
            {state.map(({ ID, Nombre }, Item) => (
              <Chip
                key={Item}
                label={`${ID} / ${Nombre}`}
                onDelete={async () => await onDeleteArrayChipCenter(Item)}
              />
            ))}
          </Paper>
        </Grid> */}
      </GridContainer>

      <ButtonSubmit StartIcon={<BusinessCenterSharp />}>
        Registrar centro
      </ButtonSubmit>
    </>
  );
};

export default FormCenter;
