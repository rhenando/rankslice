"use client";

import { useState } from "react";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setStatus("submitting");

    try {
      await addDoc(collection(db, "contactMessages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        status: "unread",
        createdAt: serverTimestamp(),
      });

      toast.success("✅ Message sent!");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
      setStatus("submitted");

      setTimeout(() => {
        router.push("/thank-you");
      }, 3000);
    } catch (err) {
      console.error("❌ Contact form error:", err);
      toast.error("Something went wrong. Please try again.");
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

      <form
        onSubmit={handleSubmit}
        className='space-y-6'
        aria-label='Contact form'
      >
        <input
          type='text'
          name='honeypot'
          className='hidden'
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete='off'
        />

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
            className='mt-1 w-full border border-gray-300 rounded-md p-3'
            autoComplete='name'
            spellCheck='true'
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
            className='mt-1 w-full border border-gray-300 rounded-md p-3'
            autoComplete='email'
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
            className='mt-1 w-full border border-gray-300 rounded-md p-3'
            spellCheck='true'
          />
        </div>

        <button
          type='submit'
          disabled={status === "submitting"}
          className='w-full bg-primary text-white py-3 rounded hover:bg-primary/90 transition'
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
