import GetPost from "@/lib/GetPost";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await GetPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const post = await GetPost(id);
  return (
    <div>
      <p className="my-4">Viewing post with ID: {id}</p>
      <h1 className="text-3xl text-green-500 font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}
