import React, { useState } from "react";
import { VisibilitySharp, VisibilityOffSharp } from "@material-ui/icons";
import { GridContainer, GridTextField, InputAdornmentIcon } from "../App";

const LogIn = () => {
  const [state, setState] = useState({
      LogIn: { Correo: undefined, Contraseña: undefined },
      Visible: undefined
    }),
    {
      LogIn: { Correo, Contraseña },
      Visible
    } = state,
    VisibleState = !Visible
      ? { Type: "text", Title: "Ocultar contraseña", Icon: <VisibilitySharp /> }
      : {
          Type: "password",
          Title: "Mostrar contraseña",
          Icon: <VisibilityOffSharp />
        },
    { Type, Title, Icon } = VisibleState,
    OnChange = async ({ target: { name, value } }) =>
      await setState({ ...state, [name]: value });

  return (
    <form onSubmit={e => e.preventDefault()} autoComplete="off">
      <GridContainer>
        <GridTextField
          Elements={[
            {
              Label: "Correo electronico",
              Name: "Correo",
              Value: Correo,
              Onchange: OnChange
            },
            {
              Type,
              Name: "Contraseña",
              Value: Contraseña,
              Onchange: OnChange,
              Props: {
                endAdornment: (
                  <InputAdornmentIcon
                    Title={Title}
                    OnClick={async () =>
                      await setState({ ...state, Visible: !Visible })
                    }
                  >
                    {Icon}
                  </InputAdornmentIcon>
                )
              }
            }
          ]}
        />
      </GridContainer>
    </form>
  );
};

export default LogIn;
