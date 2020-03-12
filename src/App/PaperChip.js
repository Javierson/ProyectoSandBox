import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const Message = (X, Y) => {
  if (!Y || Y === 0 )
  return <Typography align="center">{X}</Typography>
},
PaperChip = ({ XS = 12, Title, Length, children }) => (
  <Grid item xs={XS}>
    { children }
    <Paper>
      { Message(Title, Length) }
    </Paper>
  </Grid>
);

export default PaperChip;
