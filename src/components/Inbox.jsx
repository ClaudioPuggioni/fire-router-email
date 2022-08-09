import { Link } from "react-router-dom";
import { messages } from "../messages";

export default function Inbox() {
  return (
    <div id="inboxContainer">
      <div id="inboxMessages">
        {Object.values(messages).length > 0
          ? messages.map((ele) => (
              <Link to={"/inbox/" + ele.id}>
                <div className="msgDiv">
                  <span className="msgName">{ele.from.name}</span>
                  <span className="msgTitle">{ele.subject}</span>
                  <span className="msgBody">{ele.body}</span>
                  <span className="msgDate">{new Date(ele.date).toLocaleString()}</span>
                </div>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
