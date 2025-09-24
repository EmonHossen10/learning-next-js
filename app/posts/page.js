import GetAllPosts from "@/lib/GetAllPosts";
import React from "react";

export default async function Posts() {
  const posts = await GetAllPosts();

  return (
    <div>
      <h2>All Posts</h2>

      <div className="mt-6"></div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="text-xl font-bold">{post.title}</h2>

            {/* <p>{post.body}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
