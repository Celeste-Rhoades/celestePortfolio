import { useState } from "react";
import PropTypes from "prop-types";

const ImageWithFallback = ({ src, alt, className, fallbackSrc = null }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-200 ${className}`}
      >
        <div className="text-center">
          <i className="fa-solid fa-image text-4xl text-slate-400"></i>
          <p className="mt-2 text-sm text-slate-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-slate-200 ${className}`}
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-teal-400"></div>
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
      />
    </>
  );
};

ImageWithFallback.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fallbackSrc: PropTypes.string,
};

export default ImageWithFallback;
