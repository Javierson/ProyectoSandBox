

import React, { useState } from "react"
import { Chip } from "@material-ui/core"
import { BusinessCenterSharp } from "@material-ui/icons"
import { ButtonSubmit, PaperChip, GridContainer, GridTextField, InputAdornmentIcon } from "../App"


const FormCenter = ({ state, setState: { addArrayChipCenter, onDeleteArrayChipCenter } }) => {

  const [centerState, setCenterState] = useState({ Sistema: { ID: undefined, Nombre: undefined }, Form: { Disabled: true } }), { Sistema, Sistema: { ID, Nombre }, Form: { Disabled } } = centerState,
  Length = state?.length, Required = Length !== 0 ? false : true,
  IconDisabled = ID && !isNaN(ID) && Nombre && Nombre?.toString().trim().length !== 0 ? false : true

  return <>
      <GridContainer>
        <GridTextField
          Elements={[
            {
              XS: 6,
              Type: "number",
              Name: "ID",
              OnChange: async ({ target: { name, value } }) => setCenterState({ ...centerState, Sistema: { ...centerState.Sistema, [name]: parseInt(value) }, Form: { ...centerState.Form, Disabled: IconDisabled } }),
              Value: ID,
              inputProps: { min: 1 },
              Required
            },
            {
              XS: 6,
              Name: "Nombre",
              OnChange: async ({ target: { name, value } }) => setCenterState({ ...centerState, Sistema: { ...centerState.Sistema, [name]: value }, Form: { ...centerState.Form, Disabled: IconDisabled } }),
              Value: Nombre,
              Props: { endAdornment: <InputAdornmentIcon Disabled = { IconDisabled } OnClick = { async () => {
                if (!isNaN(ID) && Nombre?.trim().length !== 0) {
                  await addArrayChipCenter(Sistema)
                  setCenterState({ ...centerState, Sistema: { ...centerState.Sistema, ID: undefined, Nombre: undefined }, Form: { ...centerState.Form, Disabled: true } })
                }
                else
                setCenterState({ ...centerState, Form: { Disabled: true } }) } }/> },
                Required
            }
          ]}
        />

        <PaperChip Title="Agregue uno o mas centros" Length={Length}>
          {state?.map(({ ID, Nombre }, Item) => (
            <Chip
              key={Item}
              label={`${ID} / ${Nombre}`}
              onDelete={async () => await onDeleteArrayChipCenter(Item)}
            />
          ))}
        </PaperChip>

      </GridContainer>

      <ButtonSubmit StartIcon = { <BusinessCenterSharp/> } Disabled = { Required }>Registrar centro{ Length > 1 && 's' }</ButtonSubmit>

    </>

}

export default FormCenter;

