import React from "react";

function OnOnline({ children, render = children }) {
  const [internet, setInternet] = React.useState("");

  React.useEffect(() => {
    navigator.onLine ? setInternet("True") : setInternet("False");
  }, [setInternet]);

  return render({ internet });
}

export default OnOnline;
