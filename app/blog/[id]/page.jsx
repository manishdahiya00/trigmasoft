"use client";
import SinglePost from "@/components/SinglePost";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const [error, setError] = useState("");

  const getPost = async () => {
    const id = params.id;
    try {
      const res = await fetch(`/api/blog/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result = await res.json();
      setPost({ title: result.blog.title, body: result.blog.body });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data.");
    }
  };

  useEffect(() => {
    getPost();
  }, [params.id]);
  return error ? (
    <div>Error: {error}</div>
  ) : (
    <SinglePost title={post.title} body={post.body} />
  );
}

export default Page;
