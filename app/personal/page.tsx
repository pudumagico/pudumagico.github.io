import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal — Nelson Nicolas Higuera Ruiz",
};

export default function Personal() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-10">
      <h1 className="text-3xl mb-2">Personal</h1>
      <p className="text-sm text-muted">Content coming soon.</p>
    </div>
  );
}
