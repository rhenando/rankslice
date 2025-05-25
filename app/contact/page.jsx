"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setStatus("submitted");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus("error");
    }
  };

  return (
    <section className='px-6 py-16 max-w-2xl mx-auto'>
      <h1 className='text-4xl font-bold text-center mb-4'>Let’s Talk</h1>
      <p className='text-muted-foreground text-center mb-10'>
        Got an idea, a project, or a question? Fill out the form — we’ll get
        back within 1 business day.
      </p>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            value={formData.name}
            onChange={handleChange}
            className='mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary'
          />
        </div>

        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            id='email'
            name='email'
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
            className='mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary'
          />
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700'
          >
            Message
          </label>
          <textarea
            id='message'
            name='message'
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className='mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary'
          />
        </div>

        <button
          type='submit'
          disabled={status === "submitting"}
          className='w-full bg-primary text-white font-semibold py-3 rounded hover:bg-primary/90 transition'
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "submitted" && (
          <p className='text-green-600 font-medium text-center'>
            ✅ Thanks! We’ve received your message.
          </p>
        )}

        {status === "error" && (
          <p className='text-red-600 font-medium text-center'>
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
