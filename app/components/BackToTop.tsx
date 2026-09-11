"use client";

export default function BackToTop() {
  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="mt-10 rounded-full bg-[#315C72] px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#26495B] hover:shadow-lg"
    >
      Voltar ao início
    </button>
  );
}