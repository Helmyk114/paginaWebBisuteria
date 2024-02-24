import React from "react";
import {Autocomplete, AutocompleteItem, Avatar} from "@nextui-org/react";
import {users} from "./users.js";
import { forwardRef } from "react";

const App = forwardRef(({...prop},ref) => {
  return (
    <Autocomplete
      defaultItems={users}
      variant="bordered"
      label="Assigned to"
      placeholder="Select a user"
      labelPlacement="inside"
      className="max-w-xs"
      ref={ref}
      {...prop}
    >
      {(user) => (
        <AutocompleteItem key={user.id} textValue={` ${user.id}`}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span> 
              <span className="text-tiny text-default-400">{user.email}</span>
            </div>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
});

export default App;