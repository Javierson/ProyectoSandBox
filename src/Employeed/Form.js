import React from "react";
import { Chip } from "@material-ui/core";
import { PersonAddSharp, PostAddSharp } from "@material-ui/icons";
import {
  ButtonSubmit,
  GridContainer,
  GridTextField,
  IconButton,
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
      SegundoNombre
    },
    Lenguaje,
    Submodulo
  },
  setState: {
    setState,
    setIntegerState,
    onDeleteArrayChipLanguage,
    onDeleteArrayChipSubModule
  }
}) => {
  /* const [state, setState] = useState({
    ID: undefined,
    Nombre: undefined,
    SegundoNombre: undefined,
    ApellidoPaterno: undefined,
    ApellidoMaterno: undefined,
    Modulo: undefined
  }); */

  // const setEmployeedState = async ({ target: { name, value } }) => await setState({ ...state, [name]: value })

  // console.table(Lenguaje)

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
              Value: SegundoNombre
            }
          ]}
        />

        <SelectField
          Label="Lenguajes de programacion"
          Name="Lenguaje" /* Value  OnChange */
        />

        {/* <RadioField Label = 'Nivel del conocimiento' Value = 'Nivel' Elements = { [{ Value: 'Bajo' }, { Value: 'Mediano' }, { Value: 'Alto' }] }/> */}

        {/* <SelectField Label = 'Modulo' Name = 'Lenguaje'/> */}

        <SelectField Label="Submodulo" /* Value  OnChange */ />

        <SliderField XS={3} />

        <IconButton Title="Agregar">
          <PostAddSharp />
        </IconButton>
{/*
        <PaperChip
          Title="Seleccione uno o mas lenguajes de programacion"
          Elements={
            Lenguaje &&
            Lenguaje.map(({ Lenguaje, Nivel }, Item) => (
              <Chip
                key={Item}
                label={`${Lenguaje} / ${parseLevel(Nivel)}`}
                onDelete={async () => await onDeleteArrayChipLanguage(Item)}
              />
            ))
          }
        />

        <PaperChip
          Title="Seleccione uno o mas submodulos"
          Elements={
            Submodulo &&
            Submodulo.map(({ Submodulo, Nivel }, Item) => (
              <Chip
                key={Item}
                label={`${Submodulo} / ${parseLevel(Nivel)}`}
                onDelete={async () => await onDeleteArrayChipSubModule(Item)}
              />
            ))
          }
        />*/}
      </GridContainer>
      <ButtonSubmit EndIcon={<PersonAddSharp />}>
        Registrar empleado
      </ButtonSubmit>
    </>
  );
};

export default FormEmployeed;
