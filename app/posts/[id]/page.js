import GetPost from "@/lib/GetPost";
import GetPostComments from "@/lib/GetPostComment";
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
  const postPromise = GetPost(id);
  const commentsPromise = GetPostComments(id);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  return (
    <div>
      <p className="my-4">Viewing post with ID: {id}</p>
      <h1 className="text-3xl text-green-500 font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
      {/* comments added here */}

      
      <div className="mt-8"></div>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-6 p-4 border rounded-lg">
          <p className="font-semibold">
            {comment.name} ({comment.email})
          </p>
          <p className="mt-2">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
