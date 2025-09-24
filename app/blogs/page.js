import Link from "next/link";
import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Fast Performance",
      description:
        "Our app delivers lightning-fast load times and smooth navigation.",
      img: "https://media.istockphoto.com/id/579421538/photo/performance-increase.jpg?s=612x612&w=0&k=20&c=OLJESJkjrLyo4CqimX9FSwVhsnq7LX6rS9W03h7Erno=",
    },
    {
      id: 2,
      title: "Modern Design",
      description:
        "Clean, responsive, and user-friendly design with Tailwind CSS.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRpTD0em1InVy3MTJga9oF7ZEvilXH1bLQg&s",
    },
    {
      id: 3,
      title: "Secure",
      description:
        "We prioritize data safety with modern authentication and encryption.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fhl7gA536wZNQ0v4Zl70AeXIL7FssixCDg&s",
    },
    {
      id: 4,
      title: "Scalable",
      description:
        "Built with Next.js, ready to scale with your growing business.",
      img: "https://www.lablynx.com/wp-content/uploads/2022/11/Scalability.jpeg",
    },
    {
      id: 5,
      title: "SEO Friendly",
      description:
        "Optimized for search engines to improve your online visibility.",
      img: "https://academylms.net/wp-content/uploads/2023/06/SEO-friendly-Technologies-to-build-website.jpg",
    },
    {
      id: 6,
      title: "Cross Platform",
      description:
        "Works seamlessly across devices — mobile, tablet, and desktop.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AKZf28oIIhwc8o-Nont61SfhmSjLTPuyZA&s",
    },
  ];

  return (
    <div>
      <h1>Blogs updated</h1>
      {/* blogs coming here */}

      <section className="container mx-auto p-2 md:p-4">
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">Blog No : {blog.id}</h2>
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <Link href={`/blogs/${blog.id}`}>
                  <button
                    className="mt-4 px-6 py-2   bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 ease-in-out shadow-lg"
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
