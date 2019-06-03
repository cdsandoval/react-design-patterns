import React from "react";

function Visibility({ children }) {
  const [visibility, setVisibility] = React.useState("True");

  React.useEffect(() => {
    document.addEventListener("visibilitychange", function() {
      document.hidden ? setVisibility("False") : setVisibility("True");
    });
  }, [visibility]);

  return children({ visibility });
}

export default Visibility;
