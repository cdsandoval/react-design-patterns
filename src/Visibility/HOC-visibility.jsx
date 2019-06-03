import React from "react";

function withVisibility(Component) {
  function Visibility({ children, render = children }) {
    const [visibility, setVisibility] = React.useState("True");

    React.useEffect(() => {
      document.addEventListener("visibilitychange", function() {
        document.hidden ? setVisibility("False") : setVisibility("True");
      });
    }, [visibility]);

    return <Component visibility={visibility} />;
  }
  return Visibility;
}

export default withVisibility;
