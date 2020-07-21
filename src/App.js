import React from "react";
import Category from "./Components/Category/Category";
import BestSeller from "./Components/BestSeller/BestSeller";
import Bottom from "./Components/Bottom/Bottom";
import Event from "./Components/Event/Event";
import Recommand from "./Components/Recommand/Recommand";
import "./scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

class App extends React.Component {
  state = {};
  render() {
    return <Category />;
  }
}
export default App;
