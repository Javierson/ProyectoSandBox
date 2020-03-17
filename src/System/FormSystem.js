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

  const [systemState, setSystemState] = useState({ Sistema: { ID: undefined, Nombre: undefined }, Form: { Disabled: true, Select: false } }),
    { Sistema: { ID, Nombre }, Form: { Select, Disabled } } = systemState,
    Length = state?.length, Required = Length !== 0 ? false : true,
    IconDisabled = ID?.toString().trim().length !==0 && !isNaN(ID) && Nombre && Nombre?.trim().length !== 0 ? false : true,
    OnChange = async ({ target: { name, value } }) => await setSystemState({ ...systemState, Sistema: { ...systemState.Sistema, [name]: value }, Form: { ...systemState.Form, Disabled: IconDisabled } }),
    SelectState = Value => async () => await setSystemState({ ...systemState, Form: { ...systemState.Form, Select: Value } }),
    OnChangeSelect = async ({ target: { name, value } }) => await setSystemState({ ...systemState, Sistema: { ...systemState.Sistema, [name]: value }, Form: { ...systemState.Form, Select: false, Disabled: value?.toString().trim().length !== 0 && Nombre?.trim().length !== 0 ? false : true } }),

    // JSON de los centros
    Centro = [ { ID: 1, Nombre: "Centro 1" }, { ID: 2, Nombre: "Centro 2" }, { ID: 3, Nombre: "Centro 3" }, { ID: 4, Nombre: "Centro 4" } ]

  return <>
      <GridContainer>
        <SelectField
          XS={6}
          Name="ID"
          Value={ID}
          Open={Select}
          OnClose={SelectState(false)}
          OnOpen={SelectState(true)}
          OnChange={OnChangeSelect}
          Required = {Required}
        >
          {Centro?.map(({ ID, Nombre }, _) => (
            <MenuItem key={_} value={ID}>{`${ID} ${Nombre}`}</MenuItem>
          ))}
        </SelectField>

        <GridTextField
          Elements={[
            {
              XS: 6,
              Name: "Nombre",
              OnChange,
              Value: Nombre,
              Props: {
                endAdornment: (
                  <InputAdornmentIcon
                    Disabled={Disabled}
                    OnClick={async () => {
                      if (!IconDisabled) {
                        await addArrayChipSystem({ ID, Nombre: Nombre?.trim() });
                        await setSystemState({ ...systemState, Sistema: { ...systemState.Sistema, ID: undefined, Nombre: undefined }, Form: { ...systemState.Form, Disabled: true } });
                      } else
                        await setSystemState({ ...systemState, Form: { ...systemState.Form, Disabled: true } })
                    }}
                  />
                )
              },
              Required
            }
          ]}
        />

        <PaperChip Title="Agregue uno o mas sistemas" Length={Length}>
          {state?.map(({ ID, Nombre }, Item) => (
            <Chip
              key={Item}
              label={`${ID} / ${Nombre}`}
              onDelete={async () => await onDeleteArrayChipSystem(Item)}
            />
          ))}
        </PaperChip>
      </GridContainer>

      <ButtonSubmit StartIcon={<SettingsSharp />}  Disabled = {Required}>
        Registrar sistema{Length > 1 && "s"}
      </ButtonSubmit>
    </>

};


export default FormSystem

