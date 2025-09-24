import GetAllPosts from "@/lib/GetAllPosts";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await GetAllPosts();

  return (
    <div>
      <h2>All Posts</h2>

      <div className="mt-6"></div>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <li className="text-xl font-bold">{post.title}</li>
          </Link>

          {/* <p>{post.body}</p> */}
        </div>
      ))}
    </div>
  );
}
