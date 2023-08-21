import {NavLink} from "react-router-dom";
import "./style.css";

const HeaderBooks = (props) => {
  return (
    <div className="headers_books">
    <nav>
      <ul>
        <li>
          <NavLink to="/nightpilot">
            Night Pilot
          </NavLink>
        </li>
        <li>
          <NavLink to="/duna" >
            Duna
          </NavLink>
        </li>
        <li>
          <NavLink to="/troy" >
            Troy
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default HeaderBooks;