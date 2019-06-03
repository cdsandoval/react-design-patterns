import React from "react";
import ReactDOM from "react-dom";
import Visibility from "./Visibility/FAC-visibility"; //Function as Children
import VisibilityProps from "./Visibility/RProps-visibility"; //Render Props
import withVisibility from "./Visibility/HOC-visibility"; //High Order Components
import VisibilityContainer from "./Visibility/container/visibility"; //Container & Presentational Components
import useVisibility from "./Visibility/use-visibility"; //Custom Hook
import OnOnline from "./IntConnection/FAC-online";
import OnOnlineProps from "./IntConnection/RProps-online";
import withOnOnline from "./IntConnection/HOC-online";
import useOnOnline from "./IntConnection/use-online";

//Function as Children and Props
// function App() {
//   return (
//     <>
//       <VisibilityProps
//         render={({ visibility }) => {
//           return <h1>{visibility}</h1>;
//         }}
//       />
//       <Visibility>
//         {({ visibility }) => {
//           return <h1>{visibility}</h1>;
//         }}
//       </Visibility>
//     </>
//   );
// }

//HOC Example
// function App({ visibility }) {
//   return <h1>{visibility}</h1>;
// }
// const VisibilityApp = withVisibility(App);

//Custom Hook
// function App() {
//   const { visibility } = useVisibility();
//   return <h1>{visibility}</h1>;
// }

//On Online
// function App() {
//   return (
//     <>
//       <OnOnline>
//         {({ internet }) => {
//           return <h1>{internet}</h1>;
//         }}
//       </OnOnline>
//       <OnOnlineProps
//         render={({ internet }) => {
//           return <h1>{internet}</h1>;
//         }}
//       />
//     </>
//   );
// }

//HOC Example
// function App({ internet }) {
//   return <h1>{internet}</h1>;
// }

// const OnOnlineApp = withOnOnline(App);

function App() {
  const { internet } = useOnOnline();
  return <h1>{internet}</h1>;
}
ReactDOM.render(<App />, document.getElementById("root"));
