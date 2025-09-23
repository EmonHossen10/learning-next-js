import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-pink-50 text-gray-900">
        {/* Header / Hero */}
        <header className="max-w-6xl mx-auto px-6 py-12"></header>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
              About NextApp
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
              NextApp is a modern web application built with{" "}
              <strong>Next.js</strong> and <strong>Tailwind CSS</strong>. It
              focuses on performance, accessibility, and delightful user
              experiences.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#mission"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
              >
                Our mission
              </a>
              <a
                href="#features"
                className="inline-flex items-center px-4 py-2 rounded-lg border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 transition"
              >
                Key features
              </a>
            </div>
          </div>

          <div className="w-full md:w-72 lg:w-96">
            <div className="rounded-2xl p-6 bg-white/80 backdrop-blur-sm shadow-lg border border-gray-100">
              <h3 className="text-sm font-semibold text-indigo-600">
                Snapshot
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Built with SSR/SSG, optimized images, incremental static
                regeneration, and API routes — NextApp loads fast and ranks
                great.
              </p>

              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="bg-indigo-50 rounded-md p-3">
                  <dt className="text-xs text-gray-500">Performance</dt>
                  <dd className="font-semibold text-indigo-700">A+</dd>
                </div>
                <div className="bg-pink-50 rounded-md p-3">
                  <dt className="text-xs text-gray-500">Accessibility</dt>
                  <dd className="font-semibold text-pink-600">WCAG Ready</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
