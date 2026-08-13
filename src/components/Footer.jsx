import Container from "./Container";

const NAV_ITEMS = ["Produtos", "Nossa Essência", "Blog", "Contato", "Prescritor"];

export default function Footer() {
  return (
    <footer className="bg-noor-brown py-10 text-noor-cream">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="font-display text-xl">noorskin</span>

        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="cursor-pointer transition-colors duration-200 hover:text-noor-terracotta"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-noor-cream/70">
          © {new Date().getFullYear()} noorskin. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
