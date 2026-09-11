"use client";

import { useState } from "react";

export default function ResponsePause() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[#315C72] px-6 py-32 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#B8D0C1]">
          Uma pausa
        </p>

        <h2 className="mt-6 text-3xl font-light leading-tight md:text-5xl">
          Antes de responder,
          <br />
          experimente criar um espaço.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
          Nem toda emoção precisa se transformar imediatamente em uma ação.
          Às vezes, alguns segundos já mudam a forma como percebemos uma
          situação.
        </p>
<button
  onClick={() => setPaused(!paused)}
  className="mt-12 w-full max-w-xs rounded-full bg-white px-8 py-4 text-[#315C72] transition hover:scale-105 md:w-auto"
>
  {paused ? "Continuar" : "Fazer uma pausa"}
</button>

        {paused && (
          <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white/10 p-8">

            <p className="text-2xl font-light leading-relaxed">
              Respire.
              <br />
              Perceba o que está acontecendo.
              <br />
              Não precisa decidir agora.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}