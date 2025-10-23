import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              videoRef.current
                .play()
                .catch((err) => console.log("Autoplay prevented:", err));
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className="group flex flex-col overflow-hidden rounded-xl bg-slate-100 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-700 dark:shadow-neutral-950"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-neutral-600">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Demo video for ${project.title}`}
        >
          <source src={project.videoSrc} type="video/mp4" />
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="font-poiretOne mb-2 text-center text-xl text-neutral-800 transition-colors duration-300 md:text-2xl dark:text-neutral-100">
          {project.title}
        </h3>

        {project.status && (
          <div className="mb-3 flex justify-center">
            <span className="inline-block rounded-full bg-teal-400/20 px-3 py-1 text-xs text-teal-600 dark:text-teal-300">
              {project.status}
            </span>
          </div>
        )}

        <p className="font-raleway mb-4 flex-grow text-center text-sm leading-relaxed text-neutral-600 transition-colors duration-300 dark:text-neutral-300">
          {project.description}
        </p>

        <div
          className="mb-4 flex flex-wrap justify-center gap-2"
          role="list"
          aria-label="Technologies used"
        >
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="rounded-md bg-white/50 px-3 py-1 text-xs font-medium text-neutral-700 shadow-md transition-colors duration-300 dark:bg-neutral-600/50 dark:text-neutral-200 dark:shadow-neutral-900/50"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>

        <nav
          className="mt-auto flex flex-wrap justify-center gap-3"
          aria-label="Project links"
        >
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-neutral-800 shadow-md transition-all hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              aria-label={`View ${project.title} code on GitHub`}
            >
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              <span>Code</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-neutral-800 shadow-md transition-all hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              aria-label={`Visit ${project.title} live site`}
            >
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                aria-hidden="true"
              ></i>
              <span>Live Site</span>
            </a>
          )}
          {project.marketplaceLink && (
            <a
              href={project.marketplaceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-slate-200 px-4 py-2 text-sm font-medium text-neutral-800 shadow-md transition-all hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 focus:outline-none dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
              aria-label={`View ${project.title} on marketplace`}
            >
              <i className="fa-solid fa-store" aria-hidden="true"></i>
              <span>Marketplace</span>
            </a>
          )}
        </nav>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    videoSrc: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    liveLink: PropTypes.string,
    marketplaceLink: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
