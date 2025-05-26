"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/firebase/config";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "sonner";
import { slugify } from "@/lib/utils";

export default function CreatePostPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", slug: "", content: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: slugify(value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    if (!form.title.trim() || !form.slug.trim() || !form.content.trim()) {
      toast.error("All fields are required.");
      return false;
    }

    if (!/^[a-z0-9-]+$/.test(form.slug)) {
      toast.error(
        "Slug must be URL-safe (lowercase letters, numbers, and dashes)."
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const postRef = doc(db, "posts", form.slug);
      const existing = await getDoc(postRef);

      if (existing.exists()) {
        toast.error("A post with this slug already exists.");
        return;
      }

      await setDoc(postRef, {
        ...form,
        publishedAt: serverTimestamp(),
      });

      toast.success("Post created!");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='px-6 py-16 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8 text-center'>
        Create New Blog Post
      </h1>

      <form
        onSubmit={handleSubmit}
        className='space-y-8'
        aria-label='Create new post form'
      >
        <div>
          <h2 className='text-xl font-semibold mb-2'>Post Title</h2>
          <label
            htmlFor='title'
            className='block text-sm font-medium text-gray-700'
          >
            Title
          </label>
          <input
            id='title'
            type='text'
            name='title'
            value={form.title}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md'
            required
            autoComplete='off'
            spellCheck='true'
          />
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>Slug (URL)</h2>
          <label
            htmlFor='slug'
            className='block text-sm font-medium text-gray-700'
          >
            Slug
          </label>
          <input
            id='slug'
            type='text'
            name='slug'
            value={form.slug}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md'
            required
            autoComplete='off'
          />
          <p className='text-sm text-gray-500 mt-1'>
            URL: /blog/{form.slug || "[slug]"}
          </p>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-2'>Post Content</h2>
          <label
            htmlFor='content'
            className='block text-sm font-medium text-gray-700'
          >
            Content (Markdown)
          </label>
          <textarea
            id='content'
            name='content'
            rows={10}
            value={form.content}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md font-mono'
            required
            spellCheck='true'
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary/90 transition'
          aria-label='Create blog post'
        >
          {loading ? "Saving..." : "Create Post"}
        </button>
      </form>
    </section>
  );
}
