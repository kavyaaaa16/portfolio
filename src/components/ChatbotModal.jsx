import React, { useState } from "react";

export default function ChatbotModal({ onClose }) {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! Ask me anything about Kavya's projects or experience." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      setMessages([...newMessages, { role: "ai", text: data.answer }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages([...newMessages, { role: "ai", text: "Sorry, something went wrong. Please try again." }]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Portfolio Chatbot</h3>
          <button onClick={onClose}>✖️</button>
        </div>
        <div className="h-64 overflow-y-auto mb-4 space-y-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`text-sm p-2 rounded ${
                msg.role === "user" ? "bg-gray-100 text-right" : "bg-gray-200 text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            className="flex-1 border px-3 py-2 rounded"
            placeholder="Ask about a project..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage} className="bg-black text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
