import React from "react";
import Dummydata from "../../Dummydata.js";
import "./gridview.scss";
function ProductList(props) {
  const { viewType } = props;

  return (
    <div id="products" className="wrapper">
      <ol className={viewType}>
        {Dummydata.map((val, index) => (
          <li key={index}>
            <h2 className="soapType">{val.soap_type}</h2>

            {val.soap.map((soap, index) => {
              const { image, description, price, quality, name } = soap;
              return (
                <div className="soapInfoWrapper" key={index}>
                  <div className="soapInfo">
                    <div className="productImg">
                      <img src={image} alt="image is not available" />
                    </div>
                    <div className="soapDescription">
                      <h3>{name}</h3>
                      <p className="description">{description}</p>

                      <p>
                        <span>{price}-/</span>
                        {"   "}
                        <span>{quality}</span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ProductList;
