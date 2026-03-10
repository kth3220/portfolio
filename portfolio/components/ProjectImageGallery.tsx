"use client";

import { useState } from "react";
import ImageFrame from "@/components/ImageFrame";

type ImageItem = {
  label: string;
  filename: string;
};

type Props = {
  images?: ImageItem[];
};

export default function ProjectImageGallery({ images = [] }: Props) {
  const [active, setActive] = useState<ImageItem | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((img) => (
          <button
            key={img.filename}
            type="button"
            onClick={() => setActive(img)}
            className="text-left"
          >
            <ImageFrame
              src={`/${img.filename}`}
              alt={img.label}
              className="h-56"
              fit="contain"
            />
            <p className="mt-3 text-sm text-gray-600">{img.label}</p>
          </button>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-5xl bg-white rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-700">
                {active.label}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                닫기
              </button>
            </div>
            <div className="relative bg-gray-100 rounded-lg h-[60vh] flex items-center justify-center overflow-hidden">
              <img
                src={`/${active.filename}`}
                alt={active.label}
                className="absolute inset-0 h-full w-full object-contain bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
