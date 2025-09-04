import React from "react";
import Header from "./components/organisms/Header";

function App() {
  const [search, setSearch] = React.useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
    </>
  );
}

export default App;
