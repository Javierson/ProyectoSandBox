

import React, { useState } from "react";
import { Chip } from '@material-ui/core'
import { BusinessCenterSharp } from '@material-ui/icons'
import { ButtonSubmit, GridContainer, GridTextField, InputAdornmentIcon, PaperChip } from "../App"


const Form = ({ state, setState: { addArrayChipCenter, onDeleteArrayChipCenter } }) => {

  const [centerState, setCenterState] = useState({ ID: undefined, Nombre: undefined }), {ID, Nombre} = centerState

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

  return (
  <>
    <GridContainer>

      <GridTextField
        Elements={[
          {
            Type: "number",
            Name: "ID",
            OnChange: async ({ target: { name, value } }) => await setCenterState({ ...state, [name]: parseInt(value) }),
            Value: ID
          },
          {
            Name: "Nombre",
            OnChange: async ({ target: { name, value } }) => await setCenterState({ ...state, [name]: value }),
            Value: Nombre,
            EndAdornment: <InputAdornmentIcon OnClick = { async () => { await addArrayChipCenter(centerState); await setCenterState({ ID: undefined, Nombre: undefined }) } }/>
          }
        ]}
      />
   
    <PaperChip
          Title="Agregue uno o mas centros"
          Elements={
            state &&
            state.map(({ ID, Nombre }, Item) => (
              <Chip
                key={Item}
                label={`${ID} / ${Nombre}`}
                onDelete={async () => await onDeleteArrayChipCenter(Item)}
              />
            ))
          }
        />

 </GridContainer>

    <ButtonSubmit StartIcon = { <BusinessCenterSharp/> }>Registrar centro</ButtonSubmit>

  </>
);
        }

export default Form;

