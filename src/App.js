import "./App.css";
import React, { useState } from "react";
import Data from "./services/data.json";
import Listings from "./components/Listings";
import Filter from "./components/Filter";

export const ListingContext = React.createContext();

function App() {
  const [data, setData] = useState(Data);

  return (
    <ListingContext.Provider value={data}>
      <main>
        <Filter />
        <Listings />
      </main>
    </ListingContext.Provider>
  );
}

export default App;
