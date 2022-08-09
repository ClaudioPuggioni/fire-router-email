import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div id="layoutContainer">
      <div id="layoutHeader">Bestest Email Browser</div>
      <div id="layoutLinks">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/inbox"}>Inbox</Link>
        <Link to={"/outbox"}>Sent Messages</Link>
        <Link to={"/write"}>Write Message</Link>
      </div>
      <Outlet />
    </div>
  );
}
