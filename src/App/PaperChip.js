import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";

const PaperChip = ({ XS = 12, Title, Elements }) => (
  <Grid item xs={XS}>
    <Paper>
      {Elements}
      {!Elements ||
        (Elements?.length !== 0 && (
          <Typography align="center">{Title}</Typography>
        ))}
    </Paper>
  </Grid>
);

export default PaperChip;
