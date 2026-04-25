import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { PRODUCTS } from "../Data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollBaner from "../assets/scrollBaner.png";
import "./Home.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const fanFavorites = PRODUCTS.slice(0, 3);
  const mainRef = useRef(null);
  const drinkRef = useRef(null);
  const offerDrinkRef = useRef(null); // placeholder в баннере

useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const offerImg = offerDrinkRef.current;
    const drink = drinkRef.current;

    gsap.set(offerImg, { opacity: 0 });

    // Idle rotation
    gsap.to(drink, {
      rotation: "+=3",
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    setTimeout(() => {
      const targetRect = offerImg.getBoundingClientRect();
      const drinkRect = drink.getBoundingClientRect();

      const targetX =
        targetRect.left - drinkRect.left +
        (targetRect.width - drinkRect.width) / 2;
      const targetY =
        targetRect.top - drinkRect.top + window.scrollY;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.5,
          onUpdate: (self) => {
            if (!drink) return;
            const p = self.progress;
            drink.style.zIndex = p < 0.3 ? 10 : p < 0.72 ? 2 : 10;
          },
        },
      });

      tl
        // 1. Hero → Fan Favorites (под карточками)
        .fromTo(drink,
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 },
          { x: "-18vw", y: "80vh", rotation: -28, scale: 1.05, ease: "power1.inOut", duration: 1 }
        )
        // 2. Fan Favorites → подлёт к Offer
        .to(drink, {
          x: "2vw", y: "120vh", rotation: 6, scale: 0.95,
          ease: "power1.inOut", duration: 0.5,
        })
        // 3. Летит точно на место placeholder
        .to(drink, {
          x: targetX, y: targetY,
          rotation: 0, scale: 1, opacity: 1,
          ease: "power2.out", duration: 0.8,
        })
        // 4. Placeholder появляется пока летающий ещё виден (overlap)
        .to(offerImg, {
          opacity: 1,
          duration: 0.3,
          ease: "none",
        }, "-=0.1") // чуть раньше конца предыдущего
        // 5. Летающий исчезает — остаётся только placeholder
        .to(drink, {
          opacity: 0,
          duration: 0.25,
          ease: "none",
        });

    }, 150);
  }, mainRef);

  return () => ctx.revert();
}, []);

  return (
    <div className="home" ref={mainRef}>
      <img
        ref={drinkRef}
        src={ScrollBaner}
        className="floating-drink"
        alt="Boba Tea"
      />

      {/* HERO */}
      <section className="home__hero">
        <div className="home__hero-text">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Bubbly Goodness in <br />
            <span>Every Sip</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Experience the perfect blend of premium tea, fresh fruits, and
            perfectly chewy boba. Handcrafted for your joy.
          </motion.p>
          <motion.div
            className="home__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <NavLink to="/menu">
              <button className="btn primary">
                View Menu <ArrowRight size={18} />
              </button>
            </NavLink>
          </motion.div>
        </div>
        {/* <div className="home__hero-img" /> */}
      </section>

      {/* FAN FAVORITES */}
      <section className="home__products">
        <div className="home__products-header">
          <h2>Fan Favorites</h2>
          <NavLink to="/menu">View All</NavLink>
        </div>
        <div className="home__grid">
          {fanFavorites.map((product) => (
            <div key={product.id} className="card">
              <div className="card__image-wrap">
                <img src={product.image} alt={product.name} />
                {product.badge && (
                  <span className="card__badge">{product.badge}</span>
                )}
              </div>
              <div className="card__body">
                <div className="card__top">
                  <h3>{product.name}</h3>
                  <span>{product.price}</span>
                </div>
                <p>{product.description}</p>
                <button className="card__btn">
                  <Plus size={16} /> Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section className="home__offer">
        <div className="home__offer-inner">
          <div className="home__offer-content">
            <span className="home__offer-badge">Limited Time Offer</span>
            <h2>Panda Tea Set</h2>
            <p>
              Perfect for sharing! Get any 2 premium desserts and 1 large teapot
              of your choice for a special price.
            </p>
            <div className="home__offer-pricing">
              <div className="price">
                12.9<span className="currency">AZN</span>
              </div>
              <button className="btn dark">Claim Offer</button>
            </div>
          </div>

          {/* Сюда точно долетает стакан по getBoundingClientRect */}
          <div className="home__offer-image">
            <img
              ref={offerDrinkRef}
              src={ScrollBaner}
              className="offer-drink"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
