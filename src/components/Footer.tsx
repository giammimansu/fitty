import Link from "next/link";

export default function Footer() {
  const links = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Support", href: "#" },
    { label: "System Status", href: "#" },
  ];

  return (
    <footer className="w-full py-10 px-6 md:px-8 bg-surface-container">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link
          href="/"
          className="font-[var(--font-headline)] font-bold text-black uppercase tracking-tighter text-xl"
        >
          FITTY PRECISION
        </Link>

        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-[var(--font-body)] text-[10px] tracking-widest uppercase font-medium text-on-surface-variant hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="font-[var(--font-body)] text-[10px] tracking-widest uppercase font-medium text-on-surface-variant">
          © 2025 FITTY PRECISION SYSTEMS
        </div>
      </div>
    </footer>
  );
}
