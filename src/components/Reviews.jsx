import { useState } from "react";
import Container from "./Container";

const REVIEW_TEXT =
  "Nutricosméticos são suplementos orais que fornecem nutrientes essenciais para a saúde da pele, cabelos e unhas. Seus micronutrientes auxiliam na formação de colágeno e oferecem proteção antioxidante contra radicais livres, atuando de forma concentrada para preservar sua beleza natural.";

const NAMES = [
  "Maria",
  "Camila",
  "Beatriz",
  "Fernanda",
  "Juliana",
  "Patrícia",
  "Aline",
  "Larissa",
];

const REVIEWS = NAMES.map((name, i) => ({
  id: i,
  name,
  rating: 5,
  text: REVIEW_TEXT,
}));

const PAGE_SIZE = 2;
const PAGE_COUNT = Math.ceil(REVIEWS.length / PAGE_SIZE);

function StarIcon({ className = "" }) {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 26 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.5413 0L15.5018 9.11175H25.0825L17.3316 14.7431L20.2922 23.8549L12.5413 18.2235L4.79034 23.8549L7.75093 14.7431L1.43051e-05 9.11175H9.58067L12.5413 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowLeftIcon({ className = "" }) {
  return (
    <svg
      width="40"
      height="15"
      viewBox="0 0 40 15"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M0.292893 6.6569C-0.0976295 7.04743 -0.0976296 7.68059 0.292892 8.07112L6.65685 14.4351C7.04738 14.8256 7.68054 14.8256 8.07107 14.4351C8.46159 14.0446 8.46159 13.4114 8.07107 13.0209L2.41422 7.36401L8.07107 1.70716C8.46159 1.31663 8.46159 0.683468 8.07107 0.292943C7.68054 -0.0975813 7.04738 -0.0975813 6.65685 0.292943L0.292893 6.6569ZM39.3488 7.36401L39.3488 6.36401L1 6.36401L1 7.36401L1 8.36401L39.3488 8.36401L39.3488 7.36401Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRightIcon({ className = "" }) {
  return (
    <svg
      width="40"
      height="15"
      viewBox="0 0 40 15"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M39.0559 8.07112C39.4464 7.6806 39.4464 7.04743 39.0559 6.65691L32.6919 0.292946C32.3014 -0.0975785 31.6682 -0.0975785 31.2777 0.292946C30.8872 0.68347 30.8872 1.31664 31.2777 1.70716L36.9345 7.36401L31.2777 13.0209C30.8872 13.4114 30.8872 14.0446 31.2777 14.4351C31.6682 14.8256 32.3014 14.8256 32.6919 14.4351L39.0559 8.07112ZM0 7.36401V8.36401H38.3488V7.36401V6.36401H0V7.36401Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span aria-hidden="true" className="flex items-center gap-1 text-noor-brown">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} />
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex items-center gap-3 text-sm">
        <Stars />
        <span className="sr-only">5 de 5 estrelas.</span>
        <span className="underline underline-offset-4">{review.name}</span>
      </div>
      <p className="text-base leading-relaxed text-noor-brown">
        {review.text}
      </p>
    </article>
  );
}

export default function Reviews() {
  const [page, setPage] = useState(0);

  const goTo = (index) => setPage((index + PAGE_COUNT) % PAGE_COUNT);

  return (
    <section
      aria-labelledby="reviews-title"
      className="bg-noor-cream py-16 md:py-[120px]"
    >
      <Container>
        <h2
          id="reviews-title"
          className="mb-8 border-b border-noor-terracotta pb-6 font-display text-4xl text-noor-black"
        >
          Avaliações <span className="text-lg align-middle">5/5</span>
        </h2>

        <div className="overflow-hidden" aria-live="polite">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: PAGE_COUNT }, (_, p) => (
              <div
                key={p}
                className="grid w-full shrink-0 grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
              >
                {REVIEWS.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE).map(
                  (review) => (
                    <ReviewCard key={review.id} review={review} />
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 border-t border-noor-terracotta pt-6">
          <button
            type="button"
            aria-label="Avaliação anterior"
            onClick={() => goTo(page - 1)}
            className="cursor-pointer text-noor-black transition-colors duration-200 hover:text-noor-terracotta"
          >
            <ArrowLeftIcon />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: PAGE_COUNT }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para o grupo de avaliações ${i + 1}`}
                aria-current={page === i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full border border-noor-brown transition-colors duration-200 ${
                  page === i ? "bg-noor-brown" : "bg-transparent"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Próxima avaliação"
            onClick={() => goTo(page + 1)}
            className="cursor-pointer text-noor-black transition-colors duration-200 hover:text-noor-terracotta"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </Container>
    </section>
  );
}
