"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "@/firebase/config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { toast } from "sonner";

export default function AdminDashboardPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "posts"), orderBy("publishedAt", "desc"));
      const snapshot = await getDocs(q);
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(list);
    } catch (err) {
      toast.error("Failed to fetch posts.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "posts", id));
      toast.success("Post deleted");
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      toast.error("Failed to delete post.");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className='px-6 py-16 max-w-4xl mx-auto'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
        <Link
          href='/admin/blog/new'
          className='bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90 transition'
        >
          + New Post
        </Link>
      </div>

      {loading ? (
        <p className='text-muted-foreground'>Loading...</p>
      ) : posts.length === 0 ? (
        <p className='text-muted-foreground'>No blog posts found.</p>
      ) : (
        <ul className='space-y-4'>
          {posts.map((post) => (
            <li
              key={post.id}
              className='p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center'
            >
              <div>
                <h2 className='text-lg font-semibold'>{post.title}</h2>
                <p className='text-sm text-muted-foreground'>
                  {post.slug} ·{" "}
                  {post.publishedAt?.toDate
                    ? new Date(post.publishedAt.toDate()).toLocaleDateString()
                    : "Unpublished"}
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <Link
                  href={`/admin/blog/${post.slug}/edit`}
                  className='text-sm text-blue-600 hover:underline'
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className='text-sm text-red-600 hover:underline'
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
