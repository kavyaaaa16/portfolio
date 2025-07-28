import React, { useState } from "react";
import ChatbotModal from "./ChatbotModal"; // Make sure this file exists

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50"
      >
        Ask Chatbot
      </button>
      {open && <ChatbotModal onClose={() => setOpen(false)} />}
    </>
  );
}
