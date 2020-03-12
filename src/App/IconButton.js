import React from "react";
import { Grid, IconButton, Tooltip } from "@material-ui/core";

const GridIconButton = ({ Title, XS = 1, children }) => (
  <Grid item xs={XS}>
    <Tooltip disableFocusListener title={Title}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  </Grid>
);

export default GridIconButton;
