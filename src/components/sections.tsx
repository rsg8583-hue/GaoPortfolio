import type { ReactNode } from "react";
import Image from "next/image";
import { about, projects, site, skills, type Project } from "@/data/portfolio";
import ProjectVisual from "./ProjectVisual";
import {
  ArrowIcon,
  DevPlaceholder,
  ResumeButton,
  Section,
  buttonStyles,
} from "./ui";

/* ---------- Hero ---------- */

export function Hero({ resumeAvailable }: { resumeAvailable: boolean }) {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      {/* soft accent glow + fine grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_85%_10%,var(--accent-soft),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-12 md:pb-28 md:pt-28">
        <div className="md:col-span-8">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            NYU Computer Science · Class of 2028
          </p>
          <h1
            id="hero-title"
            className="font-display text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          >
            {site.name}
          </h1>
          <p className="mt-5 text-xl text-ink sm:text-2xl">
            Computer Science Student &{" "}
            <em className="whitespace-nowrap font-display text-[1.15em] italic text-accent">
              Full-Stack Developer
            </em>
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={buttonStyles.primary}>
              View projects
              <ArrowIcon direction="down" />
            </a>
            <a href="#contact" className={buttonStyles.secondary}>
              Contact me
            </a>
            <ResumeButton file={site.resumeFile} available={resumeAvailable} />
          </div>
        </div>

        <aside
          aria-label="At a glance"
          className="self-end md:col-span-4 md:justify-self-end"
        >
          <dl className="w-full min-w-64 space-y-4 rounded-2xl border border-line bg-surface/80 p-6 font-mono text-xs backdrop-blur-sm">
            <GlanceItem label="Studying" value="CS, ML & AI track" />
            <GlanceItem label="Building" value="Full-stack web apps" />
            <GlanceItem label="Latest" value="PantryPal (2026)" />
          </dl>
        </aside>
      </div>
    </section>
  );
}

function GlanceItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-line/70 pb-3 last:border-0 last:pb-0">
      <dt className="uppercase tracking-widest text-muted">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  );
}

/* ---------- About ---------- */

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="reveal space-y-5 text-lg leading-relaxed md:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="reveal grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line md:col-span-5">
          {about.facts.map((f) => (
            <div key={f.label} className="bg-surface p-5">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {f.label}
              </dt>
              <dd className="mt-2 text-sm font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */

export function Projects() {
  return (
    <Section id="projects" index="02" title="Featured projects">
      <ul className="space-y-8 md:space-y-12">
        {projects.map((project, i) => (
          <li key={project.slug} className="reveal">
            <ProjectCard project={project} flip={i % 2 === 1} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  const { repo, demo } = project.links;
  return (
    <article
      aria-labelledby={`${project.slug}-title`}
      className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-muted/60 md:grid-cols-12"
    >
      <div
        className={`relative aspect-[20/13] overflow-hidden border-b border-line md:col-span-7 md:aspect-auto md:min-h-[22rem] md:border-b-0 ${
          flip ? "md:order-2 md:border-l" : "md:border-r"
        }`}
      >
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <ProjectVisual kind={project.visual} />
        )}
      </div>

      <div className="flex flex-col p-6 sm:p-8 md:col-span-5">
        <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted">
          <span>{project.tagline}</span>
          <span className="shrink-0 rounded-full border border-line px-2 py-0.5">
            {project.year}
          </span>
        </div>
        <h3
          id={`${project.slug}-title`}
          className="mt-4 font-display text-3xl leading-tight tracking-tight sm:text-4xl"
        >
          {project.title}
        </h3>
        <p className="mt-3 text-muted">{project.summary}</p>

        <ul className="mt-5 space-y-2.5 text-sm leading-relaxed">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden className="mt-2 h-1 w-3 shrink-0 bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies" className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink/80"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-7 text-sm">
          {repo ? (
            <ExternalLink href={repo} label={`${project.title} source code`}>
              Source
            </ExternalLink>
          ) : (
            <DevPlaceholder label="repo URL" />
          )}
          {demo ? (
            <ExternalLink href={demo} label={`${project.title} live demo`}>
              Live demo
            </ExternalLink>
          ) : (
            <DevPlaceholder label="demo URL" />
          )}
        </div>
      </div>
    </article>
  );
}

function ExternalLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in a new tab)`}
      className="group/link inline-flex items-center gap-1.5 font-medium text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      <ArrowIcon
        direction="up-right"
        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </a>
  );
}

/* ---------- Skills ---------- */

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.group} className="reveal bg-surface p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
              {group.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line px-3 py-1.5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */

export function Contact({ resumeAvailable }: { resumeAvailable: boolean }) {
  const links = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    {
      label: "LinkedIn",
      value: "in/ryan-gao06",
      href: site.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      value: site.github.replace(/^https?:\/\/(www\.)?/, ""),
      href: site.github,
      external: true,
    },
  ];

  return (
    <Section id="contact" index="04" title="Contact">
      <div className="reveal grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
            Want to talk about a project, an internship, or something
            you&apos;re building?
          </p>
          <p className="mt-4 text-muted">Email is the best way to reach me.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className={buttonStyles.primary}>
              Email me
              <ArrowIcon />
            </a>
            <ResumeButton file={site.resumeFile} available={resumeAvailable} />
          </div>
        </div>

        <ul className="md:col-span-6 md:col-start-7">
          {links
            .filter(
              (link) => link.href || process.env.NODE_ENV === "development",
            )
            .map((link) => (
              <li
                key={link.label}
                className="border-b border-line first:border-t"
              >
                {link.href ? (
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group/row flex items-center justify-between gap-4 py-5 transition-colors hover:text-accent"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {link.label}
                    </span>
                    <span className="flex min-w-0 items-center gap-3 text-right">
                      <span className="truncate text-base sm:text-lg">
                        {link.value}
                      </span>
                      <ArrowIcon
                        direction={link.external ? "up-right" : "right"}
                        className="shrink-0 transition-transform group-hover/row:translate-x-1"
                      />
                    </span>
                    {link.external && (
                      <span className="sr-only">(opens in a new tab)</span>
                    )}
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-4 py-5">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {link.label}
                    </span>
                    <DevPlaceholder label={`${link.label} URL`} />
                  </div>
                )}
              </li>
            ))}
        </ul>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#top" className="w-fit transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
