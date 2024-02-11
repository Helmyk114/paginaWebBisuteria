import React, { forwardRef } from "react";
import { Input } from "@nextui-org/react";

const InputText = forwardRef(({ className, fontSize, ...props }, ref) => {

  return (
    <div className="w-full flex flex-col gap-4">
      <div key="underlined" className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input 
          ref={ref}
          className={className} 
          style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "16px" }} 
          {...props}
        />
      </div>
    </div>
  );
});

InputText.displayName = 'InputText';
  
export default InputText
