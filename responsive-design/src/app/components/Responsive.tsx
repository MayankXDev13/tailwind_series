import React from "react";

function Responsive() {
  return (
    <div className="flex flex-col items-center gap-10 paaji:flex-row">
      <div className="h-40 w-40 rounded-2xl bg-neutral-200" />
      <div className="h-40 w-40 rounded-2xl bg-red-200" />
      <div className="h-40 w-40 rounded-2xl bg-yellow-200" />
    </div>
  );
}

export default Responsive;
