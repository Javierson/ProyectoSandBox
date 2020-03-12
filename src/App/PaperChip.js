import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";


const PaperChip = ({ XS = 12, Title, Elements }) =>
      <Grid item xs = { XS }>
        <Paper>
          { Elements && Elements.length !== 0 ? Elements : <Typography align = 'center'>{ Title }</Typography> }
        </Paper>
      </Grid>


export default PaperChip

