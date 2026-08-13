import productSerum from "../assets/images/product-serum.webp";
import Container from "./Container";

const PRODUCT = {
  name: "Natural Light Hyaluronic Serum Complex",
  price: "R$ 184,00",
  image: productSerum,
};

function ProductCard() {
  return (
    <article className="flex h-[686px] w-[271.33px] shrink-0 snap-start flex-col items-center gap-6 border-noor-terracotta border-y border-l px-0 pt-[91.45px] pb-[91.45px] text-center last:border-r md:h-[680.46px] md:w-[273.33px] md:border-y-0 md:px-8 md:last:border-r-0 md:gap-0 md:pt-[93.94px] md:pb-[93.94px]">
      <img
        src={PRODUCT.image}
        alt={`Frasco conta-gotas Noorskin ${PRODUCT.name}, 30ml`}
        className="h-[330.16px] w-[271.33px] max-w-none object-cover transition-transform duration-300 hover:scale-105 md:w-[273.33px] md:-mx-8"
        loading="lazy"
        width={220}
        height={280}
      />
      <div className="flex flex-col gap-2 md:mt-8">
        <h3 className="text-lg leading-tight">{PRODUCT.name}</h3>
        <p className="text-lg underline underline-offset-4">{PRODUCT.price}</p>
      </div>
      <button
        type="button"
        className="mt-auto cursor-pointer bg-noor-black px-8 py-3 text-sm text-noor-cream transition-colors duration-200 hover:bg-noor-terracotta-dark"
      >
        Adicionar ao carrinho
      </button>
    </article>
  );
}

export default function LivingInConsciousness() {
  return (
    <section
      aria-labelledby="living-title"
      className="bg-noor-cream pt-16 pb-[120px] md:pt-[120px] md:pb-28"
    >
      <Container className="flex flex-col gap-16 md:flex-row md:items-end md:gap-10">
        <div
          className="flex gap-0 overflow-x-auto snap-x snap-mandatory border-noor-terracotta scrollbar-none md:w-[820px] md:shrink-0 md:border md:overflow-visible"
          role="list"
          aria-label="Produtos da linha Living in Consciousness"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex flex-col gap-[93px] md:w-[500px] md:gap-[83px]">
          <div className="flex flex-col gap-6 md:gap-4">
            <h2
              id="living-title"
              className="w-[min(340px,100%)] font-display font-normal text-[48px] leading-[50px] text-noor-black md:w-auto md:font-light md:text-[64px] md:leading-[68px]"
            >
              Living in Consciousness
            </h2>
            <p className="w-[min(340px,100%)] font-normal text-[24px] leading-[26px] text-noor-brown md:w-auto">
              Uma linha desenvolvida para atuar no seu dia a dia, ajudando
              sua pele a receber os nutrientes e cuidados necessários para
              manter sua saúde, equilíbrio e vitalidade.
            </p>
          </div>
          <p className="w-[229.56px] font-normal text-[16px] leading-[19px] text-noor-brown/80 md:w-[230px]">
            Nossa linha oferece uma poderosa união de ativos para contribuir
            com a sua rotina de cuidados diários com os cabelos e com as
            unhas.
          </p>
        </div>
      </Container>
    </section>
  );
}
