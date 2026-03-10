"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
    { name: "Detail", href: "/projects" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              KTH
            </span>
          </div>

          <div className="hidden md:flex gap-10 items-center">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
                </button>
              )
            )}
            <a
              href="https://github.com/kth3220"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              GitHub
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
                >
                  {item.name}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
