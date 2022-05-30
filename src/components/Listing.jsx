import React from "react";
import Badge from "./Badge";

const Listing = ({ data }) => {
  return (
    <li className="listing">
      {/* <img className="logo" src={data.logo} /> */}
      {data.id} {data.position}
      <Badge fresh={data.new} featured={data.featured} />
      <ul className="tools">
        {data.tools &&
          data.tools.map((tool, i) => (
            <li key={i}>
              <button>{tool}</button> (tool)
            </li>
          ))}
      </ul>
      <ul className="languges">
        {data.languages &&
          data.languages.map((language, i) => (
            <li key={i}>
              <button
                onClick={(e) => {
                  console.log(e.target.name);
                }}
                name={language}
              >
                {language}
              </button>{" "}
              (language)
            </li>
          ))}
      </ul>
    </li>
  );
};

export default Listing;
