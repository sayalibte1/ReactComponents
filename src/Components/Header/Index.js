import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Header() {
  const [levelOneToggled, setLevelOneToggled] = useState(false);
  const [levelTwoToggle, setLevelTwoToggle] = useState(false);
  const [viewToggle, setViewToggle] = useState(false);
  const node = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    {
      setLevelOneToggled(false);
      setLevelTwoToggle(false);
      setViewToggle(false);
    }
  };
  const openCountryList = () => {
    setLevelOneToggled(true);
    setLevelTwoToggle(false);
  };
  const openStateList = () => {
    setLevelTwoToggle(true);
  };
  const openViewList = () => {
    setViewToggle(true);
  };
  const closeview = event => {
    event.stopPropagation();
    setViewToggle(false);
  };
  return (
    <>
      <div className="mainnav" ref={node}>
        <ul>
          <li>
            <a className="dropdownarrow" onClick={() => openCountryList()}>
              Locations
            </a>
            {levelOneToggled && (
              <ul>
                <li onClick={() => openStateList()}>
                  <a className="dropdownarrow">
                    India
                    {levelTwoToggle && (
                      <ul onClick={() => setLevelOneToggled(false)}>
                        <li>Maharashtra</li>
                        <li>Rajsthan</li>
                        <li>Gujrath</li>
                        <li>Goa</li>
                      </ul>
                    )}
                  </a>
                </li>
                <li>US</li>
                <li>China</li>
              </ul>
            )}
          </li>
          <li onClick={() => openViewList()}>
            <a className="dropdownarrow">
              Product view{" "}
              {viewToggle ? (
                <ul className="subs">
                  <li onClick={event => closeview(event)}>
                    <Link to="/listview">Listview </Link>
                  </li>
                  <li onClick={event => closeview(event)}>
                    <Link to="/gridview">Gridview </Link>
                  </li>
                </ul>
              ) : null}
            </a>
          </li>
          <li>
            <Link to="/notifications">Notifications </Link>
          </li>
          <li className="menuItem">
            <a className="dropdownarrow">companies</a>
            <ul className="subs">
              <li>startups</li>
              <li>big corporation</li>
              <li>
                <a className="dropdownarrow">MNC</a>
                <ul>
                  <li>Reliance</li>
                  <li>Heady technology</li>
                  <li>TATA</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/sorting">sorting </Link>
          </li>
          <li>
            <Link to="/search">Search </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
