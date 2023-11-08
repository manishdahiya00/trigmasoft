"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await fetch("/api/blog");
      const post = await res.json();
      console.log(post.id);
      setPosts(post);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <section className="bg-gray-900 h-full">
      <div className="py-8 px-4 mx-auto  max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl mt-10 lg:text-4xl tracking-tight font-extrabold text-white">
            Our Blogs
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <ul>
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post._id}`} id={post._id}>
              <Blog title={post.title} desc={post.body.slice(0, 600) + "..."} />
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;

const Blog = ({ title, desc, id }) => {
  return (
    <article className="p-6 bg-white rounded-lg m-2 border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{desc}</p>
      <div className="flex justify-between items-center">
        <Link
          href=""
          className="inline-flex items-center font-medium text-primary-600 text-white hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};
