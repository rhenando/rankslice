"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/firebase/config";
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Auth Check
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.email === "fernando@rankslicer.onmicrosoft.com") {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch Posts
  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  const fetchPosts = async () => {
    const snapshot = await getDocs(collection(db, "posts"));
    const results = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(results);
    setLoading(false);
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for duplicate slug
    const slugQuery = query(
      collection(db, "posts"),
      where("slug", "==", formData.slug)
    );
    const existing = await getDocs(slugQuery);
    if (!existing.empty) {
      alert("🚫 A post with this slug already exists.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        ...formData,
        publishedAt: serverTimestamp(),
      });
      alert("✅ Post published!");
      setFormData({ title: "", slug: "", content: "", excerpt: "" });
      fetchPosts(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("❌ Error publishing post.");
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "posts", id));
      alert("✅ Post deleted!");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("❌ Failed to delete post.");
    }
  };

  if (!user) return null;

  return (
    <section className='max-w-3xl mx-auto px-6 py-16'>
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

      <hr className='my-10' />

      <h2 className='text-2xl font-semibold mb-4'>📚 Existing Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p className='text-gray-500'>No posts yet.</p>
      ) : (
        <ul className='space-y-4'>
          {posts.map((post) => (
            <li
              key={post.id}
              className='border rounded-md p-4 flex justify-between items-start'
            >
              <div>
                <p className='font-semibold text-primary'>{post.title}</p>
                <p className='text-sm text-gray-500'>{post.slug}</p>
              </div>
              <div className='space-x-2'>
                <Button size='sm' variant='outline' asChild className='text-xs'>
                  <a href={`/blog/${post.slug}`} target='_blank'>
                    View
                  </a>
                </Button>
                <Button
                  size='sm'
                  variant='destructive'
                  onClick={() => handleDelete(post.id)}
                  className='text-xs'
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
