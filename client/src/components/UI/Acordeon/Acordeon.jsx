import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const Acordeon = ({ children, titulo,  className }) => {
  return (
    <Accordion variant="splitted" selectionMode="multiple" className={className} style={{  margin: "0 auto" }}>
      <AccordionItem aria-label="Accordion 3" title={titulo} style={{ fontFamily: "Roboto, sans-serif", fontSize: "20px", fontWeight: "bold" }}>
        {children}
      </AccordionItem>
    </Accordion>

  );
};

export default Acordeon;