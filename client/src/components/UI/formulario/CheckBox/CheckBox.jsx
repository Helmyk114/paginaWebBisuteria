import React from "react";
import {Checkbox, User, cn} from "@nextui-org/react";
import { forwardRef } from "react";

const CheckboxInfo = forwardRef(({ id, name, imagen, onChange, value, ...prop}, ref) => {

  return (
    <Checkbox      
      ref={ref} 
      aria-label={id}
      classNames={{
        base: cn(
          "inline-flex w-full max-w-md bg-content1",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        label: "w-full",
      }}
      isSelected={value}
      onChange={onChange}
      {...prop}
    >
      <div className="w-full flex justify-between gap-2">
        <User
          avatarProps={{size: "md", src: imagen}}
          name={name}
        />
      </div>
    </Checkbox>
  );
});

CheckboxInfo.displayName = 'CheckboxInfo';

export default CheckboxInfo;