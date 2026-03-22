import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

import { ProjectGrid } from "@/components/ProjectGrid";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl text-foreground">
          Jet Semrick
        </h1>
        <p className="max-w-2xl text-lg text-foreground/60 leading-relaxed">
          I'm a software engineer and debate teacher. Currently, I'm helping build Cursor. Previously, I co-founded Avallon (YCombinator X25) and coached policy debate at the Taipei American School. I studied computer science at the University of Kansas and Cornell Tech. Based in New York City.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/jetsemrick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://x.com/jetsemrick"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            <Twitter size={18} />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jetsemrick/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-foreground">Writing</h2>
          <Link href="/writing" className="text-sm text-foreground/60 hover:text-foreground transition-colors">View all</Link>
        </div>
        <div className="flex flex-col space-y-4">
          {allPostsData.slice(0, 3).map(({ id, date, title }) => (
            <Link
              key={id}
              href={`/writing/${id}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-transparent hover:border-neutral-100 transition-colors"
            >
              <span className="font-medium text-foreground group-hover:underline decoration-neutral-400 underline-offset-4">{title}</span>
              <span className="text-sm text-foreground/40 mt-1 sm:mt-0">{formatDate(date)}</span>
            </Link>
          ))}
          {allPostsData.length === 0 && (
             <p className="text-foreground/60 text-sm">No posts found.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-medium text-foreground">Projects</h2>
        <ProjectGrid />
      </section>
    </div>
  );
}
