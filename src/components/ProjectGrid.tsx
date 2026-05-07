import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <ProjectCard
        title="Avallon"
        description="YCombinator X25 startup."
        href="https://avallon.ai"
      />
      <ProjectCard
        title="Bailey"
        description="A debate application for flowing."
        href="https://bailey.jetsemrick.com"
      />
    </div>
  );
}

function ProjectCard({ title, description, href = "#" }: { title: string; description: string; href?: string }) {
  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-6 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] hover:border-neutral-300 hover:shadow-sm"
    >
       <div className="flex flex-col h-full justify-between">
          <div>
             <h3 className="font-medium text-foreground">{title}</h3>
             <p className="mt-2 text-sm text-foreground/60">{description}</p>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium text-foreground/40 group-hover:text-foreground/80 transition-colors">
            <span>View Project</span> <ArrowRight size={12} />
          </div>
       </div>
       <Link href={href} className="absolute inset-0" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} />
    </div>
  );
}
