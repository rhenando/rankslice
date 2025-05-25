"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
  });

  // Firebase Auth - only allow your email
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === "fernando@rankslice.com") {
        setUser(user);
      } else {
        router.push("/"); // redirect if not admin
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        ...formData,
        publishedAt: serverTimestamp(),
      });
      alert("Post published!");
      setFormData({ title: "", slug: "", content: "", excerpt: "" });
    } catch (err) {
      console.error(err);
      alert("Error publishing post.");
    }
  };

  if (!user) return null;

  return (
    <section className='max-w-2xl mx-auto px-6 py-16'>
      <h1 className='text-3xl font-bold mb-6'>📝 Create Blog Post</h1>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <Input
          name='title'
          placeholder='Post title'
          value={formData.title}
          onChange={handleChange}
          required
        />
        <Input
          name='slug'
          placeholder='Slug (e.g. my-first-post)'
          value={formData.slug}
          onChange={handleChange}
          required
        />
        <Textarea
          name='excerpt'
          placeholder='Short excerpt for preview'
          value={formData.excerpt}
          onChange={handleChange}
          required
          rows={2}
        />
        <Textarea
          name='content'
          placeholder='Post content (Markdown or plain text)'
          value={formData.content}
          onChange={handleChange}
          required
          rows={10}
        />
        <Button type='submit' className='w-full'>
          Publish Post
        </Button>
      </form>
    </section>
  );
}
