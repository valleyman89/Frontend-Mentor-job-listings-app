import React from "react";

const Badge = ({ featured, fresh }) => {
  return (
    <>
      {fresh ? <span className="badge fresh white">new!</span> : null}
      {featured ? <span className="badge featured white">featured</span> : null}
    </>
  );
};

export default Badge;
