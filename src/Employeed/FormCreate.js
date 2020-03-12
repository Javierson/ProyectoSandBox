import React, { useState } from "react";
import { FormEmployeed } from ".";
import { GridContainer } from "../App";
import { Grid, Button } from "@material-ui/core";
import { PersonAddSharp } from "@material-ui/icons";

const FormCreateEmployeed = () => {
  const [state, setState] = useState({
    Empleado: {
      ID: undefined,
      Centro: undefined,
      ApellidoPaterno: undefined,
      ApellidoMaterno: undefined,
      Nombre: undefined,
      SegundoNombre: undefined
    },
    Lenguaje: [
      { ID: "A", Lenguaje: "Angular", Nivel: null },
      { ID: "B", Lenguaje: "jQuery", Nivel: 1 },
      { ID: "C", Lenguaje: "Polymer", Nivel: null },
      { ID: "D", Lenguaje: "React", Nivel: 3 },
      { ID: "E", Lenguaje: "Vue", Nivel: 2 }
    ],
    Submodulo: [
      { ID: "F", Submodulo: "Submodulo 1", Nivel: null },
      { ID: "G", Submodulo: "Submodulo 2", Nivel: 1 },
      { ID: "H", Submodulo: "Submodulo 3", Nivel: null },
      { ID: "I", Submodulo: "Submodulo 4", Nivel: 3 },
      { ID: "J", Submodulo: "Submodulo 5", Nivel: 2 }
    ]
  });
  // OnChange = async ({ target: { name, value } }) => await setState({ ...state, [name]: value })

  return (
    <>
      <FormEmployeed
        state={state}
        setState={{
          setState: async ({ target: { name, value } }) =>
            await setState({
              ...state,
              Empleado: { ...state.Empleado, [name]: value }
            }),
          setIntegerState: async ({ target: { name, value } }) =>
            await setState({
              ...state,
              Empleado: { ...state.Empleado, [name]: parseInt(value) }
            }),
          onDeleteArrayChipLanguage: async Item =>
            await setState({
              ...state,
              Lenguaje: state.Lenguaje.filter((_, Index) => Index !== Item)
            }),
          onDeleteArrayChipSubModule: async Item =>
            await setState({
              ...state,
              Submodulo: state.Submodulo.filter((_, Index) => Index !== Item)
            })
        }}
      />
      {/* <GridContainer>
        <Grid item xs={4}>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            startIcon={<PersonAddSharp />}
            fullWidth
          >
            Agregar elemento
          </Button>
        </Grid>
      </GridContainer> */}
    </>
  );
};

export default FormCreateEmployeed;
