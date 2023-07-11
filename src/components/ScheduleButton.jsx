import React from 'react';
import { PopupButton } from "react-calendly";

const ScheduleButton = () => {
  return (
    <div className="SchduleButton">
      <PopupButton
        url="https://calendly.com/lfrendahl/barkpark-appointment"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
  );
};

export default ScheduleButton;