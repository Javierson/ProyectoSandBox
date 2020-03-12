

import React from 'react'
import { GridContainer } from '.'
import { Grid } from '@material-ui/core'
import { Alert, AlertTitle  } from '@material-ui/lab'

const AlertMessage = ({ Title = 404, Variant = 'outlined', Severity = 'error', children = 'Elemento no encontrado' }) =>

<GridContainer>
    <Grid item xs>
        <Alert variant = { Variant } severity = { Severity }>
            <AlertTitle>{ Title }</AlertTitle>
            { children }
        </Alert>
    </Grid>
</GridContainer>


export default AlertMessage

