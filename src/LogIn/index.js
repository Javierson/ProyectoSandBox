

import React, { useState } from 'react'
import { GridContainer, GridTextField } from '../App'


const LogIn = () => {

  const [state, setState] = useState({ Correo: undefined, Contraseña: undefined }), { Correo, Contraseña } = state, OnChange = async ({ target: { name, value } }) => await setState({ ...state, [name]: value })

  return <form onSubmit = { e => e.preventDefault() } autoComplete = 'off'><GridContainer>
  <GridTextField Elements = { [{ Label: 'Correo electronico', Name: 'Correo', Value: Correo, Onchange: OnChange }, { Name: 'Contraseña', Value: Contraseña, Onchange: OnChange }] }/>
</GridContainer></form>

}


export default LogIn

