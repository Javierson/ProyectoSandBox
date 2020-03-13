import React from "react";
import { AddSharp } from "@material-ui/icons";
import { IconButton, InputAdornment } from "@material-ui/core";

const InputAdornmentIcon = ({
  Position = "end",
  Title = "Agregar",
  Edge = "end",
  OnClick,
  Disabled,
  children = <AddSharp />
}) => (
  <InputAdornment position={Position} onClick={OnClick}>
    <IconButton
      aria-label={Title}
      title={Title}
      edge={Edge}
      disabled={Disabled}
    >
      {children}
    </IconButton>
  </InputAdornment>
);

export default InputAdornmentIcon;
