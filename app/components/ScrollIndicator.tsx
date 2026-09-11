"use client";

export default function ScrollIndicator() {
  const handleScroll = () => {
    document.getElementById("manifesto")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleScroll}
      className="group text-center"
      aria-label="Continuar para a próxima seção"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-[#4F7563] transition group-hover:text-[#315C72]">
        Continue
      </p>

      <div className="mx-auto mt-3 h-8 w-px bg-[#4F7563]/40 transition-all duration-300 group-hover:h-10 group-hover:bg-[#315C72]" />
    </button>
  );
}