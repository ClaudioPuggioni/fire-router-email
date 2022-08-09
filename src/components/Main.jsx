import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Inbox from "./Inbox";
import Error404 from "./Error404";
import { useEffect, useState } from "react";
import Login from "./Login";
import Email from "./Email";
import Write from "./Write";
import Outbox from "./Outbox";

const Main = () => {
  const [lgnIn, setLgnIn] = useState(false);
  const goTo = useNavigate();

  useEffect(() => {
    if (!lgnIn) {
      goTo("/login");
    } else {
      goTo("/");
    }
    // eslint-disable-next-line
  }, [lgnIn]);

  return (
    <div id="mainContainer">
      <Routes>
        <Route path={"/login"} element={<Login toggleLgn={setLgnIn} />} />
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/inbox"} element={<Inbox />} />
          <Route path={"/inbox/:id"} element={<Email />} />
          <Route path={"/outbox"} element={<Outbox />} />
          <Route path={"/write"} element={<Write />} />
        </Route>
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default Main;
