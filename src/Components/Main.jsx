import ProjectCard from "./ProjectCard";
import ClientCarousel from "./ClientCarousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeToggle from "./themeToggle";

const Main = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Back to Calm",
      description:
        "A React Native mental health app featuring a 4-step panic attack walkthrough, emotion tracking, breathing exercises, and therapeutic interventions built in collaboration with Dr. Rita Edmonds, Ed.D.",
      techStack: [
        "React Native",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      videoSrc: "/videos/back-to-calm.mp4",
      githubLink: "https://github.com/Celeste-Rhoades/BackToCalm",
    },
    {
      id: 2,
      title: "Simply The Best",
      description:
        "A social recommendation platform with friend request systems, real-time Socket.io notifications, privacy controls, and mobile-responsive design.",
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
      ],
      videoSrc: "/videos/simply-the-best.mp4",
      githubLink: "https://github.com/Celeste-Rhoades/Simply-The-Best",
      liveLink: "https://getsimplythebest.net",
    },
    {
      id: 3,
      title: "Miami Vice Color Theme",
      description:
        "A VS Code color theme inspired by 80s Miami aesthetics with vibrant neon colors and high contrast for optimal readability. Over 1,000 downloads on the VS Code Marketplace.",
      techStack: ["VS Code Extension", "JSON", "Color Theory"],
      videoSrc: "/videos/vscode-theme.mp4",
      marketplaceLink:
        "https://marketplace.visualstudio.com/items?itemName=CelesteDesigns.miami-vice-color-theme",
    },
  ];

  const clientProjects = [
    {
      id: 1,
      name: "Empire Toffee",
      description:
        "Built a full e-commerce platform with product catalog, shopping cart, and secure checkout integration.",
      impact:
        "Enabled online sales and expanded customer reach beyond local markets",
      year: "2023",
      imageSrc: "/images/empire-toffee.png",
    },
    {
      id: 2,
      name: "Grand Gutters",
      description:
        "Developed a service-based business website with appointment scheduling, service area mapping, and customer testimonials.",
      impact: "Streamlined customer acquisition and booking process",
      year: "2023",
      imageSrc: "",
    },
    {
      id: 3,
      name: "Savvy Ledgers",
      description:
        "Created a professional accounting firm website with service pages, client portal access, and contact forms.",
      impact: "Generated 100+ annual clients through improved online presence",
      year: "2023",
      imageSrc: "/images/savvy-ledgers.png",
    },
    {
      id: 4,
      name: "Breathe Skin Care",
      description:
        "Designed and built custom branding, banner graphics, and Square POS integration for seamless online ordering.",
      impact: "$30K in sales through integrated e-commerce solution",
      year: "2022",
      imageSrc: "/images/breathe-skincare.png",
    },
  ];

  return (
    <div className="mt-8 flex flex-col justify-center rounded-t-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-md transition-all duration-300 md:mt-18 dark:border-white/10 dark:bg-black/20">
      <nav
        className="flex h-[56px] items-center justify-between px-4 md:h-[64px] md:px-10"
        aria-label="Theme and social links"
      >
        <ThemeToggle />

        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-xl p-2 text-3xl text-white transition-all duration-300 hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none md:text-4xl"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-xl p-2 text-3xl text-white transition-all duration-300 hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none md:text-4xl"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
        </div>
      </nav>

      <main className="min-h-screen bg-white/95 pb-16 backdrop-blur-sm transition-all duration-300 dark:bg-neutral-800/90">
        <header className="mx-4 border-b border-b-slate-400 pb-6 transition-all duration-300 md:mx-24 md:pb-8 dark:border-b-neutral-600">
          <h1 className="font-poiretOne mt-8 text-center text-3xl text-neutral-600 transition-all duration-300 md:mt-14 md:text-6xl dark:text-neutral-100">
            Beyond the Code
          </h1>
          <p className="font-poiretOne mt-3 px-4 text-center text-base text-neutral-600 transition-all duration-300 md:mt-4 md:px-24 md:text-lg dark:text-neutral-200">
            Hi I&apos;m Celeste
          </p>
          <p className="font-raleway mt-2 px-4 text-center text-sm text-neutral-500 transition-all duration-300 md:px-24 md:text-base dark:text-neutral-300">
            Full-stack software engineer specializing in the MERN stack,
            building scalable applications that solve real problems.
          </p>
        </header>

        <section
          className="mx-4 mt-12 md:mx-24 md:mt-16"
          aria-labelledby="featured-projects-heading"
        >
          <h2
            id="featured-projects-heading"
            className="font-poiretOne mb-6 text-center text-3xl text-neutral-600 transition-all duration-300 md:mb-8 md:text-5xl dark:text-neutral-100"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ErrorBoundary
                key={project.id}
                fallbackMessage="Failed to load project"
              >
                <ProjectCard project={project} />
              </ErrorBoundary>
            ))}
          </div>
        </section>

        <section
          className="mx-4 mt-16 md:mx-24 md:mt-24"
          aria-labelledby="client-work-heading"
        >
          <h2
            id="client-work-heading"
            className="font-poiretOne mb-6 text-center text-3xl text-neutral-600 transition-all duration-300 md:mb-8 md:text-5xl dark:text-neutral-100"
          >
            Client Work
          </h2>

          <ErrorBoundary fallbackMessage="Failed to load client carousel">
            <ClientCarousel clients={clientProjects} />
          </ErrorBoundary>
        </section>
      </main>
    </div>
  );
};

export default Main;
