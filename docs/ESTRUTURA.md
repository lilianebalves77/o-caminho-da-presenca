# Estrutura do Projeto — O Caminho da Presença

## 1. Visão geral

O projeto "O Caminho da Presença" é uma aplicação web voltada à inteligência emocional e ao desenvolvimento da presença no cotidiano.

A aplicação foi construída com Next.js, React, TypeScript e Tailwind CSS.

A estrutura foi organizada para separar a página principal, componentes reutilizáveis, arquivos estáticos e documentação.

---

## 2. Tecnologias

- Next.js 16.3.2
- React 19.2.8
- TypeScript
- Tailwind CSS 4
- ESLint 9

---

## 3. Estrutura principal

```text
O caminho da presença/
│
├── app/
│   ├── components/
│   │   ├── BackToTop.tsx
│   │   ├── BrainVisual.tsx
│   │   ├── EmotionalFlow.tsx
│   │   ├── Navigation.tsx
│   │   ├── ReactionExperience.tsx
│   │   ├── ResponsePause.tsx
│   │   └── ScrollIndicator.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── docs/
│   ├── CONCEITO.md
│   ├── ESTRUTURA.md
│   └── UX-UI.md
│
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md