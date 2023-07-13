import React from 'react'
import { PopupModal } from "react-calendly";

class CustomScheduleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <div>
        <button
          style={{ display: "block", 
                   margin: "0 auto", 
                   color: "#ffffff",
                   backgroundColor: "#FF8C42",
                   borderRadius: '1em',
                   borderStyle: 'none',
                   boxShadow: '0px 3px 10px #9E9E9E'}}
          onClick={() => this.setState({ isOpen: true })}
        >
          Schedule Your Visit
        </button>
        <PopupModal
          url="https://calendly.com/lfrendahl/barkpark-appointment"
          onModalClose={() => this.setState({ isOpen: false })}
          open={this.state.isOpen}
          rootElement={document.getElementById("root")}
        />
      </div>
    );
  }
}

export default CustomScheduleButton;