import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
  "service_tqqoowb",
  "template_pkuz3wq",
  form.current,              // ✅ form comes third
  "x5H2RO0a-aGUwUBSN"         // ✅ public key comes last
)

      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-black text-white min-h-screen px-6 py-12 md:px-12 lg:px-16 flex flex-col font-mplus">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Let’s Work Together</h2>
        <p className="text-gray-400">Send me a message directly here:</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto space-y-6 w-full">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md font-semibold transition"
        >
          Send Message
        </button>
        {success && <p className="text-green-400">Message sent successfully!</p>}
      </form>
    </section>
  );
}
