import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import ClientCard from "./ClientCard";

const ClientCarousel = ({ clients }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const scrollPositionRef = useRef(0);

  // Speed in pixels per frame (adjust for faster/slower scroll)
  const scrollSpeed = 0.5;

  // Calculate total width of one set of cards
  const cardWidth = 400;
  const gap = 24; // 6 * 4px (gap-6)
  const singleSetWidth = clients.length * (cardWidth + gap);

  // Animate scroll using requestAnimationFrame
  const animate = useCallback(() => {
    if (!scrollContainerRef.current || isPaused) {
      return;
    }

    scrollPositionRef.current += scrollSpeed;

    // Reset position when we've scrolled past one complete set
    if (scrollPositionRef.current >= singleSetWidth) {
      scrollPositionRef.current = 0;
    }

    scrollContainerRef.current.style.transform = `translateX(-${scrollPositionRef.current}px)`;

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isPaused, singleSetWidth]);

  // Start animation
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

  // Triple the array for seamless infinite loop
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Client work carousel"
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6"
          style={{
            width: "fit-content",
            willChange: "transform",
          }}
        >
          {extendedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              <ClientCard client={client} />
            </div>
          ))}
        </div>
      </div>

      {/* Visual indicator that carousel is paused */}
      {isPaused && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/10">
          <div className="rounded-full bg-white/90 px-4 py-2 shadow-lg">
            <i className="fa-solid fa-pause mr-2 text-neutral-700"></i>
            <span className="font-raleway text-sm text-neutral-700">
              Paused
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

ClientCarousel.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      impact: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ClientCarousel;
