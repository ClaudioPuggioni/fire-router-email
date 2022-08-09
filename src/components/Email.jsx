import { useParams } from "react-router-dom";
import { getMessageById } from "../messages";

export default function Email() {
  let params = useParams();
  let message = getMessageById(params.id);
  return (
    <div className="emailContainer">
      <div className="emailDiv">
        <div className="emailHeader">
          <span className="emailName">{message.from.name}</span>
          <span className="emailDate">{new Date(message.date).toLocaleString()}</span>
        </div>

        <span className="emailTitle">{message.subject}</span>
        <span className="emailBody">{message.body}</span>
      </div>
    </div>
  );
}
