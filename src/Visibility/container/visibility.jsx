import React from "react";
import Visibility from "../components/visibility";

function VisibilityContainer() {
  const [visibility, setVisibility] = React.useState("True");

  React.useEffect(() => {
    document.addEventListener("visibilitychange", function() {
      document.hidden ? setVisibility("False") : setVisibility("True");
    });
  }, [visibility]);

  return <Visibility visibility={visibility} />;
}

export default VisibilityContainer;
