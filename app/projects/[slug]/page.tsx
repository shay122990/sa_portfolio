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

        {/* helpful debug in dev */}
        <pre className="mt-4 text-xs text-white/60">
          {`slug: ${slug}\nslugs: ${projects.map((p) => p.slug).join(", ")}`}
        </pre>
      </main>
    );
  }

  const desktopShots = project.screenshots?.desktop ?? [];
  const mobileShots = project.screenshots?.mobile ?? [];

  return (
    <main className="mx-auto max-w-6xl px-5 py-20 space-y-20">
      {/* HERO */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg text-white/70 max-w-2xl">{project.blurb}</p>

        <div className="flex flex-wrap gap-4">
          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-2 hover:bg-white/20 transition"
            >
              View Code
            </a>
          ) : null}

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white text-black px-5 py-2 hover:opacity-80 transition"
            >
              Live Demo
            </a>
          ) : null}
        </div>

        {/* HERO IMAGE */}
        {project.image ? (
          <div className="relative mt-6 aspect-video overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-contain"
            />
          </div>
        ) : null}
      </section>

      {/* TECH STACK */}
      {project.tags?.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-white/10 px-3 py-1 text-sm text-white/80 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {/* DESKTOP ROW */}
      {desktopShots.length ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Desktop Experience</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {desktopShots.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <Image
                  src={img}
                  alt={`${project.title} desktop screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* MOBILE ROW */}
      {mobileShots.length ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Mobile Experience</h2>

          <div className="flex gap-6 overflow-x-auto pb-2">
            {mobileShots.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="relative w-56 shrink-0 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <Image
                  src={img}
                  alt={`${project.title} mobile screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* OVERVIEW */}
      {project.overview ? (
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-white/70 leading-relaxed">{project.overview}</p>
        </section>
      ) : null}

      {/* ARCHITECTURE */}
      {project.architecture ? (
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <p className="text-white/70 leading-relaxed">
            {project.architecture}
          </p>
        </section>
      ) : null}

      {/* CHALLENGES */}
      {project.challenges?.length ? (
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold">Challenges</h2>
          <ul className="list-disc pl-5 text-white/70 space-y-2">
            {project.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* IMPROVEMENTS */}
      {project.improvements?.length ? (
        <section className="space-y-4 max-w-3xl">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <ul className="list-disc pl-5 text-white/70 space-y-2">
            {project.improvements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
