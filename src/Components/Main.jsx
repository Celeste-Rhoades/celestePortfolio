import ProjectCard from "./ProjectCard";
import ClientCarousel from "./ClientCarousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeToggle from "./ThemeToggle";

const Main = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Back to Calm",
      description:
        "A React Native mental health app providing real-time panic attack intervention through a 4-step guided process developed in collaboration with Dr. Rita Edmonds, Ed.D. Features emotion tracking, thought distortion identification, positive reframing techniques, detailed panic attack logging with symptom tracking, and daily breathing exercises with binaural beats.",
      techStack: [
        "React Native",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "Firestore",
        "Firebase Storage",
      ],
      videoSrc: "/mp4/Back2Calm.mp4",
      githubLink: "https://github.com/Celeste-Rhoades/BackToCalm",
    },
    {
      id: 2,
      title: "Simply The Best",
      description:
        "A full-stack social recommendation platform where users organize and share recommendations across 24+ categories. Features real-time notifications via WebSockets, friend request system with acceptance/decline functionality, privacy controls for public/friends-only/private recommendations, mobile-optimized interface with swipe gestures, and dual authentication supporting both Google OAuth and traditional login.",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
        "Tailwind CSS",
      ],
      videoSrc: "/mp4/simplyTheBest.mp4",
      githubLink: "https://github.com/Celeste-Rhoades/Simply-The-Best",
      liveLink: "https://getsimplythebest.net",
    },
    {
      id: 3,
      title: "Miami Vice Color Theme",
      description:
        "A VS Code color theme inspired by 80s Miami aesthetics with vibrant neon colors and high contrast for optimal readability. Over 1,000 downloads on the VS Code Marketplace.",
      techStack: ["VS Code Extension", "JSON"],
      videoSrc: "/mp4/VsCodeTheme.mp4",
      marketplaceLink:
        "https://marketplace.visualstudio.com/items?itemName=CelesteDesigns.miami-vice-color-theme",
    },
  ];

  const clientProjects = [
    {
      id: 1,
      name: "Empire Toffee",
      description:
        "Designed and built a custom e-commerce experience using JavaScript and responsive front-end frameworks, supporting personalized purchasing flows and driving over $50,000 in sales.",
      impact:
        "Created comprehensive UI design system and wireframes for branded storefront, optimizing user experience through strategic UX/UI and front-end development",
      year: "2025",
      imageSrc: "/images/EmpireToffee.png",
    },
    {
      id: 2,
      name: "Savvy Ledgers",
      description:
        "Built an SEO-driven website for a growing accounting firm, applying strategic keyword research and search best practices to achieve first-page rankings and support a business generating over $120K in revenue.",
      impact: "100+ annual clients through improved online presence",
      year: "2023",
      imageSrc: "/images/SavvyLedgers.png",
    },
    {
      id: 3,
      name: "Grand Gutters",
      description:
        "Built a conversion-focused marketing website with integrated social media and local SEO optimization to capture high-intent search traffic and drive consistent lead generation.",
      impact:
        "Increased sales by 80% through improved online visibility and streamlined customer inquiry process",
      year: "2024",
      imageSrc: "/images/GrandGutters.png",
    },
    {
      id: 4,
      name: "Breathe Skin Care",
      description:
        "Full-service spa specializing in esthetician treatments and professional skin care. Built a custom website gathering client requirements and delivering a responsive, user-centered solution with integrated e-commerce capabilities.",
      impact:
        "Generated over $30K in sales through Square POS integration, gift card platform, and automated Zapier workflows for seamless online ordering",
      year: "2022",
      imageSrc: "/images/BreatheSkinCare.png",
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
            href="https://www.linkedin.com/in/celeste-rhoades/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-xl p-2 text-3xl text-white transition-all duration-300 hover:bg-gradient-to-t hover:from-rose-300 hover:via-sky-200 hover:to-teal-300 focus:ring-2 focus:ring-white focus:outline-none md:text-4xl"
          >
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/Celeste-Rhoades"
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
          <h1 className="font-poiretOne mt-8 text-center text-3xl text-neutral-600 transition-all duration-300 md:mt-14 md:text-6xl dark:text-white">
            What I Do
          </h1>
          <p className="font-raleway mt-3 px-4 text-center text-base text-neutral-600 transition-all duration-300 md:mt-4 md:px-24 md:text-lg dark:text-white">
            Hi I&apos;m Celeste
          </p>
          <p className="font-raleway mt-2 px-4 text-center text-sm text-neutral-500 transition-all duration-300 md:px-24 md:text-base dark:text-neutral-100">
            I’m a full-stack engineer who brings a people-first approach and
            strong systems thinking to every product I build. Years in
            customer-facing roles, operations leadership, and business ownership
            shape how I design and ship applications using JavaScript,
            TypeScript, React, Node, Express, and React Native. I’m drawn to
            building software that simplifies complex operations while
            delivering a thoughtful, intuitive experience for users.
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
