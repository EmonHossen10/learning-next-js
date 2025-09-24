import { notFound } from "next/navigation";
import React from "react";

const BlogPage = ({ params }) => {
  const { id } = params;
  if (id === "7") {
    notFound();
  }
  return (
    <div>
      <h1>The Blog Id is : {id}</h1>
    </div>
  );
};

export default BlogPage;
