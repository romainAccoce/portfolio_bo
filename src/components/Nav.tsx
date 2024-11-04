import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to={"projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"informations"}>Informations</Link>
        </li>
        <li>
          <Link to={"users"}>Users</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Nav;
