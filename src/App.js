import data from "./data";
import { useState } from "react";
import "./index.css";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"]; 

  console.log(data[0]["first_name"]);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text" className="Search"placeholder="Search..."/>
      <ul className="list">
        <Table data={search(data)} />
      </ul>
    </div>
  );
}

export default App;