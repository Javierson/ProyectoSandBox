import React from "react";

import { Grid, TextField } from "@material-ui/core";

const { GridLayout } = require("../AppModules"),
  GridTextField = ({ Elements = [] }) =>
    Elements.map(
      (
        {
          Type = "text",
          Name,
          Value = "",
          Label = Name,
          OnChange,
          Props,
          Required = true,
          XS = GridLayout.XS
        },
        _
      ) => (
        <Grid key={_} item xs={XS}>
          <TextField
            type={Type}
            label={Label}
            name={Name}
            value={Value}
            onChange={OnChange}
            inputProps={Props}
            fullWidth
            required={Required}
          />
        </Grid>
      )
    );

export default GridTextField;
