import { Leaf, Droplets, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <div className="about">
      {/* HERO */}
      <section className="about__hero">
        <div className="about__hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The Panda Promise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            We believe every cup of boba should be a moment of pure joy.
          </motion.p>
        </div>

        <div className="about__hero-img">
          <img
            src="https://images.unsplash.com/photo-1544787210-2213d2424072"
            alt="boba"
          />
        </div>
      </section>

      {/* GRID */}
      <section className="about__grid">
        <div className="about__card about__card--big">
          <h3>Obsessive Quality</h3>
          <p>Premium tea from Taiwan, brewed fresh.</p>
        </div>

        <div className="about__card">
          <Leaf />
          <h3>Real Ingredients</h3>
        </div>

        <div className="about__card">
          <Droplets />
          <h3>The Perfect Pearl</h3>
        </div>

        <div className="about__card about__card--dark">
          <h3>
            Meet Pip <Heart />
          </h3>
        </div>
      </section>

      {/* FOOT */}
      <section className="about__footer">
        <Sparkles />
        <h2>Stay Bubbly.</h2>
      </section>
    </div>
  );
}
