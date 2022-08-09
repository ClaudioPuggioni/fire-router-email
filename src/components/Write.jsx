import { Formik, Form, Field, ErrorMessage } from "formik";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";
import * as Yup from "yup";
import { useRef } from "react";

export default function Write() {
  const textBody = useRef(null);

  return (
    <div className="writeContainer">
      <Formik
        initialValues={{
          senderEmail: "",
          recipientEmail: "",
          subject: "",
          body: "",
        }}
        validationSchema={Yup.object({
          senderEmail: Yup.string().email("Invalid email address").required("Required"),
          recipientEmail: Yup.string().email("Invalid email address").required("Required"),
          subject: Yup.string().min(1, "Must be at least 1 characters").max(50, "Must be 50 characters or less").required("Required"),
          body: Yup.string().min(1, "Must be at least 1 characters").max(10000, "Exceeded 10000 character limit").required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const docRef = await addDoc(collection(db, "sent"), {
              senderEmail: values.senderEmail,
              recipientEmail: values.recipientEmail,
              subject: values.subject,
              body: values.body,
              date: Date.now(),
            });
            textBody.current.value = "";
            resetForm();
            console.log("Document written with ID: ", docRef.id);
          } catch (eMsg) {
            setSubmitting(false);
            console.error("Error adding document: ", eMsg);
          }
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="form-sector">
              <label>Sender Email: </label>
              <Field type="email" name="senderEmail" placeholder="user@domain.com" className="inputField" />
              <ErrorMessage className="errorMsg" name="senderEmail" component="div" />
            </div>
            <div className="form-sector">
              <label>Recipient Email: </label>
              <Field type="email" name="recipientEmail" placeholder="receiver@domain.com" className="inputField" />
              <ErrorMessage className="errorMsg" name="recipientEmail" component="div" />
            </div>
            <div className="form-sector">
              <label>Subject: </label>
              <Field type="text" name="subject" placeholder="Enter subject here" className="inputField" />
              <ErrorMessage className="errorMsg" name="subject" component="div" />
            </div>
            <div className="form-sector formBody">
              <label>Body: </label>
              <textarea ref={textBody} name="body" className="inputField formBodyInput" placeholder="Enter body here" onChange={(e) => setFieldValue("body", e.target.value)}></textarea>
              <ErrorMessage className="errorMsg" name="body" component="div" />
            </div>
            <div id="submitDiv">
              <button id="submitButton" type="submit" disabled={isSubmitting}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
