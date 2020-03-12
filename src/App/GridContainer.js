

import React from "react"

import { Grid } from "@material-ui/core"

const { GridLayout: { Spacing, Direction, Justify, AlignItems } } = require("../AppModules"),

GridContainer = ({ children }) => <Grid container spacing = { Spacing } direction = { Direction } justify = { Justify } alignItems = { AlignItems }>{ children }</Grid>

export default GridContainer

