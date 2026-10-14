import type { Metadata } from "next";
import Nav from "./components/nav";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pudumagico.github.io"),
  title: {
    default: "Nelson Nicolas Higuera Ruiz — AI Researcher",
    template: "%s",
  },
  description:
    "PhD in Neurosymbolic AI (TU Wien). Publications at NeurIPS, AAAI, IJCAI, and KR.",
  keywords: ["Nelson Higuera", "Neurosymbolic AI", "TU Wien", "CENIA", "Pontificia Universidad Católica de Chile", "PUC", "Answer Set Programming", "Explainable AI", "AI Researcher"],
  openGraph: {
    title: "Nelson Nicolas Higuera Ruiz — AI Researcher",
    description:
      "PhD in Neurosymbolic AI. Combining neural networks with logical reasoning for explainable, verifiable AI systems.",
    type: "website",
  },
};

const themeInit = `try{const s=localStorage.getItem("theme-preference");if(s==="dark"||(!s&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark-mode")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
