
import React, { useState } from 'react'
// import { get } from 'axios'
import { ReactMUIDatatable } from "react-material-ui-datatable"

const /* getUsers = async () => {
    try {
        return await get('http://localhost:8080/api/usuario').data
    } catch (E) {
      console.log(E);
    }
  }, */ TableUser = () => {

    const [ state, setState ] = useState({ Load: true, Data: undefined, Exception: undefined }), { Load, Data, Exception } = state

    if (Load && !Exception) {
        setState({ ...state, Data: [ ], Load: false })
    return <h2>Cargando...</h2>
    }


return <ReactMUIDatatable title= 'Usuarios' data = { Data } columns = { [ { label: 'Apellido paterno', name: 'apellidoPaterno' },
{ label: 'Apellido Materno', name: 'Apellido materno' },
{ label: 'Nombre', name: 'nombre' },
{ label: 'Segundo nombre', name: 'segundoNombre' },
{ label: 'Correo', name: 'correo' },
{ label: 'Centro', name: 'centroID' },
{ label: 'Administrador', name: 'admin' },
{ label: 'Registrado', name: 'createAt' },
{ label: 'Ultima vez actualizado', name: 'updateAt' } ] }/>

}


export default TableUser

