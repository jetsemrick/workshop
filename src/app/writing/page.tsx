import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { Metadata } from "next";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Writing - Jet Semrick",
  description: "Essays and thoughts.",
};

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium tracking-tight text-foreground">Writing</h1>
        <p className="text-lg text-foreground/60 max-w-xl">
          Essays and commentary
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {allPostsData.map(({ id, date, title, description }) => (
          <article key={id} className="group relative flex flex-col space-y-2">
            <span className="text-sm text-foreground/40">{formatDate(date)}</span>
            <Link href={`/writing/${id}`} className="block">
              <h2 className="text-xl font-medium text-foreground group-hover:underline decoration-neutral-400 underline-offset-4">
                {title}
              </h2>
            </Link>
            {description && <p className="text-foreground/60 max-w-2xl">{description}</p>}
          </article>
        ))}
        {allPostsData.length === 0 && (
             <p className="text-foreground/60 text-sm">No posts found.</p>
        )}
      </div>
    </div>
  );
}

