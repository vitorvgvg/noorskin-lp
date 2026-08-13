import bannerImage from "../assets/images/banner-strength.webp";
import bannerImageMobile from "../assets/images/banner-strength-mobile.webp";

export default function Banner() {
  return (
    <section aria-label="Sua força vem de dentro" className="relative">
      <picture>
        <source media="(min-width: 768px)" srcSet={bannerImage} />
        <img
          src={bannerImageMobile}
          alt="Close-up de rosto em tons terrosos com a frase Sua força vem de dentro"
          className="h-[50vh] w-full object-cover md:h-[70vh]"
          loading="lazy"
        />
      </picture>
    </section>
  );
}
