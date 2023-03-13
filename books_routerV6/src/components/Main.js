import React from 'react';
import NightPilot from "./books/NightPilot";
import Duna from "./books/Duna";
import Troy from "./books/Troy";
const Main = (props) => {
    let selectedBook = props.selectedBook;

    let componentToDisplay;
  
    switch (selectedBook) {
      case "Night Pilot":
        componentToDisplay = <NightPilot />;
        break;
      case "Duna":
        componentToDisplay = <Duna />;
        break;
      case "Troy":
        componentToDisplay = <Troy />;
        break;
      default:
        componentToDisplay = null;
    }
  return <div className="main_info">{componentToDisplay}</div>;
}
export default Main;