

import React, { useState } from "react"
import { BuildSharp } from '@material-ui/icons'
import { Chip, MenuItem } from "@material-ui/core"
import { ButtonSubmit, GridContainer, GridTextField, SelectField, InputAdornmentIcon,PaperChip } from "../App"


const FormTool = ({ state, setState: { addArrayChipTool, onDeleteArrayChipTool } }) => {


  const [toolState, setToolState] = useState({ Herramienta: { Tipo: undefined, Nombre: undefined }, Form: { Select: false, Disabled: true } }), { Herramienta: { Tipo, Nombre}, Form: { Select } } = toolState, { Tools, parseTool } = require('../AppModules'), SelectState = Value => async () => setToolState({ ...toolState, Form: { ...toolState.Form, Select: Value } }), Length = state?.length, Required = Length !== 0 ? false : true, IconDisabled = !isNaN(Tipo) && Nombre && Nombre?.trim() !== 0 ? false : true


  return <>

      <GridContainer>

        <SelectField
          XS={6}
          Label="Tipo de herramienta de desarrollo"
          Name="Tipo"
          Open={Select}
          OnClose={SelectState(false)}
          OnOpen={SelectState(true)}
          OnChange = { async ({ target: { name, value } }) => setToolState({ ...toolState, Herramienta: { ...toolState.Herramienta, [name]: value }, Form: { ...toolState.Form, Select: false, Disabled: IconDisabled } }) }
          Value={Tipo}
          Required = { Required }
        >

        { Tools?.map(({ Nombre, Tipo }, _) => <MenuItem key={_} value={Tipo}>{Nombre}</MenuItem>) }

        </SelectField>

        <GridTextField
          Elements={[
            {
              XS: 6,
              Name: "Nombre",
              Value: Nombre,
              OnChange: async ({ target: { name, value } }) => setToolState({ ...toolState, Herramienta: { ...toolState.Herramienta, [name]: value }, Form: { ...toolState.Form, Disabled: IconDisabled } }),
              Props: {
                endAdornment: (
                  <InputAdornmentIcon
                    Disabled={IconDisabled}
                    OnClick={async () => {
                      if (!IconDisabled) {
                        await addArrayChipTool({ Tipo, Nombre: Nombre?.trim() });
                        await setToolState({ ...toolState, Herramienta: { ...toolState.Herramienta, Tipo: undefined, Nombre: undefined }, Form: { ...toolState.Form, Disabled: true } });
                      } else
                        setToolState({ ...toolState, Form: { ...toolState.Form, Disabled: true } })
                    }}
                  />
                )
              },
              Required
            }
          ]}
        />

        <PaperChip Title="Agregue una o mas herramientas de desarrollo" Length={Length}>
          { state?.map(({ Nombre, Tipo }, Item) => <Chip key={Item} label={`${parseTool(Tipo)} / ${Nombre}`} onDelete={async () => await onDeleteArrayChipTool(Item) }/>) }
        </PaperChip>
      </GridContainer>

      <ButtonSubmit StartIcon = { <BuildSharp/> } Disabled = { Required }>Registrar herramienta{ Length > 1 && 's' }</ButtonSubmit>

    </>

}

export default FormTool;
