import React, { useState } from "react";

const Badge = ({ featured, fresh }) => {
  return (
    <>
      <span className="badge featured">{featured ? "(featured)" : ""}</span>
      <span className="baged new">{fresh ? "(new)" : ""}</span>
    </>
  );
};

export default Badge;
