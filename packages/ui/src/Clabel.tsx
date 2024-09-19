import React from "react";

const CLabel = ({ label="", required=false, className="", error=false,labelStyle="" }) => {
  return (
    label && (
      <label className={"label font-medium text-sm text-left " + className}>
        <span
          style={{
            color: error ? "red" : "inherit",
            fontWeight: error ? "400" : "inherit",
          }}
        >
          {label}
        </span>
        {required ? <span className="text-[red]">&nbsp;*</span> : null}
      </label>
    )
  );
};

export default CLabel;
