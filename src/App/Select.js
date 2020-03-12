

import React from 'react'
import { Grid, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core'


const { GridLayout } = require('../AppModules'), SelectField = ({ Label, Name = Label, Value = '',  Open, OnClose, OnOpen, OnChange, Required = true, XS = GridLayout.XS, children = <MenuItem value = { null }>Sin elementos para seleccionar</MenuItem> }) => <Grid item xs = { XS }><FormControl fullWidth>
    <InputLabel>{ Label }</InputLabel>
    <Select name = { Name } value = { Value }
      open={Open}
      onClose={OnClose}
      onOpen={OnOpen}
      onChange = { OnChange } required = { Required }>{ children }</Select></FormControl></Grid>


export default SelectField

