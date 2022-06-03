import React from "react";
import Listings from "./components/Listings";
import FilterResult from "./components/FilterResult";
import { useFilterContext } from "./context/FilterContext";

function App() {
  const { filter } = useFilterContext();

  return (
    <main>
      {filter.length > 0 ? <FilterResult /> : null}
      <Listings />
    </main>
  );
}

export default App;
