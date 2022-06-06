import React from "react";
import Badge from "./Badge";
import FilterButton from "./FilterButton";

const Listing = ({ data }) => {
  return (
    <div className="listing shadow">
      <div className="logo">
        <img src={data.logo} alt={data.company + " logo "} />
      </div>
      <div className="details">
        <p className="company bold">
          {data.company} <Badge fresh={data.new} featured={data.featured} />
        </p>
        <p className="position bold">{data.position}</p>
        <p className="extras">
          {data.postedAt} • {data.contract} • {data.location}
        </p>
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
