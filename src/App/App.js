

import React from "react"
import { Alert, Drawer } from "."
import { Container } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"

const { Routes = [ ] } = require("../AppModules"),
AlertMessage = () => <Alert Severity="info">Ruta no definida</Alert>,
App = () => <Container>
      <Drawer>
        <Switch>
          { /* Routes.map( ({ Path, Component }, _) => <Route key = { _ } exact path = { Path } component = { Component }/> ) */ }
          <Route component = { AlertMessage }/>
        </Switch>
      </Drawer>
    </Container>


export default App

