import ProjectCard from "./ProjectCard";
import ClientCarousel from "./ClientCarousel";
import ErrorBoundary from "./ErrorBoundary";

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
      githubLink: "https://github.com/yourusername/back-to-calm",
      status: "In Development",
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
      githubLink: "https://github.com/yourusername/simply-the-best",
      liveLink: "https://simplythebest.com",
    },
    {
      id: 3,
      title: "Miami Vice Theme",
      description:
        "A VS Code color theme inspired by 80s Miami aesthetics with vibrant neon colors and high contrast for optimal readability. Over 1,000 downloads on the VS Code Marketplace.",
      techStack: ["VS Code Extension", "JSON", "Color Theory"],
      videoSrc: "/videos/vscode-theme.mp4",
      marketplaceLink:
        "https://marketplace.visualstudio.com/items?itemName=yourname.miami-vice-electric",
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
      imageSrc: "/images/grand-gutters.png",
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
    <div className="mt-18 flex flex-col justify-center rounded-t-xl border border-white/20 bg-blue-300/20 shadow-xl backdrop-blur-md">
      {/* Social links */}
      <nav
        className="mr-10 flex h-[64px] items-center justify-end"
        aria-label="Social media links"
      >
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="m-4 p-2 text-4xl text-white transition-all duration-300 hover:rounded-xl hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none"
        >
          <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 text-4xl text-white transition-all duration-300 hover:rounded-xl hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none"
        >
          <i className="fa-brands fa-github" aria-hidden="true"></i>
        </a>
      </nav>

      {/* Main content */}
      <main className="min-h-screen bg-white pb-16">
        {/* Intro */}
        <header className="mx-4 border-b border-b-slate-400 pb-8 md:mx-24">
          <h1 className="font-poiretOne mt-14 text-center text-4xl text-neutral-600 md:text-6xl">
            Beyond the Code
          </h1>
          <p className="font-poiretOne mt-4 px-4 text-center text-lg text-neutral-600 md:px-24">
            Hi I&apos;m Celeste
          </p>
          <p className="font-raleway mt-2 px-4 text-center text-neutral-500 md:px-24">
            Full-stack software engineer specializing in the MERN stack,
            building scalable applications that solve real problems.
          </p>
        </header>

        {/* Featured Projects */}
        <section
          className="mx-4 mt-16 md:mx-24"
          aria-labelledby="featured-projects-heading"
        >
          <h2
            id="featured-projects-heading"
            className="font-poiretOne mb-8 text-center text-4xl text-neutral-600 md:text-5xl"
          >
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
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

        {/* Client Work */}
        <section
          className="mx-4 mt-24 md:mx-24"
          aria-labelledby="client-work-heading"
        >
          <h2
            id="client-work-heading"
            className="font-poiretOne mb-8 text-center text-4xl text-neutral-600 md:text-5xl"
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
