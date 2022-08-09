import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase-config";

export default function Outbox() {
  const [sentEmails, setSentEmails] = useState(false);

  useEffect(() => {
    getMail();
  }, []);

  async function getMail() {
    const sentSnapshot = await getDocs(collection(db, "sent")).catch((error) => console.log(error));
    let emailData = [];
    sentSnapshot.forEach((ele) => emailData.push({ senderEmail: ele.data().senderEmail, recipientEmail: ele.data().recipientEmail, subject: ele.data().subject, body: ele.data().body, date: ele.data().date }));
    setSentEmails(emailData);
  }

  return (
    <div id="sentContainer">
      <div id="sentBody">
        <div className="outboxDiv outboxTableHeader">
          <span className="outboxRecipient">Recipient:</span>
          <span className="outboxTitle">Subject:</span>
          <span className="outboxBody">Body:</span>
          <span className="outboxDate outboxTableDate">Date:</span>
        </div>
        {sentEmails
          ? sentEmails.map((ele) => {
              return (
                <div className="outboxDiv">
                  <span className="outboxRecipient">{ele.recipientEmail}</span>
                  <span className="outboxTitle">{ele.subject}</span>
                  <span className="outboxBody">{ele.body}</span>
                  <span className="outboxDate">{new Date(ele.date).toLocaleString()}</span>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
