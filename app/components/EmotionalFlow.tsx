"use client";

import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Estímulo",
    text: "Algo acontece. Uma palavra, uma situação, uma lembrança ou um acontecimento desperta algo em você.",
  },
  {
    number: "02",
    title: "Emoção",
    text: "Seu corpo e sua mente respondem. A emoção aparece antes mesmo que você consiga explicá-la.",
  },
  {
    number: "03",
    title: "Percepção",
    text: "Você percebe o que está acontecendo dentro de você, sem precisar agir imediatamente.",
  },
  {
    number: "04",
    title: "Escolha",
    text: "Entre o que você sente e o que você faz, existe um espaço onde novas possibilidades podem surgir.",
  },
  {
    number: "05",
    title: "Resposta",
    text: "A partir da percepção, você pode escolher uma resposta mais consciente e alinhada com o que importa.",
  },
];

export default function EmotionalFlow() {
  const [selected, setSelected] = useState(0);

  const resultRef = useRef<HTMLDivElement>(null);

  const currentStep = steps[selected];

  const handleSelect = (index: number) => {
    setSelected(index);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const handlePrevious = () => {
    if (selected > 0) {
      handleSelect(selected - 1);
    }
  };

  const handleNext = () => {
    if (selected < steps.length - 1) {
      handleSelect(selected + 1);
    }
  };

  return (
    <section className="bg-white px-6 py-32 text-[#263238]">
      <div className="mx-auto max-w-6xl">

        {/* CABEÇALHO */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#4F7563]">
            O que acontece dentro de nós
          </p>

          <h2 className="text-3xl font-light leading-tight md:text-5xl">
            Entre o que acontece
            <br />
            e o que fazemos,
            <br />
            <span className="font-medium text-[#315C72]">
              existe um caminho.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#45545A]">
            Nem sempre podemos escolher o que sentimos.
            Mas podemos aprender a perceber o que acontece antes de
            transformar emoção em ação.
          </p>

        </div>

        {/* FLUXO */}
        <div className="relative mt-20 grid grid-cols-1 gap-4 md:grid-cols-5">

          {/* Pontos do caminho */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-[14px] z-20 hidden grid-cols-5 md:grid">
            {steps.map((_, index) => (
              <div key={index} className="flex justify-center">
                <div
                  className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-300 ${
                    selected === index
                      ? "scale-125 bg-[#315C72]"
                      : "bg-[#4F7563]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Cards */}
          {steps.map((step, index) => (
            <button
              key={step.number}
              onClick={() => handleSelect(index)}
              className={`relative z-10 rounded-3xl border p-6 text-left transition-all duration-300 ${
                selected === index
                  ? "border-[#315C72] bg-[#315C72] text-white shadow-xl"
                  : "border-[#DDE5E1] bg-[#F7F8F5] hover:-translate-y-1 hover:shadow-md"
              }`}
            >

              <span
                className={`text-sm font-medium ${
                  selected === index
                    ? "text-[#B8D0C1]"
                    : "text-[#4F7563]"
                }`}
              >
                {step.number}
              </span>

              <h3
                className={`mt-5 text-xl font-medium ${
                  selected === index
                    ? "text-white"
                    : "text-[#315C72]"
                }`}
              >
                {step.title}
              </h3>

            </button>
          ))}

        </div>

        {/* CONTEÚDO SELECIONADO */}
        <div
          ref={resultRef}
          className="mx-auto mt-10 max-w-4xl rounded-3xl bg-[#F7F8F5] p-8 md:p-12"
        >

          <div className="flex flex-col gap-6 md:flex-row md:items-start">

            <div className="text-5xl font-light text-[#B8D0C1]">
              {currentStep.number}
            </div>

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4F7563]">
                {currentStep.title}
              </p>

              <p className="mt-5 text-xl leading-8 text-[#45545A] md:text-2xl">
                {currentStep.text}
              </p>

            </div>

          </div>

          {/* NAVEGAÇÃO */}
          <div className="mt-10 flex items-center justify-between border-t border-[#DDE5E1] pt-6">

            {selected > 0 ? (
              <button
                onClick={handlePrevious}
                className="text-sm text-[#4F7563] transition-colors hover:text-[#315C72]"
              >
                ← Anterior
              </button>
            ) : (
              <span />
            )}

            {selected < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="text-sm font-medium text-[#315C72] transition-colors hover:text-[#4F7563]"
              >
                Próxima →
              </button>
            ) : (
              <span />
            )}

          </div>

        </div>

        {/* FRASE FINAL */}
        <div className="mx-auto mt-20 max-w-3xl text-center">

          <p className="text-2xl font-light leading-relaxed text-[#315C72] md:text-3xl">
            A consciência não elimina a emoção.
            <br />
            Ela cria espaço para escolher o que fazer com ela.
          </p>

        </div>

      </div>
    </section>
  );
}