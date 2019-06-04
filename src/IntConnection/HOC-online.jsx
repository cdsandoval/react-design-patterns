import React from "react";

function withOnOnline(Component) {
  function OnOnline({ children, render = children }) {
    const [internet, setInternet] = React.useState("");

    React.useEffect(() => {
      navigator.onLine ? setInternet("True") : setInternet("False");
    }, [setInternet]);

    return <Component internet={internet} />;
  }
  return OnOnline;
}

export default withOnOnline;

//index.js

// function App({ internet }) {
//   return <h1>{internet}</h1>;
// }

// const OnOnlineApp = withOnOnline(App);
