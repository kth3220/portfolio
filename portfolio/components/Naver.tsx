export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 border-b border-gray-700">
      <h1 className="text-xl font-bold">Kim Taehee</h1>

      <div className="flex gap-6">
        <a href="#projects">Projects</a>

        <a href="#contact">Contact</a>

        <a href="https://github.com/kth3220" target="_blank">
          GitHub
        </a>
      </div>
    </nav>
  );
}
