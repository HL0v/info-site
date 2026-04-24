import { Link} from 'react-router-dom';
import {type Project } from '../../Data/projects';

export function ProjectCard({ project }: { project: Project }){
  const coverSrc = project.cover;
  return (
    <Link className="group relative block overflow-hidden bg-(--brand-deep)" to={`/portifolio/${project.slug}`}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={coverSrc}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-900ms ease-out group-hover:scale-[1.06]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center bg-brand-blue opacity-0 transition-opacity duration-500 group-hover:opacity-80">
        {project.logo ? (
          <img
            src={project.logo}
            alt={`${project.title} logo`}
            loading="lazy"
            className="max-h-12 w-auto max-w-[60%] object-contain"
          />
        ) : (
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/70">
            {project.category}
          </span>
        )}
        <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl justify-center items-center">{project.title}</h3>
        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-xs uppercase tracking-[0.3em] text-white">
          Ver Projeto
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}