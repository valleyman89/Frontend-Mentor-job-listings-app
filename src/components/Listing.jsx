import React from "react";
import Badge from "./Badge";
import FilterButton from "./FilterButton";

const Listing = ({ data }) => {
  return (
    <div className="listing shadow">
      <div className="logo">
        <img src={data.logo} />
      </div>
      <div className="name">
        {data.company} <Badge fresh={data.new} featured={data.featured} />
      </div>
      <div className="role"> {data.position}</div>
      <div className="details">
        {data.postedAt} • {data.contract} • {data.location}
      </div>
      <div className="skills">
        {data.tools.map((tool, index) => (
          <FilterButton key={index} skill={tool} />
        ))}
        {data.languages.map((language, index) => (
          <FilterButton key={index} skill={language} />
        ))}
        <FilterButton skill={data.role} />
        <FilterButton skill={data.level} />
      </div>
    </div>
  );
};

export default Listing;
