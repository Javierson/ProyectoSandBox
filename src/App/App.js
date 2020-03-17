

import React from "react"
import { Alert, Drawer } from "."
import { Container } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


const { Routes } = require('../AppModules'),
App = () => <ThemeProvider theme={createMuiTheme({palette: {type: 'dark'}})}>
    <Container>
      <Drawer>
        <Switch>
          { Routes.map(({ Path, Component }, _) => <Route key={_} exact path={Path} component={Component} />) }
          <Route component={() => <Alert Severity="info">Ruta no definida</Alert>} />
        </Switch>
      </Drawer>
    </Container>
  </ThemeProvider>


export default App

