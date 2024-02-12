import React, { forwardRef } from "react";
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";

const InputPassword = forwardRef(({ className, placement, fontSize, ...props }, ref) =>{
  
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <Input
      ref={ref}
      labelPlacement={placement}
      radius="full"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      style={{ fontFamily: "Roboto, sans-serif", fontSize: fontSize || "11px"}}
      type={isVisible ? "text" : "password"}
      className={className}
      {...props}
    />
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;