import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-medium tracking-tight text-foreground">Not found</h1>
      <p className="text-foreground/60">The page you are looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground">
        Back home
      </Link>
    </div>
  );
}
