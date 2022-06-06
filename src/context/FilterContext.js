import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = useState([]);

  function updateFilter(skill) {
    setFilter([...filter, skill]);
  }

  function deleteFilterItem(skillToKill) {
    const newFilter = filter;
    setFilter(newFilter.filter((skill) => skill !== skillToKill));
  }

  return (
    <FilterContext.Provider
      value={{ filter, updateFilter, setFilter, deleteFilterItem }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = React.useContext(FilterContext);
  return context;
};
