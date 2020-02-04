import React from "react";
import { Route } from "react-router-dom";
import ListView from "../Components/GridListView/ListView";
import GridView from "../Components/GridListView/Gridview";
import Searchfeature from "./Searchfeature/Searchfeature";
import SortingPrice from "./Sorting/SortingPrice";
import NotificationPopUp from "../Components/Popup/NotificationPopUp";
export default function AppRoutes() {
  return (
    <div>
      <Route exact path="/listview" component={ListView} />
      <Route exact path="/gridview" component={GridView} />
      <Route exact path="/search" component={Searchfeature} />
      <Route exact path="/sorting" component={SortingPrice} />
      <Route exact path="/notifications" component={NotificationPopUp} />
    </div>
  );
}
