import React from "react";

function OnOnline({ children }) {
  const [internet, setInternet] = React.useState("");

  React.useEffect(() => {
    navigator.onLine ? setInternet("True") : setInternet("False");
  }, [setInternet]);

  return children({ internet });
}

export default OnOnline;

//On Online
// function App() {
//   return (
//       <OnOnline>
//         {({ internet }) => {
//           return <h1>{internet}</h1>;
//         }}
//       </OnOnline>
//   );
// }
