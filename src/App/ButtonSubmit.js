import React from "react";
import { GridContainer } from ".";
import { Button, Grid } from "@material-ui/core";

const { GridLayout: { Submit } } = require("../AppModules"),
  ButtonSubmit = ({
    XS = Submit.XS,
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
