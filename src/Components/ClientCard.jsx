import PropTypes from "prop-types";
import ImageWithFallback from "./ImageWithFallback";

const ClientCard = ({ client }) => {
  return (
    <div className="group h-full overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      {/* Client screenshot/image */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={client.imageSrc}
          alt={`${client.name} website screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Client info */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-poiretOne text-xl font-bold text-neutral-700 md:text-2xl">
            {client.name}
          </h3>
          <time className="text-sm text-neutral-400" dateTime={client.year}>
            {client.year}
          </time>
        </div>

        <p className="font-raleway mb-3 text-sm leading-relaxed text-neutral-600">
          {client.description}
        </p>

        {/* Business impact highlight */}
        <div className="rounded-lg bg-gradient-to-r from-teal-50 to-sky-50 p-3">
          <p className="text-xs font-semibold tracking-wide text-neutral-500 uppercase">
            Impact
          </p>
          <p className="font-raleway mt-1 text-sm font-medium text-neutral-700">
            {client.impact}
          </p>
        </div>
      </div>
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    impact: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientCard;
