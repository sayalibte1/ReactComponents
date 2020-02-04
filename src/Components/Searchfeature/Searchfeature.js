import React, { useState } from "react";
const names = [
  "sayali",
  "hitesh",
  "punit",
  "asad",
  "nikhil",
  "rupali",
  "tejashree",
  "pooja",
  "viranchee"
];
function Searchfeature() {
  const [search, setSearch] = React.useState("");
  const [show, setShowList] = useState(false);
  const handleChange = event => {
    setSearch(event.target.value);
    setShowList(true);
  };
  const displayList = () => {
    if (search && nameresults.length === 0) {
      return <div>no records</div>;
    } else if (show && search.length > 0) {
      return (
        <div>
          {nameresults.map(listitems => (
            <li>{listitems}</li>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const nameresults = !search
    ? names
    : names.filter(teamname =>
        teamname.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <ul>{displayList()}</ul>
    </div>
  );
}
export default Searchfeature;
