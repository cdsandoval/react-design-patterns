import React from "react";

function OnOnline({ children }) {
  const [internet, setInternet] = React.useState("");

  React.useEffect(() => {
    navigator.onLine ? setInternet("True") : setInternet("False");
  }, [setInternet]);

  return children({ internet });
}

export default OnOnline;
