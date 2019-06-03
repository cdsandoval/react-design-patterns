import React from "react";

function useOnOnline(initialValue = "") {
  const [internet, setInternet] = React.useState("");

  React.useEffect(() => {
    navigator.onLine ? setInternet("True") : setInternet("False");
  }, [setInternet]);

  return { internet };
}

export default useOnOnline;
