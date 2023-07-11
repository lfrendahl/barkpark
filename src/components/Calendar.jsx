import React from 'react';
import { PopupWidget } from 'react-calendly';

const PopupComponent = () => {
  return (
    <div className="popup-widget">
      <PopupWidget
        url="https://calendly.com/lfrendahl/barkpark-appointment" 
        rootElement={document.getElementById('root')}
        text="Schedule a time"
        textColor="#ffffff"
        color="#FF8C42"
      />
    </div>
  );
};

export default PopupComponent;