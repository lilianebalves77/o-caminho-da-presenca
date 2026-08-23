"use client";

import { useState } from "react";

const options = {
  reagir: {
    title: "Reagir",
    text: "A emoção assume o comando antes que você tenha tempo de perceber o que está acontecendo.",
  },
  evitar: {
    title: "Evitar",
    text: "Você escolhe se afastar da situação. Às vezes, uma pausa também pode ser uma forma de cuidado.",
  },
  perceber: {
    title: "Perceber",
    text: "Você reconhece o que está sentindo, cria um espaço e então decide como quer responder.",
  },
};

export default function ReactionExperience() {
  const [selected, setSelected] =
    useState<keyof typeof options>("perceber");

  const currentOption = options[selected];

  return (
    <section className="bg-[#315C72] px-6 py-32 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Cabeçalho */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#B8D0C1]">
            Experimente
          </p>

          <h2 className="text-3xl font-light leading-tight md:text-5xl">
            Antes de responder,
            <br />
            existe um momento.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/75">
            Imagine que alguém diz algo que desperta uma reação em você.
            O que acontece nesse espaço?
          </p>
        </div>

        {/* Opções */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {/* Reagir */}
          <button
            onClick={() => setSelected("reagir")}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 ${
              selected === "reagir"
                ? "border-white bg-white text-[#315C72] shadow-xl"
                : "border-white/20 bg-transparent hover:bg-white/10"
            }`}
          >
            <span
              className={
                selected === "reagir"
                  ? "text-[#4F7563]"
                  : "text-[#B8D0C1]"
              }
            >
              01
            </span>

            <h3 className="mt-5 text-2xl font-medium">
              Reagir
            </h3>
          </button>

          {/* Evitar */}
          <button
            onClick={() => setSelected("evitar")}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 ${
              selected === "evitar"
                ? "border-white bg-white text-[#315C72] shadow-xl"
                : "border-white/20 bg-transparent hover:bg-white/10"
            }`}
          >
            <span
              className={
                selected === "evitar"
                  ? "text-[#4F7563]"
                  : "text-[#B8D0C1]"
              }
            >
              02
            </span>

            <h3 className="mt-5 text-2xl font-medium">
              Evitar
            </h3>
          </button>

          {/* Perceber */}
          <button
            onClick={() => setSelected("perceber")}
            className={`rounded-3xl border p-8 text-left transition-all duration-300 ${
              selected === "perceber"
                ? "border-white bg-white text-[#315C72] shadow-xl"
                : "border-white/20 bg-transparent hover:bg-white/10"
            }`}
          >
            <span
              className={
                selected === "perceber"
                  ? "text-[#4F7563]"
                  : "text-[#B8D0C1]"
              }
            >
              03
            </span>

            <h3 className="mt-5 text-2xl font-medium">
              Perceber
            </h3>
          </button>

        </div>

        {/* Resultado */}
        <div className="mt-10 rounded-3xl bg-white p-8 text-[#263238] transition-all duration-300 md:p-12">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4F7563]">
            {currentOption.title}
          </p>

          <p className="mt-5 max-w-3xl text-xl leading-8 md:text-2xl">
            {currentOption.text}
          </p>

        </div>

      </div>
    </section>
  );
}