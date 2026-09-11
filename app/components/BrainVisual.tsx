"use client";

export default function BrainVisual() {
  return (
    <div className="relative flex h-[340px] w-full items-center justify-center overflow-hidden">

      {/* Aura suave */}
      <div
        className="
          absolute
          h-64
          w-64
          rounded-full
          bg-pink-300/20
          blur-3xl
          animate-pulse
        "
      />

      {/* Cérebro */}
      <div className="brain-float relative">

        <div
          className="
            text-[150px]
            leading-none
            md:text-[180px]
            drop-shadow-[0_8px_20px_rgba(236,72,153,0.25)]
          "
        >
          🧠
        </div>

      </div>
    </div>
  );
}