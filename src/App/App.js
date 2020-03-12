

import React from "react"
import { Alert, Drawer } from "."
import { Container } from "@material-ui/core"
import { Route, Switch } from "react-router-dom"

import { FormEmployeed } from "../Employeed";
import { FormCreateTool } from "../Tool";
import { FormCreateCenter } from "../Center";


const // { Routes = [ ] } = require("../AppModules"),
Test = () => <h2>Test</h2>,
AlertMessage = () => <Alert Severity="info">Ruta no definida</Alert>,
App = () => <Container>
      <Drawer>
        <Switch>
        {[{ Path: "/", Component: <Test /> },
        { Path: "/Registrar usuario", Component: <FormEmployeed /> },
        { Path: "/Registrar herramienta", Component: <FormCreateTool /> },
        { Path: "/Registrar centro", Component: <FormCreateCenter /> }].map( ({ Path, Component }, _) => <Route key = { _ } exact path = { Path } component = { Component }/> )}
        { /* Routes.map( ({ Path, Component }, _) => <Route key = { _ } exact path = { Path } component = { Component }/> ) */ }
          <Route component = { AlertMessage }/>
        </Switch>
      </Drawer>
    </Container>


export default App

