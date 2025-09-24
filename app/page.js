export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 px-6">
      {/* Hero Section */}
      <section className="text-center py-20 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-green-500">My Website</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a modern Next.js app styled with Tailwind CSS. Build fast,
          responsive, and beautiful web apps with ease.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-5xl w-full py-16">
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-3">⚡ Fast</h3>
          <p className="text-gray-600">
            Built with Next.js, your site loads super fast with optimized
            performance.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-3">🎨 Beautiful</h3>
          <p className="text-gray-600">
            Styled with Tailwind CSS, giving you a clean, modern, and responsive
            design.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-3">🚀 Scalable</h3>
          <p className="text-gray-600">
            Easily scale your app with Next.js’ App Router and API routes.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </footer>
    </main>
  );
}
