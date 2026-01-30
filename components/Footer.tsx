export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-300 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <p className="text-light-300 text-sm">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
