"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { db } from "@/firebase/config";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import { slugify } from "@/lib/utils";

export default function EditPostPage() {
  const { slug } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({ title: "", slug: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [originalSlug, setOriginalSlug] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", slug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setForm({ title: data.title, slug, content: data.content });
          setOriginalSlug(slug);
        } else {
          toast.error("Post not found");
          router.push("/admin");
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to load post");
      }
    };

    fetchPost();
  }, [slug, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "title" ? value : value,
      ...(name === "title" && { slug: slugify(value) }),
    }));
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
      const postRef = doc(db, "posts", originalSlug);

      await updateDoc(postRef, {
        title: form.title,
        slug: form.slug,
        content: form.content,
        updatedAt: serverTimestamp(),
      });

      toast.success("Post updated");
      router.push("/admin");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='px-6 py-16 max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Edit Blog Post</h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Title
          </label>
          <input
            type='text'
            name='title'
            value={form.title}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md'
            required
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Slug
          </label>
          <input
            type='text'
            name='slug'
            value={form.slug}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md'
            required
          />
          <p className='text-sm text-gray-500 mt-1'>URL: /blog/{form.slug}</p>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Content
          </label>
          <textarea
            name='content'
            rows={10}
            value={form.content}
            onChange={handleChange}
            className='w-full mt-1 border p-3 rounded-md font-mono'
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className='bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary/90 transition'
        >
          {loading ? "Saving..." : "Update Post"}
        </button>
      </form>
    </section>
  );
}
