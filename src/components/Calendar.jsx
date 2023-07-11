import React from 'react';
import { PopupButton } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <PopupButton
        url="calendly.com/lfrendahl/barkpark-appointment"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
  );
};

export default App;