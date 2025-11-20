import henuaOrganics from "@/assets/brands/henua-organics-new.png";
import fitlife from "@/assets/brands/fitlife-new.png";
import santaverde from "@/assets/brands/santaverde-new.png";
import itmNaturkosmetik from "@/assets/brands/itm-naturkosmetik-new.png";
import trueOrganic from "@/assets/brands/true-organic-new.png";
import salonVisage from "@/assets/brands/salon-visage-new.png";
import fitnessPark from "@/assets/brands/fitness-park-new.png";
import thermeBucuresti from "@/assets/brands/therme-bucuresti-new.png";
import urbanNest from "@/assets/brands/urban-nest-new.png";
import roujeParis from "@/assets/brands/rouje-paris-new.png";

const brands = [
  { src: henuaOrganics, alt: "HENUA Organics" },
  { src: fitlife, alt: "FitLife" },
  { src: santaverde, alt: "Santaverde Naturkosmetik" },
  { src: itmNaturkosmetik, alt: "i+m Naturkosmetik Berlin" },
  { src: trueOrganic, alt: "True Organic of Sweden" },
  { src: salonVisage, alt: "Salon Visage" },
  { src: fitnessPark, alt: "Fitness Park" },
  { src: thermeBucuresti, alt: "Therme București" },
  { src: urbanNest, alt: "Urban Nest" },
  { src: roujeParis, alt: "Rouje Paris" },
];

const BrandShowcase = () => {
  const firstHalf = brands.slice(0, 5);
  const secondHalf = brands.slice(5);

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

        {/* Desktop: Single row scrolling left */}
        <div className="hidden md:block">
          <div className="flex animate-infinite-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-12 px-6" aria-hidden={setIndex > 0}>
                {brands.map((brand, index) => (
                  <div
                    key={`brand-${setIndex}-${index}`}
                    className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-6 backdrop-blur-sm border border-border/20 shadow-sm"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-w-full max-h-[85%] object-contain filter brightness-95 dark:brightness-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Two rows with opposite scrolling */}
        <div className="md:hidden space-y-6">
          {/* Top row - scrolls left to right */}
          <div className="flex animate-infinite-scroll-reverse">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 px-4" aria-hidden={setIndex > 0}>
                {firstHalf.map((brand, index) => (
                  <div
                    key={`brand-top-${setIndex}-${index}`}
                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-4 backdrop-blur-sm border border-border/20 shadow-sm"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-w-full max-h-[85%] object-contain filter brightness-95 dark:brightness-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom row - scrolls right to left */}
          <div className="flex animate-infinite-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-8 px-4" aria-hidden={setIndex > 0}>
                {secondHalf.map((brand, index) => (
                  <div
                    key={`brand-bottom-${setIndex}-${index}`}
                    className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/90 dark:bg-white/95 rounded-full px-4 backdrop-blur-sm border border-border/20 shadow-sm"
                  >
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      className="max-w-full max-h-[85%] object-contain filter brightness-95 dark:brightness-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
