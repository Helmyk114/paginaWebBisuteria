import React from "react";
import { Navbar } from "@nextui-org/react";

export default function Navbar({ children }) {
  return (
    <Navbar style={{ backgroundColor: "#6977E4" }} height="8rem">
      {children}
    </Navbar>
  );
}
