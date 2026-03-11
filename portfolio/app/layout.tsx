import "./globals.css";

export const metadata = {
  title: "Taehee Kim | Frontend Developer",
  description:
    "Frontend developer specialized in React, Next.js, and TypeScript. Focused on building clean, user-friendly web applications.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
