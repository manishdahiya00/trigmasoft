import React from "react";

function SinglePost({ title, body }) {
  return (
    <>
      <section className="bg-white  dark:bg-gray-900">
        <div className="py-2 px-4 mx-auto  lg:py-16 lg:px-6">
          <article className=" mt-20 mb-8 w-full">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {title}
            </h1>
            <h2 className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {body}
            </h2>
          </article>
        </div>
      </section>
    </>
  );
}

export default SinglePost;
