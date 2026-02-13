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
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
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

          <div
            className="
              grid gap-8
              grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
              xl:grid-cols-[repeat(auto-fit,minmax(380px,1fr))]
            "
          >
            {desktopShots.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-video">
                  <Image
                    src={img}
                    alt={`${project.title} desktop screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}
      {/* MOBILE: small scroll on mobile, grid on desktop */}
      {mobileShots.length ? (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Mobile Experience</h2>

          <div
            className="
              -mx-5 px-5
              flex gap-5 overflow-x-auto pb-3
              snap-x snap-mandatory
              md:mx-0 md:px-0
              md:grid md:overflow-visible md:pb-0
              md:gap-8
              md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]
              lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
            "
          >
            {mobileShots.map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="
                  relative shrink-0
                  w-[55vw] sm:w-[220px]
                  snap-center
                  overflow-hidden
                  rounded-[1.75rem]
                  border border-white/10 bg-white/5
                  md:w-auto md:snap-none
                "
              >
                <div className="relative aspect-9/19">
                  <Image
                    src={img}
                    alt={`${project.title} mobile screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 55vw, (max-width: 1024px) 240px, 280px"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-white/10" />
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
