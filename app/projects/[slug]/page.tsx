import Image from "next/image";
import { projects } from "../../lib/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="text-2xl font-bold">Project unavailable</h1>
        <pre className="mt-4 text-white/80">
          {`slug param: ${slug}
loaded slugs: ${projects.map((p) => p.slug).join(", ")}`}
        </pre>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-5 py-20">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-white/80">{project.blurb}</p>

      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-2xl">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/15 bg-white/10 px-4 py-2"
        >
          View Code
        </a>
      </div>
    </main>
  );
}
