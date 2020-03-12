

import React from 'react'
import { ButtonGroup as Group, Button } from '@material-ui/core'


const ButtonGroup = ({ AriaLabel, Elements = [ ] }) => <Group aria-label = { AriaLabel }>{ Elements.map( ({ Text, OnClick, Variant = 'outlined', Color = 'primary', Title, StartIcon, EndIcon }, _) => <Button key = { _ } variant = { Variant } color = { Color } onClick = { OnClick } title = { Title } startIcon = { StartIcon } endIcon = { EndIcon }>{ Text }</Button> ) }</Group>


export default ButtonGroup

