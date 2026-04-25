import { Search, MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { LOCATIONS } from "../Data";
import "./Locations.scss";

export default function Locations() {
  return (
    <div className="locations">
      {/* Header */}
      <div className="locations__header">
        <h1>Find Your Boba</h1>
        <p>
          Discover a Panda Bubble Tea location near you. We're serving up joy,
          one cup at a time.
        </p>
      </div>

      <div className="locations__grid">
        {/* Map */}
        <div className="locations__map">
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
            alt="Map"
          />

          <div className="locations__overlay" />

          {/* Search */}
          <div className="locations__search">
            <Search size={18} />
            <input placeholder="Enter zip or city" />
          </div>

          {/* Pins */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="locations__pin main"
          >
            <MapPin />
          </motion.div>

          <div className="locations__pin second">
            <MapPin />
          </div>
        </div>

        {/* List */}
        <div className="locations__list">
          {LOCATIONS.map((loc) => (
            <motion.div
              key={loc.id}
              whileHover={{ scale: 1.02 }}
              className={`location-card ${loc.closest ? "closest" : ""}`}
            >
              {loc.closest && <div className="badge">Closest</div>}

              <div>
                <h3>{loc.name}</h3>
                <p>
                  {loc.address} <br />
                  {loc.city}, {loc.zip}
                </p>
              </div>

              <div className="location-card__hours">
                <Clock size={18} />
                <div>
                  <p>
                    <b>Today:</b> {loc.hours.today}
                  </p>
                  <p>{loc.hours.week}</p>
                  {loc.hours.weekend && <p>{loc.hours.weekend}</p>}
                </div>
              </div>

              <div className="location-card__footer">
                <div className="status">
                  <span
                    className={`dot ${
                      loc.status === "open" ? "open" : "closed"
                    }`}
                  />
                  <span>{loc.status === "open" ? "Open Now" : "Closed"}</span>
                </div>

                <button>
                  Directions <Navigation size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
