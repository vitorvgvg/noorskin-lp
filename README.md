# Noorskin — Landing Page

Landing page da Noorskin, marca de cosméticos naturais focada em nutrição capilar e cuidados com a pele.

Desenvolvida com fidelidade ao design no Figma, mobile-first, com HTML5 semântico e boas práticas de acessibilidade e SEO técnico.

## Stack

- **React** + **Vite**
- **Tailwind CSS v4**
- Fontes customizadas: FreightNeo Pro e Freight Sans

## Seções

- Header com navegação e menu mobile
- Hero — "Renasça com nutrição"
- Living in Consciousness — carrossel de produtos
- Informação Nutricional — accordion
- Banner — "Sua força vem de dentro"
- Avaliações — carrossel de reviews

## Rodando o projeto

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

### Testar no celular

Com o servidor rodando, use:

```bash
npm run dev -- --host
```

E acesse pelo celular (na mesma rede Wi-Fi) o endereço `Network` exibido no terminal.

## Build de produção

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

## Lint

```bash
npm run lint
```
