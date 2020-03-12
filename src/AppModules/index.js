import React from "react";
import { FormEmployeed } from "../Employeed";
import { FormCreateTool } from "../Tool";
import { FormCreateCenter } from "../Center";

const Test = () => <h2>Test</h2>,
  GridLayout = {
    Spacing: 3,
    Direction: "row",
    Justify: "space-evenly",
    AlignItems: "center",
    XS: 4
  },
  parseLevel = Integer => {
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
  },
  Routes = [
    { Label: "Inicio", Path: "/", Component: <Test /> },
    { Label: "Usuario", Path: "/Registrar usuario", Component: <FormEmployeed /> },
    {
      Label: "Herramienta",
      Path: "/Registrar herramienta",
      Component: <FormCreateTool />
    },
    {
      Label: "Centro",
      Path: "/Registrar centro",
      Component: <FormCreateCenter />
    }
  ];

export { parseLevel, Routes, GridLayout };
