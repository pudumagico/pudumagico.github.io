const links = [
  { label: "Scholar", href: "https://scholar.google.com/citations?user=0vaa2Z8AAAAJ" },
  { label: "DBLP", href: "https://dblp.org/pid/242/3002.html" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nelson-higuera-ruiz-4372b2204" },
  { label: "ORCID", href: "https://orcid.org/0000-0003-3172-723X" },
  { label: "GitHub", href: "https://github.com/pudumagico" },
];

export default function Footer() {
  return (
    <footer className="hairline-t mt-auto bg-background">
      <div className="mx-auto max-w-[900px] px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <span>&copy; {new Date().getFullYear()} Nelson Nicolas Higuera Ruiz</span>
        <div className="flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
