import { Link } from "react-router-dom";

import Layout from "../components/Layout/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div id="flash-card-categories">
        <ul>
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
      </div>
    </Layout>
  );
}
