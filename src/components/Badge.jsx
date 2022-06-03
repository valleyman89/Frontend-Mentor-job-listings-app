import React from "react";

const Badge = ({ featured, fresh }) => {
  return (
    <>
      {fresh ? <span className="badge fresh">new!</span> : null}
      {featured ? <span className="badge featured">featured</span> : null}
    </>
  );
};

export default Badge;
