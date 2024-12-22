import React from "react";
import Greet from "../Greet";

const CustomCp = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h1>CustomCp</h1>
      {props.name}
    </div>
  );
};

export default CustomCp;
