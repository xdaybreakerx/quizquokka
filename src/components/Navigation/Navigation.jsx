// module imports
import { Link } from "react-router-dom";

// styling
import "./Navigation.css"


export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/dsa">Data Structures & Algorithms</Link>
        </li>
        <li>
          <Link to="/py">Python</Link>
        </li>
        <li>
          <Link to="/js">Javascript</Link>
        </li>
        <li>
          <Link to="/react">React</Link>
        </li>
      </ul>
    </nav>
  );
}
