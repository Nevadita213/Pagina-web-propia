type InteractiveJellyfishProps = {
  focusedField?: string;
  hasTyped?: boolean;
  completedFields?: number;
  hasValidationError?: boolean;
  isSubmitting?: boolean;
  isSubmitted?: boolean;
};

export function InteractiveJellyfish({
  focusedField = "",
  hasTyped = false,
  completedFields = 0,
  hasValidationError = false,
  isSubmitting = false,
  isSubmitted = false,
}: InteractiveJellyfishProps) {
  const mood = hasValidationError
    ? "error"
    : isSubmitting
      ? "sending"
      : isSubmitted
        ? "sent"
        : completedFields >= 5
          ? "ready"
          : hasTyped
            ? "typing"
            : focusedField
              ? "focus"
              : "idle";
  const statusText =
    mood === "error"
      ? "Falta algún dato."
      : mood === "ready"
        ? "Listo para enviar."
        : mood === "sent"
          ? "Propuesta preparada."
          : mood === "typing"
            ? "Buena idea."
            : "Estoy atento a tu idea.";

  return (
    <div className={`interactive-jellyfish interactive-jellyfish--${mood}`} aria-hidden>
      <div className="interactive-jellyfish__halo" />
      <svg
        className="interactive-jellyfish__svg"
        viewBox="0 0 260 260"
        role="img"
        focusable="false"
      >
        <defs>
          <radialGradient id="jellyCore" cx="42%" cy="28%" r="78%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
            <stop offset="30%" stopColor="rgba(21,200,200,0.38)" />
            <stop offset="64%" stopColor="rgba(102,112,255,0.24)" />
            <stop offset="100%" stopColor="rgba(255,107,176,0.13)" />
          </radialGradient>
          <linearGradient id="jellyNeon" x1="36" x2="224" y1="54" y2="152">
            <stop offset="0%" stopColor="rgba(21,200,200,0.96)" />
            <stop offset="45%" stopColor="rgba(99,122,255,0.76)" />
            <stop offset="100%" stopColor="rgba(255,107,176,0.78)" />
          </linearGradient>
          <filter id="jellyGlow" x="-40%" y="-40%" width="180%" height="190%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              result="glow"
              values="0 0 0 0 0.08 0 0 0 0 0.78 0 0 0 0 0.86 0 0 0 0.52 0"
            />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="interactive-jellyfish__float">
          <g className="interactive-jellyfish__particles">
            <circle cx="72" cy="64" r="2.2" />
            <circle cx="194" cy="74" r="1.8" />
            <circle cx="52" cy="134" r="1.5" />
            <circle cx="211" cy="142" r="1.7" />
            <circle cx="162" cy="39" r="1.4" />
          </g>
          <path
            className="interactive-jellyfish__outer"
            d="M48 133C51 76 87 39 130 39s79 37 82 94c-18 15-47 23-82 23s-64-8-82-23Z"
            fill="rgba(21,200,200,0.045)"
            stroke="url(#jellyNeon)"
            strokeWidth="1.7"
            filter="url(#jellyGlow)"
          />
          <path
            className="interactive-jellyfish__dome"
            d="M62 126C66 82 94 56 130 56s64 26 68 70c-15 11-39 17-68 17s-53-6-68-17Z"
            fill="url(#jellyCore)"
            stroke="rgba(241,246,248,0.2)"
            strokeWidth="1"
          />
          <path
            className="interactive-jellyfish__rim"
            d="M62 126c18 14 115 14 136 0"
            fill="none"
            stroke="url(#jellyNeon)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            className="interactive-jellyfish__circuit"
            d="M91 96c15-14 62-14 78 0M101 115c12 7 47 7 59 0"
            fill="none"
            stroke="rgba(241,246,248,0.22)"
            strokeLinecap="round"
            strokeWidth="1.4"
          />
          <g className="interactive-jellyfish__face">
            <circle className="interactive-jellyfish__eye" cx="115" cy="102" r="2.8" fill="rgba(241,246,248,0.9)" />
            <circle className="interactive-jellyfish__eye" cx="145" cy="102" r="2.8" fill="rgba(241,246,248,0.9)" />
            <path
              className="interactive-jellyfish__mouth"
              d="M121 118c5 3 13 3 18 0"
              fill="none"
              stroke="rgba(241,246,248,0.68)"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </g>
          <g className="interactive-jellyfish__tentacles" fill="none" strokeLinecap="round">
            <path d="M76 145c-16 22 10 39-4 67" />
            <path d="M96 151c-12 20 8 38-5 58" />
            <path d="M115 153c-8 26 6 44-3 66" />
            <path d="M132 154c7 25-6 43 2 65" />
            <path d="M150 153c13 21-8 39 6 59" />
            <path d="M171 148c17 23-12 39 5 66" />
          </g>
        </g>
      </svg>
      <div className="interactive-jellyfish__status">{statusText}</div>
    </div>
  );
}
