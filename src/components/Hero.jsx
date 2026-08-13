import heroPortrait from "../assets/images/hero-portrait.webp";
import heroPortraitMobile from "../assets/images/hero-portrait-mobile.webp";

export default function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-title"
      className="flex flex-col bg-noor-black text-noor-cream md:flex-row md:items-stretch"
    >
      <div className="flex flex-col justify-center gap-8 px-[20px] pt-[58px] pb-[40px] md:w-1/2 md:justify-end md:px-0 md:pt-0 md:pb-20 md:pl-[max(2.5rem,calc((100vw-1360px)/2))] md:pr-20">
        <h1
          id="hero-title"
          className="w-[min(355px,100%)] font-display font-normal text-[48px] leading-[50px] md:w-[370px] md:font-light md:text-[64px] md:leading-[68px]"
        >
          Renasça com nutrição
        </h1>
        <p className="w-[min(355px,100%)] font-normal text-[24px] leading-[26px] text-noor-cream md:w-[370px] md:font-light">
          Renaissance resgata a integridade da queratina, reconstruindo a
          arquitetura de fios e unhas contra os desgastes do cotidiano. Uma
          nutrição essencial que cura a fibra profundamente, devolvendo a
          força e o brilho que nascem de dentro.
        </p>
      </div>

      <div className="md:w-1/2">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroPortrait} />
          <img
            src={heroPortraitMobile}
            alt="Retrato de mulher com tranças, ilustrando o cuidado e brilho capilar da linha Renaissance"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}
