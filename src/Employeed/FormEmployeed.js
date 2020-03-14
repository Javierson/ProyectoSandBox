import React, { useState } from "react";
import { Chip } from "@material-ui/core";
import {
  PersonAddSharp,
  PostAddSharp,
  VisibilitySharp,
  VisibilityOffSharp
} from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  IconButton,
  InputAdornmentIcon,
  SelectField,
  SliderField,
  PaperChip
} from "../App";
import { parseLevel } from "../AppModules";

const FormEmployeed = ({
  state: {
    Empleado: {
      ID,
      Centro,
      ApellidoPaterno,
      ApellidoMaterno,
      Nombre,
      SegundoNombre,
      Correo,
      Contraseña
    },
    Herramienta,
    Proceso
  },
  setState: {
    setState,
    setIntegerState,
    onDeleteArrayChipTool,
    onDeleteArrayChipProcess
  }
}) => {
  const [userState, setUserState] = useState({ Visible: false }),
    { Visible } = userState,
    VisibleState = !Visible
      ? { Type: "text", Title: "Mostrar contraseña", Icon: <VisibilitySharp /> }
      : {
          Type: "password",
          Title: "Ocultar contraseña",
          Icon: <VisibilityOffSharp />
        },
    { Type, Title, Icon } = VisibleState;

  return (
    <>
      <GridContainer>
        <GridTextField
          Elements={[
            {
              Type: "number",
              Name: "ID",
              OnChange: setIntegerState,
              Value: ID
            },
            {
              Type: "number",
              Name: "Centro",
              OnChange: setIntegerState,
              Value: Centro
            },
            {
              Label: "Apellido paterno",
              Name: "ApellidoPaterno",
              OnChange: setState,
              Value: ApellidoPaterno
            },
            {
              Label: "Apellido materno",
              Name: "ApellidoMaterno",
              OnChange: setState,
              Value: ApellidoMaterno
            },
            {
              Name: "Nombre",
              OnChange: setState,
              Value: Nombre
            },
            {
              Label: "Segundo nombre",
              Name: "SegundoNombre",
              OnChange: setState,
              Value: SegundoNombre,
              Required: false
            },
            {
              Label: "Correo electronico",
              Name: "Correo",
              OnChange: setState,
              Value: Correo
            },
            {
              Type,
              Name: "Contraseña",
              OnChange: setState,
              Value: Contraseña,
              Props: {
                endAdornment: (
                  <InputAdornmentIcon
                    Title={Title}
                    OnClick={async () =>
                      await setUserState({ ...userState, Visible: !Visible })
                    }
                  >
                    {Icon}
                  </InputAdornmentIcon>
                )
              }
            }
          ]}
        />

        <SelectField
          Label="Herramienta de desarrollo"
          Name="Herramienta" /* Value  OnChange */
        />

        {/* <RadioField Label = 'Nivel del conocimiento' Value = 'Nivel' Elements = { [{ Value: 'Bajo' }, { Value: 'Mediano' }, { Value: 'Alto' }] }/> */}

        {/* <SelectField Label = 'Modulo' Name = 'Lenguaje'/> */}

        <SelectField Label="Proceso" /* Value  OnChange */ />

        <SliderField XS={3} />

        <IconButton Title="Agregar">
          <PostAddSharp />
        </IconButton>

        <PaperChip
          Title="Seleccione una o mas herramientas de desarrollo"
          Elements={Herramienta?.map(({ Herramienta, Nivel }, Item) => (
            <Chip
              key={Item}
              label={`${Herramienta} / ${parseLevel(Nivel)}`}
              onDelete={async () => await onDeleteArrayChipTool(Item)}
            />
          ))}
        />

        <PaperChip
          Title="Seleccione uno o mas procesos"
          Elements={Proceso?.map(({ Proceso, Nivel }, Item) => (
            <Chip
              key={Item}
              label={`${Proceso} / ${parseLevel(Nivel)}`}
              onDelete={async () => await onDeleteArrayChipProcess(Item)}
            />
          ))}
        />
      </GridContainer>
      <ButtonSubmit EndIcon={<PersonAddSharp />}>
        Registrar empleado
      </ButtonSubmit>
    </>
  );
};

export default FormEmployeed;
