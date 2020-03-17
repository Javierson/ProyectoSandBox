import React, { useState } from "react";
import { SendSharp, VisibilitySharp, VisibilityOffSharp } from "@material-ui/icons";
import { Dialog, GridContainer, GridTextField, InputAdornmentIcon } from "../App";

const LogIn = ({ OpenDialog, CloseDialog }) => {


const [state, setState] = useState({ LogIn: { Correo: undefined, Contraseña: undefined }, Form: { Visible: undefined, Disabled: true } }), { LogIn: { Correo, Contraseña }, Form: { Visible, Disabled } } = state, DisabledSubmit = Correo && Correo?.trim().length !== 0 && Contraseña && Contraseña?.trim().length !== 0 ? false : true, VisibleState = !Visible ? { Type: "text", Title: "Ocultar contraseña", Icon: <VisibilityOffSharp /> } : { Type: "password", Title: "Mostrar contraseña", Icon: <VisibilitySharp /> }, { Type, Title, Icon } = VisibleState, OnChange = async ({ target: { name, value } }) => await setState({ ...state, LogIn: { ...state.LogIn, [name]: value }, Form: { ...state.Form, Disabled: DisabledSubmit } }), SubmitForm = async e => { await e.preventDefault(); console.log('Funcion submitForm') }


return <form /* autoComplete="off" */>
    <Dialog OpenDialog = { OpenDialog } CloseDialog = { CloseDialog } ButtonsAction = { [{ Type: 'submit', Label: 'Iniciar sesion', Icon: <SendSharp/>, OnClick: SubmitForm, Disabled }] }>
      <GridContainer>
        <GridTextField
          Elements={[
            {
              XS: 12,
              Label: "Correo electronico",
              Name: "Correo",
              Value: Correo,
              OnChange
            },
            {
              XS: 12,
              Type,
              Name: "Contraseña",
              Value: Contraseña,
              OnChange,
              Props: { endAdornment: <InputAdornmentIcon Title = { Title } OnClick = { async () => await setState({ ...state, Form: { ...state.Form, Visible: !Visible } }) }>{Icon}</InputAdornmentIcon> }
            }
          ]}
        />
      </GridContainer>
      </Dialog>
    </form>

}

export { LogIn }

