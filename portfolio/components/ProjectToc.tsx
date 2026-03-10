"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

type Props = {
  sections: Section[];
};

export default function ProjectToc({ sections }: Props) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(section.id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sections]);

  return (
    <div className="space-y-3 text-sm">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={
            activeId === section.id
              ? "block text-blue-600 font-semibold"
              : "block text-gray-600 hover:text-blue-600"
          }
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
