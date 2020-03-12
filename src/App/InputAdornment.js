

import React from 'react'
import { AddSharp } from '@material-ui/icons'
import { IconButton, InputAdornment } from '@material-ui/core'


const InputAdornmentIcon = ({ Position = 'end', AriaLabel = 'Agregar', Edge = 'end', OnClick, children = <AddSharp/> }) => <InputAdornment position={ Position }>
<IconButton aria-label={ AriaLabel } onClick={OnClick}
// onMouseDown={handleMouseDownPassword}
edge = {Edge}
>{ children }</IconButton></InputAdornment>


// export default InputAdornmentIcon

