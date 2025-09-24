"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AboutNavbar = () => {
  const pathname = usePathname();
  const links = [
    { href: "/about/mission", label: "Mission" },
    { href: "/about/vision", label: "Vision" },
    
  ];

  return (
    <nav>
      <ul className="flex gap-4 mb-2">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`${
                pathname === href
                  ? "text-green-500 underline font-bold"
                  : "text-sky-500 hover:underline hover:text-green-500  j"
              } transition-all duration-300 ease-in-out`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AboutNavbar;
