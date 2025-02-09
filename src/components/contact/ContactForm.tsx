"use client";

import { useState } from "react";

export default function ConnectForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = async () => {
    setIsSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        console.log("minor problem, try again later!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setIsSending(false); // Reset the sending state
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <div className="lg:w-1/2">
        <form className="space-y-6">
          {/* Name and Email Row */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full sm:w-1/2 p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          {/* Message Field */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            rows={5}
            className="w-full p-3 border border-gray-400 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          {/* Send Button */}
          <button
            onClick={handleSendEmail}
            disabled={isSending}
            type="submit"
            className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black rounded-md transition-all"
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
}
