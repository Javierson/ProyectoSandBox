

import React from 'react'

import { Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@material-ui/core'


const { GridLayout } = require('../AppModules'), RadioField = ({ XS = GridLayout.XS, Elements = [ ], Name, Label = Name, Value = '', OnChange, Required = true }) =>

<Grid item xs = { XS }>

  <FormControl component = 'fieldset' fullWidth required = { Required }>

    <FormLabel component = 'legend'>{ Label }</FormLabel>

      <RadioGroup row aria-label = { Name } name = { Name } onChange = { OnChange } value = { Value }>

            { Elements.map( ({ Value, Label = Value, Color = 'primary' }, _) => <FormControlLabel key = { _ } label = { Label } value = { Value } control = { <Radio required = { Required } color = { Color }/> } labelPlacement = 'start'/> ) }

      </RadioGroup>

  </FormControl>

</Grid>


export default RadioField

