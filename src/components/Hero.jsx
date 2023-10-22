import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl capitalize">
          Everything your home deserves
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Reimagine your space with simple details.
          <br />
          Shop From Our Wide Range of Well-Designed, Functional, Affordable
          Furniture & Accessories! Explore the wide range of affordable home
          furnishing solutions. Shop online now!
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>

    </div>
  )}

export default Hero;
