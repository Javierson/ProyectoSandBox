

import React, { useState } from "react"
import FormEmployeed from "./FormUser"


const FormCreateUser = () => {
  const [state, setState] = useState({
    Usuario: {
      ID: undefined,
      Centro: undefined,
      ApellidoPaterno: undefined,
      ApellidoMaterno: undefined,
      Nombre: undefined,
      SegundoNombre: undefined,
      Email: undefined,
      Contraseña: undefined
    },
    Herramienta: [
      { ID: "A", Herramienta: "Angular", Nivel: null },
      { ID: "B", Herramienta: "jQuery", Nivel: 1 },
      { ID: "C", Herramienta: "Polymer", Nivel: null },
      { ID: "D", Herramienta: "React", Nivel: 3 },
      { ID: "E", Herramienta: "Vue", Nivel: 2 }
    ],
    Proceso: [
      { ID: "F", Proceso: "Submodulo 1", Nivel: null },
      { ID: "G", Proceso: "Submodulo 2", Nivel: 1 },
      { ID: "H", Proceso: "Submodulo 3", Nivel: null },
      { ID: "I", Proceso: "Submodulo 4", Nivel: 3 },
      { ID: "J", Proceso: "Submodulo 5", Nivel: 2 }
    ]
  });

  return <form onSubmit = { e => e.preventDefault() }>
        <FormEmployeed state = { state } setState = { { setState: async ({ target: { name, value } }) => await setState({ ...state, Usuario: { ...state.Usuario, [name]: value } }),
            setIntegerState: async ({ target: { name, value } }) => await setState({ ...state, Usuario: { ...state.Usuario, [name]: parseInt(value) } }),
            onDeleteArrayChipTool: async Item => await setState({ ...state, Herramienta: state.Herramienta.filter( (_, Index) => Index !== Item ) }),
            onDeleteArrayChipProcess: async Item => await setState({ ...state, Proceso: state.Proceso.filter((_, Index) => Index !== Item) }) } }
        />
      </form>

};


export default FormCreateUser;

