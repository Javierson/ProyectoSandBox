import React from "react";
import { GridContainer } from ".";
import { Button, Grid } from "@material-ui/core";

const { GridLayout } = require("../AppModules"),
  ButtonSubmit = ({
    XS = GridLayout.XS,
    Type = "submit",
    Variant = "outlined",
    Color = "primary",
    StartIcon,
    EndIcon,
    Disabled,
    children = "Registrar elemento"
  }) => (
    <GridContainer>
      <Grid item xs={XS}>
        <Button
          type={Type}
          variant={Variant}
          color={Color}
          startIcon={StartIcon}
          endIcon={EndIcon}
          disabled={Disabled}
          fullWidth
        >
          {children}
        </Button>
      </Grid>
    </GridContainer>
  );

export default ButtonSubmit;
