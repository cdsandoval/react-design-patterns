import React from "react";
import ReactDOM from "react-dom";
// import Visibility from "./Visibility/FAC-visibility"; //Function as Children
// import VisibilityProps from "./Visibility/RProps-visibility"; //Render Props
// import withVisibility from "./Visibility/HOC-visibility"; //High Order Components
// import VisibilityContainer from "./Visibility/container/visibility"; //Container & Presentational Components
// import useVisibility from "./Visibility/use-visibility"; //Custom Hook
// import OnOnline from "./IntConnection/FAC-online"; // Function as Children
// import OnOnlineProps from "./IntConnection/RProps-online"; // Render Props
// import withOnOnline from "./IntConnection/HOC-online"; // HighOrder Components
// import useOnOnline from "./IntConnection/use-online"; // Custom Hook
import OnOnlineContainer from "./IntConnection/container/online"; //Container & Presentational Components

//Container & Presentational Components
//ReactDOM.render(<VisibilityContainer />, document.getElementById("root"));
ReactDOM.render(<OnOnlineContainer />, document.getElementById("root"));
