import { NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

const Content = ({ children, espacio }) => {
  return (
    <NavbarContent style={{marginTop: "10px"}} justify={espacio}>
      <NavbarItem>{children}</NavbarItem>
    </NavbarContent>
  );
};

export default Content;
