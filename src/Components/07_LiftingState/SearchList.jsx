import { useState } from "react";
import data from "./ToDo.json";
import SearchBar from "./SearchBar";
import List from "./List";

const SearchableList = () => {
  const [q, setQ] = useState("");
  const [completed, setCompleted] = useState(false)

  const date = new Date();

  const qHandler = (e) => {
    setQ(e.target.value);
  };
  const handleCompleted = (e) => {
    setCompleted(c=>!c);
  };

  return (
    <>
      <h1>{date.toLocaleTimeString()}</h1>
      <SearchBar query={q} queryFunction={qHandler} completed ={completed} completedFunction={handleCompleted} />
      <List list={data} query={q} completed={completed} />
    </>
  );
};

export default SearchableList;