import React from "react";
import Online from "../components/online";

function OnlineContainer() {
  const [internet, setInternet] = React.useState(null);

  React.useEffect(() => {
    navigator.onLine ? setInternet("True") : setInternet("False");
  }, [setInternet]);

  return <Online internet={internet} />;
}

export default OnlineContainer;
