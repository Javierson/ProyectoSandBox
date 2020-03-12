

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Paper, Grid, Typography } from "@material-ui/core"


const useStyles = makeStyles(({ spacing }) => ({

    chip: { margin: spacing(.5) } })), PaperChip = ({ Title, children }) => {

    // const classes = useStyles()

    return <Grid item xs>
        <Paper>
          { /* chipData.map(({ Lenguaje }, Item) => (
            <Chip
              key={Item}
              label={Lenguaje}
              onDelete={async () => await onDelete(Item)}
              className={classes.chip}
            />
          )) */ }
          { children }
          { !children && <Typography>{ Title }</Typography> }
        </Paper>
      </Grid>

  }


export default PaperChip

