import { BlogsList } from "@/app/[locale]/(root)/(routes)/_components/blogs-list";

export default function HomePage() {
  return (
    <main className="root-container pt-12">
      <BlogsList />
    </main>
  );
}
