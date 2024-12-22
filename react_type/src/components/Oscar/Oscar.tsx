import React from "react";

type OscarProps = {
  children: React.ReactNode;
};

const Oscar = (props: OscarProps) => {
  const { children } = props;
  return (
    <div>
      <h1>Oscar</h1>
      <h2>{children}</h2>
    </div>
  );
};

export default Oscar;
