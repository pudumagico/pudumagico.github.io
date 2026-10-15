import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin", "greek"], variable: "--font-inter-tight" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pudumagico.github.io"),
  title: {
    default: "Nelson Nicolas Higuera Ruiz — AI Researcher",
    template: "%s",
  },
  description:
    "PhD in Neurosymbolic AI (TU Wien). Publications at NeurIPS, AAAI, IJCAI, and KR.",
  keywords: ["Nelson Higuera Ruiz", "Nelson Higuera", "Neurosymbolic AI", "TU Wien", "CENIA", "Pontificia Universidad Católica de Chile", "PUC", "Answer Set Programming", "Explainable AI", "AI Researcher"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nelson Nicolas Higuera Ruiz — AI Researcher",
    description:
      "PhD in Neurosymbolic AI. Combining neural networks with logical reasoning for explainable, verifiable AI systems.",
    type: "website",
  },
};

// schema.org Person record: tells search engines these profiles all belong to one person
const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nelson Nicolas Higuera Ruiz",
  alternateName: ["Nelson Higuera Ruiz", "Nelson Higuera"],
  url: "https://pudumagico.github.io/",
  jobTitle: "Postdoctoral Researcher",
  affiliation: { "@type": "Organization", name: "CENIA" },
  alumniOf: ["TU Wien", "Universidad de Chile"].map((name) => ({ "@type": "CollegeOrUniversity", name })),
  knowsAbout: ["Neurosymbolic AI", "Answer Set Programming", "Explainable AI", "Visual Question Answering"],
  sameAs: [
    "https://scholar.google.com/citations?user=0vaa2Z8AAAAJ",
    "https://dblp.org/pid/242/3002.html",
    "https://orcid.org/0000-0003-3172-723X",
    "https://linkedin.com/in/nelson-higuera-ruiz-4372b2204",
    "https://github.com/pudumagico",
  ],
});

const themeInit = `try{const s=localStorage.getItem("theme-preference");if(s==="dark"||(!s&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark-mode")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: personJsonLd }} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
