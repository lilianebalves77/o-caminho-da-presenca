"use client";

import { useState } from "react";

const links = [
  { label: "Manifesto", target: "manifesto" },
  { label: "Caminho", target: "caminho" },
  { label: "Experimente", target: "experimente" },
  { label: "Pausa", target: "pausa" },
  { label: "Fluxo", target: "fluxo" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
        {/* DESKTOP */}
        <div className="hidden rounded-full bg-white/90 px-3 py-2 shadow-lg backdrop-blur md:block">
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleNavigation(link.target)}
                className="whitespace-nowrap rounded-full px-4 py-2 text-sm text-[#315C72] transition hover:bg-[#F7F8F5]"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE - BOTÃO */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
            className="rounded-full bg-white/90 px-4 py-3 text-xl text-[#315C72] shadow-lg backdrop-blur"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE - MENU ABERTO */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm md:hidden">
          <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-5 shadow-2xl">
            
            {/* CABEÇALHO */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium tracking-wide text-[#315C72]">
              
              </span>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu"
                className="flex h-11 w-11 items-center justify-center rounded-full text-xl text-[#315C72] transition hover:bg-[#F7F8F5]"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.target}
                  type="button"
                  onClick={() => handleNavigation(link.target)}
                  className="min-h-[48px] w-full rounded-2xl px-5 py-3 text-left text-base font-medium text-[#315C72] transition hover:bg-[#F7F8F5]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}