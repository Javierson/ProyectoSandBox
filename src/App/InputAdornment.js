import React from "react";
import { AddSharp } from "@material-ui/icons";
import { IconButton, InputAdornment, Tooltip } from "@material-ui/core";

const InputAdornmentIcon = ({
  Position = "end",
  Placement,
  Title = "Agregar",
  Edge = "end",
  OnClick,
  Disabled,
  children = <AddSharp />
}) => <InputAdornment position={Position} onClick={OnClick}>
    <Tooltip title = { Title } placement = { Placement }>
    <IconButton aria-label={Title} edge={Edge} disabled={Disabled}>
      {children}
    </IconButton>
    </Tooltip>
  </InputAdornment>

export default InputAdornmentIcon;
