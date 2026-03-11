"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  showNameOnError?: boolean;
  showLoading?: boolean;
};

export default function ImageFrame({
  src,
  alt,
  className = "h-48",
  fit = "cover",
  showNameOnError = true,
  showLoading = false,
}: Props) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full ${
          fit === "contain" ? "object-contain" : "object-cover"
        } transition-opacity duration-300`}
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
      />

      {status === "loading" && showLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
      )}

      {status === "error" && showNameOnError && (
        <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">
          이미지 로드 실패
        </div>
      )}
    </div>
  );
}
