import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const Message = (X, Y) => {
    if (!Y || Y === 0) return <Typography align="center">{X}</Typography>;
  },
  PaperChip = ({ XS = 12, Title, Length, Elevation = 3, children }) => (
    <Grid item xs={XS}>
      <Paper elevation={Elevation}>
        {children}
        {Message(Title, Length)}
      </Paper>
    </Grid>
  );

export default PaperChip;
