import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Flame } from "lucide-react";
import { PRODUCTS } from "../Data";
import "./Menu.scss";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Milk Tea", "Fruit Tea"];

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="menu">
      {/* Header */}
      <div className="menu__header">
        <h1>Our Menu</h1>
        <p>
          Sip into something joyful. Crafted daily with fresh ingredients and
          our signature bouncy pearls.
        </p>
      </div>

      {/* Categories */}
      <div className="menu__categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={activeCategory === cat ? "active" : ""}
          >
            {cat === "All" ? "All Bubbly" : cat}
          </button>
        ))}

        <button>Toppings</button>
      </div>

      {/* Products */}
      <div className="menu__grid">
        {filteredProducts.map((product, idx) => (
          <motion.article
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="menu-card"
          >
            <div className="menu-card__image">
              <img src={product.image} alt={product.name} />

              {product.tag && (
                <div className="menu-card__tag">
                  {product.tag === "New" && <Flame size={16} />}
                  {product.tag}
                </div>
              )}
            </div>

            <div className="menu-card__body">
              <div className="menu-card__top">
                <h3>{product.name}</h3>
                <span>{product.price}</span>
              </div>

              <p>{product.description}</p>

              <button>
                <Plus size={18} />
                Add to Order
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Section */}
      <div className="menu__section-title">
        <h2>Refreshing Fruit Teas</h2>
        <div className="line"></div>
      </div>

      <div className="menu__grid">
        {PRODUCTS.filter((p) => p.category === "Fruit Tea").map((product) => (
          <div key={"section-" + product.id} className="menu-card">
            <div className="menu-card__image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="menu-card__body">
              <div className="menu-card__top">
                <h3>{product.name}</h3>
                <span>{product.price}</span>
              </div>

              <p>{product.description}</p>

              <button>
                <Plus size={18} />
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
