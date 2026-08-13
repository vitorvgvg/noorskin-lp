import { useEffect, useState } from "react";
import Container from "./Container";

const ITEMS = [
  {
    id: "tabela",
    title: "Tabela nutricional",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Vivamus non lacus eget nunc sagittis sagittis.",
  },
  {
    id: "vitaminas",
    title: "Vitaminas",
    content: [
      "Complexo B: auxilia no metabolismo e na saúde da pele.",
      "Biotina: contribui para cabelo e pele.",
      "Vitamina C: auxilia na formação de colágeno.",
      "Vitamina E: ação antioxidante.",
    ],
  },
  {
    id: "minerais",
    title: "Minerais",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Curabitur euismod, nisl eget consectetur sagittis.",
  },
  {
    id: "aminoacidos",
    title: "Aminoácidos",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.",
  },
  {
    id: "ativos",
    title: "Ativos especiais",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam.",
  },
];

function AccordionItem({ item, isOpen, onToggle }) {
  const panelId = `accordion-panel-${item.id}`;
  const buttonId = `accordion-button-${item.id}`;

  return (
    <div className="border-t border-noor-terracotta last:border-b">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full cursor-pointer items-center justify-between py-[21px] text-left text-lg md:h-[68px] md:py-0"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="md:h-[36px] md:leading-[36px]">{item.title}</span>
          <span className="text-noor-terracotta" aria-hidden="true">
            {isOpen ? (
              <MinusIcon />
            ) : (
              <PlusIcon />
            )}
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {Array.isArray(item.content) ? (
            <ul className="flex flex-col gap-1 pb-6 font-sans text-[16px] font-normal leading-[18px] tracking-normal text-noor-cream/90">
              {item.content.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          ) : (
            <p className="pb-6 font-sans text-[16px] font-normal leading-[18px] tracking-normal text-noor-cream/90">
              {item.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 2V16M2 9H16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 9H16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function NutritionalInfo() {
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      setOpenId("vitaminas");
    }
  }, []);

  return (
    <section
      aria-labelledby="nutrition-title"
      className="bg-noor-black py-16 text-noor-cream md:py-28"
    >
      <Container className="flex justify-end">
      <div className="flex flex-col gap-6 md:w-[600px]">
        <h2
          id="nutrition-title"
          className="font-display font-normal text-[48px] leading-[50px] md:w-[550px] md:font-light md:text-[64px] md:leading-[68px]"
        >
          Informação Nutricional
        </h2>
        <p className="text-base">
          Porções por embalagem: 30 (120 cápsulas)
        </p>

        <div>
          {ITEMS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() =>
                setOpenId((current) => (current === item.id ? null : item.id))
              }
            />
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
