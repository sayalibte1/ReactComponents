import React from "react";
import "./sorting.scss";
function Sorting({ data, sortbyascendingorder, sortbydescendingorder }) {
  return (
    <>
      <button className="sortingButton" onClick={() => sortbyascendingorder()}>
        sort by ascending order
      </button>
      <button onClick={() => sortbydescendingorder()}>
        sort by descending order
      </button>
      {data &&
        data.map(row => (
          <div className="soapInfo">
            <div className="productImg">
              <img src={row.image} alt="image is not available" />
            </div>
            <div className="soapDescription">
              <h3>{row.name}</h3>
              <p className="description">{row.description}</p>

              <p>
                <span>{row.price}-/</span>
                {"   "}
                <span>{row.quantity}</span>
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Sorting;
