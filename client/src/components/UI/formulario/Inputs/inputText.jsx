import React, { forwardRef } from "react";
import { Input } from "@nextui-org/react";

const InputText = forwardRef(({ className, placement ,fontSize, ...props }, ref) => {

  return (
    <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input 
          ref={ref}
          className={className} 
          labelPlacement={placement}
          radius="full" 
          style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "12px"}}
          {...props}
        />
      </div>
    </div>
  );
});

InputText.displayName = 'InputText';
  
export default InputText;
