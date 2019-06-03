import React from "react";

function useVisibility(initialValue = "true") {
  const [visibility, setVisibility] = React.useState(initialValue);

  React.useEffect(() => {
    document.addEventListener("visibilitychange", function() {
      document.hidden ? setVisibility("False") : setVisibility("True");
    });
  }, [setVisibility]);
  return { visibility };
}

export default useVisibility;
