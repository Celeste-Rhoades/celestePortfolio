import { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const observerRef = useRef(null);

  const handleVideoLoad = useCallback(() => {
    setIsVideoLoaded(true);
    setVideoError(false);
  }, []);

  const handleVideoError = useCallback(() => {
    setVideoError(true);
    setIsVideoLoaded(false);
    console.error(`Failed to load video: ${project.videoSrc}`);
  }, [project.videoSrc]);

  useEffect(() => {
    const currentCardRef = cardRef.current;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            videoRef.current &&
            !isVideoLoaded &&
            !videoError
          ) {
            videoRef.current.load();
          }
        });
      },
      { threshold: 0.25, rootMargin: "50px" },
    );

    if (currentCardRef) {
      observerRef.current.observe(currentCardRef);
    }

    return () => {
      if (observerRef.current && currentCardRef) {
        observerRef.current.unobserve(currentCardRef);
      }
    };
  }, [isVideoLoaded, videoError]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (videoRef.current && isVideoLoaded && !videoError) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Video play failed:", error);
          });
      }
    }
  }, [isVideoLoaded, videoError]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (isHovered) {
          handleMouseLeave();
        } else {
          handleMouseEnter();
        }
      }
    },
    [isHovered, handleMouseEnter, handleMouseLeave],
  );

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-teal-400 hover:shadow-2xl dark:bg-neutral-700 dark:shadow-neutral-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-200 dark:bg-neutral-600">
        {!videoError ? (
          <>
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
              aria-label={`Demo video for ${project.title}`}
            >
              <source src={project.videoSrc} type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>

            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-neutral-600">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-teal-400 dark:border-neutral-500 dark:border-t-teal-400"></div>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-neutral-600">
            <div className="text-center">
              <i className="fa-solid fa-video-slash text-4xl text-slate-400 dark:text-neutral-400"></i>
              <p className="mt-2 text-sm text-slate-500 dark:text-neutral-300">
                Video unavailable
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/85 to-transparent p-4 transition-all duration-500 ease-in-out md:p-6 dark:from-neutral-950/95 dark:via-neutral-900/85 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-h-full overflow-y-auto">
          <h3 className="font-poiretOne mb-3 text-xl leading-tight font-bold text-white md:text-2xl">
            {project.title}
          </h3>

          <p className="font-raleway mb-3 text-xs leading-relaxed text-slate-200 md:text-sm">
            {project.description}
          </p>

          <div
            className="mb-3 flex flex-wrap gap-2"
            role="list"
            aria-label="Technologies used"
          >
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200"
                role="listitem"
              >
                {tech}
              </span>
            ))}
          </div>

          <nav className="flex flex-wrap gap-2" aria-label="Project links">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-lg bg-white/10 px-3 py-2 text-sm text-white transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white focus:outline-none"
                onClick={(e) => e.stopPropagation()}
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
                className="flex items-center gap-1 rounded-lg bg-teal-400/20 px-3 py-2 text-sm text-teal-300 transition-colors hover:bg-teal-400/30 focus:ring-2 focus:ring-teal-300 focus:outline-none"
                onClick={(e) => e.stopPropagation()}
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
                className="flex items-center gap-1 rounded-lg bg-sky-400/20 px-3 py-2 text-sm text-sky-300 transition-colors hover:bg-sky-400/30 focus:ring-2 focus:ring-sky-300 focus:outline-none"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View ${project.title} on marketplace`}
              >
                <i className="fa-solid fa-store" aria-hidden="true"></i>
                <span>Marketplace</span>
              </a>
            )}
          </nav>
        </div>
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
