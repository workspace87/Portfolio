import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const SERVICE_ID = "service_ff3vfo7";
  const TEMPLATE_ID = "template_zpdx93d";
  const PUBLIC_KEY = "_EBFX__YGvlbWJfKK";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Failed to send message. Please try again later."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              required
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/10 text-white placeholder-gray-400 
             transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/10 text-white placeholder-gray-400 
             transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              required
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-600">
                Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};