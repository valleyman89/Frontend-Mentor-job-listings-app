import React from "react";
import { useFilterContext } from "../context/FilterContext";

const FilterResult = () => {
  const { filter, setFilter, deleteFilterItem } = useFilterContext();
  return (
    <div className="filter shadow">
      {filter.map((skillName, index) => {
        return (
          <div key={index} className="tablet bold">
            <div className="skill-name">{skillName}</div>
            <div
              className="kill-skill pointer"
              onClick={() => deleteFilterItem(skillName)}
            >
              <button
                onClick={() => deleteFilterItem(skillName)}
                className="close"
              >
                <img
                  aria-label="remove"
                  src="../images/icon-remove.svg"
                  alt={"remove " + skillName}
                />
              </button>
            </div>
          </div>
        );
      })}
      <button className="clear" onClick={() => setFilter([])}>
        <span className="pointer">clear</span>
      </button>
    </div>
  );
};

export default FilterResult;
