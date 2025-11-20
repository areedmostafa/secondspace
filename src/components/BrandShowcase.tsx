import henuaOrganics from "@/assets/brands/henua-organics.png";
import itmNaturkosmetik from "@/assets/brands/itm-naturkosmetik.png";
import santaverde from "@/assets/brands/santaverde.png";
import trueOrganic from "@/assets/brands/true-organic.png";
import fitnessPark from "@/assets/brands/fitness-park.png";
import thermeBucuresti from "@/assets/brands/therme-bucuresti.png";
import roujeParis from "@/assets/brands/rouje-paris.png";
import indieWild from "@/assets/brands/indie-wild.png";
import propertyExperts from "@/assets/brands/property-experts.png";
import barrys from "@/assets/brands/barrys.png";
import fitlife from "@/assets/brands/fitlife.png";
import urbanNest from "@/assets/brands/urban-nest.png";
import lumene from "@/assets/brands/lumene.png";
import beeNature from "@/assets/brands/bee-nature.png";

const brands = [
  { src: henuaOrganics, alt: "HENUA Organics" },
  { src: itmNaturkosmetik, alt: "i+m Naturkosmetik Berlin" },
  { src: santaverde, alt: "Santaverde Naturkosmetik" },
  { src: trueOrganic, alt: "True Organic of Sweden" },
  { src: fitnessPark, alt: "Fitness Park" },
  { src: thermeBucuresti, alt: "Therme București" },
  { src: roujeParis, alt: "Rouje Paris" },
  { src: indieWild, alt: "Indie Wild" },
  { src: propertyExperts, alt: "The Property Experts" },
  { src: barrys, alt: "Barry's" },
  { src: fitlife, alt: "FitLife" },
  { src: urbanNest, alt: "Urban Nest" },
  { src: lumene, alt: "Lumene" },
  { src: beeNature, alt: "Bee Nature" },
];

const BrandShowcase = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We've partnered with innovative brands across the globe to drive exceptional growth
        </p>
      </div>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Infinite scroll container - 3 identical sets for seamless loop */}
        <div className="flex animate-infinite-scroll">
          {/* First set of logos */}
          <div className="flex items-center gap-12 px-6">
            {brands.map((brand, index) => (
              <div
                key={`brand-1-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-6 backdrop-blur-sm border border-border/20 shadow-sm"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter brightness-95 dark:brightness-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless infinite loop */}
          <div className="flex items-center gap-12 px-6" aria-hidden="true">
            {brands.map((brand, index) => (
              <div
                key={`brand-2-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-6 backdrop-blur-sm border border-border/20 shadow-sm"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter brightness-95 dark:brightness-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Third set for extra smoothness */}
          <div className="flex items-center gap-12 px-6" aria-hidden="true">
            {brands.map((brand, index) => (
              <div
                key={`brand-3-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-6 backdrop-blur-sm border border-border/20 shadow-sm"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="max-w-full max-h-full object-contain filter brightness-95 dark:brightness-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
