import React from "react";

import { FormCreateUser, TableUser } from "../User";
import { FormCreateTool } from "../Tool";
import { FormCreateCenter } from "../Center";
import { FormCreateSystem } from "../System";

import {
  HomeSharp,
  PersonSharp,
  BuildSharp,
  BusinessCenterSharp,
  SettingsSharp,
  GroupWorkSharp
} from "@material-ui/icons";

const Test = () => <h2>Test</h2>,
  GridLayout = {
    Spacing: 3,
    Direction: "row",
    Justify: "space-evenly",
    AlignItems: "center",
    XS: 4,
    Submit: { XS: 6 }
  },
  DrawerSetUp = { MenuDivider: 3 },
  Level = [null, "Nulo", "Bajo", "Medio", "Alto"],
  parseLevel = Integer => {
    if (Integer < Level.length)
      return Level.find((_, Index) => Index === Integer);
    else return "No especificado";
  }, /*
  parseLevel2 = Integer => {
    let Value;
    switch (Integer) {
      case null:
        Value = "Nulo";
        break;
      case 1:
        Value = "Bajo";
        break;
      case 2:
        Value = "Medio";
        break;
      case 3:
        Value = "Alto";
        break;
      default:
        Value = "No especificado";
        break;
    }
    return Value;
  }, */
  Tools = [
    { Nombre: "Framework", Tipo: 0 },
    { Nombre: "Lenguaje de programacion", Tipo: 1 },
    { Nombre: "Libreria", Tipo: 2 },
    { Nombre: "Patron de diseño", Tipo: 3 }
  ],
  parseTool = Item => {
    try {
      return Tools.find(({ Tipo }) => Tipo === Item).Nombre;
    } catch {
      return "No especificado";
    }
  },
  Routes = [
    { Label: "Inicio", Path: "/", Component: Test, Icon: <HomeSharp /> },
    {
      Label: "Usuario",
      Path: "/Registrar usuario",
      Component: FormCreateUser,
      Icon: <PersonSharp />
    },
    {
      Label: "Herramienta",
      Path: "/Registrar herramienta",
      Component: FormCreateTool,
      Icon: <BuildSharp />
    },
    {
      Label: "Centro",
      Path: "/Registrar centro",
      Component: FormCreateCenter,
      Icon: <BusinessCenterSharp />
    },
    {
      Label: "Sistema",
      Path: "/Registrar sistema",
      Component: FormCreateSystem,
      Icon: <SettingsSharp />
    },
    {
      Label: "Consultar usuarios",
      Path: "/Consultar/Usuario",
      Component: TableUser,
      Icon: <GroupWorkSharp />
    }
  ];


export { DrawerSetUp, parseLevel, Tools, parseTool, Routes, GridLayout };

