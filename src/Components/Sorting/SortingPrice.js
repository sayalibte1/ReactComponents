import React, { useState } from "react";
import Sorting from "../Sorting/Sorting";
import Dummydata from "../../Dummyjsonproduct";

function SortingPrice() {
  const [data, setdata] = useState(Dummydata);

  function sortbyascendingorder() {
    setdata(data.concat().sort((a, b) => a.price - b.price));
  }

  function sortbydescendingorder() {
    setdata(data.concat().sort((a, b) => b.price - a.price));
  }

  return (
    <div>
      <Sorting
        data={data}
        sortbyascendingorder={sortbyascendingorder}
        sortbydescendingorder={sortbydescendingorder}
      />
    </div>
  );
}

export default SortingPrice;
