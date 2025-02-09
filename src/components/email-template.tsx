import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
    <h1 style={{ fontSize: "20px", color: "#333" }}>Message from {name}</h1>
    <p>
      <strong>Sender Email:</strong> {email}
    </p>
    <p>
      <strong>Message:</strong>
    </p>
    <p>{message}</p>
    <br />
    <p>Feel free to reply directly to this email: {email}</p>
    <hr />
    <footer>
      <p style={{ fontSize: "12px", color: "#555" }}>
        Sent via your portfolio website
      </p>
    </footer>
  </div>
);
