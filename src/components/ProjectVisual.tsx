import type { CSSProperties } from "react";
import type { ProjectVisual as VisualKind } from "@/data/portfolio";

/**
 * Placeholder artwork drawn with CSS/SVG, used until a real screenshot is set
 * via `image` in src/data/portfolio.ts. Purely decorative.
 */
export default function ProjectVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "pantry":
      return <PantryVisual />;
    case "ocean":
      return <OceanVisual />;
    case "poker":
      return <PokerVisual />;
    case "blackjack":
      return <BlackjackVisual />;
    case "calculator":
      return <CalculatorVisual />;
  }
}

/* ---------- PantryPal: abstract app window ---------- */

const pantryRows = [
  { w: "w-16", status: "bg-good", pill: "w-10" },
  { w: "w-24", status: "bg-warn", pill: "w-8" },
  { w: "w-20", status: "bg-good", pill: "w-10" },
  { w: "w-12", status: "bg-bad", pill: "w-7" },
  { w: "w-20", status: "bg-good", pill: "w-9" },
];

function PantryVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_20%_20%,var(--accent-soft),transparent_60%)] p-5 sm:p-8"
    >
      <div className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-surface shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.6deg]">
        {/* window chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-3 h-2 w-24 rounded-full bg-surface-2" />
        </div>
        <div className="flex">
          {/* sidebar */}
          <div className="hidden w-16 flex-col gap-2 border-r border-line p-3 sm:flex">
            <span className="h-2 w-full rounded-full bg-accent" />
            <span className="h-2 w-4/5 rounded-full bg-surface-2" />
            <span className="h-2 w-full rounded-full bg-surface-2" />
            <span className="h-2 w-3/5 rounded-full bg-surface-2" />
            <span className="h-2 w-4/5 rounded-full bg-surface-2" />
          </div>
          {/* inventory list */}
          <div className="flex-1 space-y-2.5 p-4">
            <span className="mb-1 block h-3 w-20 rounded-full bg-ink/80" />
            {pantryRows.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-md border border-line/70 px-2.5 py-2"
              >
                <span className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${row.status}`} />
                  <span className={`h-2 ${row.w} rounded-full bg-surface-2`} />
                </span>
                <span
                  className={`h-3 ${row.pill} rounded-full ${row.status} opacity-80`}
                />
              </div>
            ))}
          </div>
          {/* recommendation card */}
          <div className="hidden w-32 p-4 pl-0 sm:block">
            <div className="rounded-lg border border-accent/40 bg-accent-soft p-3">
              <span className="spark mb-2 block w-fit text-accent">✦</span>
              <span className="mb-1.5 block h-2 w-full rounded-full bg-accent/50" />
              <span className="mb-1.5 block h-2 w-4/5 rounded-full bg-accent/30" />
              <span className="block h-2 w-3/5 rounded-full bg-accent/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Poker Analyst: felt table with odds readout ---------- */

type PlayingCard = { rank: string; suit: string };

const holeCards: PlayingCard[] = [
  { rank: "A", suit: "♠" },
  { rank: "K", suit: "♥" },
];

const board: (PlayingCard | null)[] = [
  { rank: "Q", suit: "♥" },
  { rank: "J", suit: "♣" },
  { rank: "7", suit: "♦" },
  null,
  null,
];

function Card({
  card,
  className = "",
}: {
  card: PlayingCard;
  className?: string;
}) {
  const red = card.suit === "♥" || card.suit === "♦";
  return (
    <span
      className={`flex h-14 w-10 flex-col justify-between rounded-md bg-white p-1 font-semibold leading-none shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)] sm:h-16 sm:w-11 ${red ? "text-[#c0392b]" : "text-[#1b1b1b]"} ${className}`}
    >
      <span className="text-xs">{card.rank}</span>
      <span className="self-center text-lg">{card.suit}</span>
      <span className="h-2" />
    </span>
  );
}

function PokerVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col items-center justify-center gap-5 overflow-hidden bg-[radial-gradient(ellipse_at_50%_40%,#1f7a4d,#0f4a2e_60%,#082a1b)] p-5"
    >
      {/* board */}
      <div className="flex gap-1.5 sm:gap-2">
        {board.map((card, i) =>
          card ? (
            <Card key={i} card={card} />
          ) : (
            <span
              key={i}
              className="h-14 w-10 rounded-md border border-dashed border-white/30 sm:h-16 sm:w-11"
            />
          ),
        )}
      </div>

      <div className="flex items-end gap-6">
        {/* hole cards fan out on hover */}
        <div className="flex">
          <Card
            card={holeCards[0]}
            className="-rotate-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:-rotate-12"
          />
          <Card
            card={holeCards[1]}
            className="-ml-3 rotate-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12"
          />
        </div>

        {/* odds readout */}
        <div className="rounded-lg bg-black/35 px-3 py-2 text-white backdrop-blur-sm">
          <span className="block text-[10px] uppercase tracking-wider text-white/60">
            Win
          </span>
          <span className="block text-xl font-semibold tabular-nums">
            48.6%
          </span>
          <span className="mt-1 block h-1.5 w-20 overflow-hidden rounded-full bg-white/15">
            <span className="block h-full w-[48.6%] rounded-full bg-[#facc15]" />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Blackjack: dealer and player hands ---------- */

const dealerHand: PlayingCard[] = [{ rank: "9", suit: "♣" }];

const playerHand: PlayingCard[] = [
  { rank: "A", suit: "♦" },
  { rank: "7", suit: "♠" },
  { rank: "3", suit: "♥" },
];

function CardBack() {
  return (
    <span className="h-14 w-10 rounded-md border-[3px] border-white bg-[repeating-linear-gradient(45deg,#7b1e1e_0_4px,#9b2c2c_4px_8px)] shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)] sm:h-16 sm:w-11" />
  );
}

function ScoreBadge({ value }: { value: number }) {
  return (
    <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-semibold tabular-nums text-accent-ink">
      {value}
    </span>
  );
}

function BlackjackVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_20%_80%,var(--accent-soft),transparent_60%)] p-5 sm:p-8"
    >
      <div className="flex w-full max-w-xs flex-col gap-4 rounded-2xl border border-line bg-surface p-4 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)]">
        {/* dealer: one card up, hole card down */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            {dealerHand.map((card, i) => (
              <Card key={i} card={card} />
            ))}
            <CardBack />
          </div>
          <span className="flex items-center gap-2 text-xs font-medium text-muted">
            Dealer <ScoreBadge value={9} />
          </span>
        </div>

        <span className="h-px bg-line" />

        {/* player: soft 21, cards spread on hover */}
        <div className="flex items-center justify-between">
          <div className="flex">
            {playerHand.map((card, i) => (
              <Card
                key={i}
                card={card}
                className={`transition-all duration-500 ${i > 0 ? "-ml-4 group-hover:ml-1.5" : ""} group-hover:-translate-y-1`}
              />
            ))}
          </div>
          <span className="flex items-center gap-2 text-xs font-medium text-muted">
            Player <ScoreBadge value={21} />
          </span>
        </div>

        {/* controls */}
        <div className="flex gap-1.5">
          <span className="flex h-7 flex-1 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-ink">
            Hit
          </span>
          <span className="flex h-7 flex-1 items-center justify-center rounded-full bg-surface-2 text-xs font-semibold text-ink">
            Stand
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------- Calculator: keypad with display ---------- */

// Same button order as Calculator.py
const calcKeys = [
  "1",
  "2",
  "3",
  "+",
  "4",
  "5",
  "6",
  "−",
  "7",
  "8",
  "9",
  ".",
  "0",
  "×",
  "÷",
  "=",
];

function CalculatorVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_80%_80%,var(--accent-soft),transparent_60%)] p-5 sm:p-8"
    >
      <div className="w-full max-w-[15rem] rounded-2xl border border-line bg-surface p-3 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[0.8deg]">
        {/* display */}
        <div className="mb-2.5 flex h-14 flex-col items-end justify-center rounded-lg bg-ink px-3 font-mono leading-tight text-surface">
          <span className="text-[10px] text-surface/60">12×7+0.5</span>
          <span className="text-xl tabular-nums">84.5</span>
        </div>
        {/* keypad */}
        <div className="grid grid-cols-4 gap-1.5">
          {calcKeys.map((key) => {
            const op = "+−×÷".includes(key);
            const eq = key === "=";
            return (
              <span
                key={key}
                className={`flex h-8 items-center justify-center rounded-md text-sm font-medium ${eq ? "bg-accent text-accent-ink" : op ? "bg-accent-soft text-accent" : "bg-surface-2 text-ink"}`}
              >
                {key}
              </span>
            );
          })}
        </div>
        <span className="mt-1.5 flex h-7 items-center justify-center rounded-md bg-surface-2 text-xs font-medium text-muted">
          Clear
        </span>
      </div>
    </div>
  );
}

/* ---------- Plastic pollution: drifting particles ---------- */

// Deterministic pseudo-random values so server and client render the same.
function seeded(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

const plasticColors = ["#f5d0c5", "#fef3c7", "#e0f2fe", "#fbcfe8", "#f1f5f9"];

const particles = Array.from({ length: 22 }, (_, i) => ({
  left: `${6 + seeded(i) * 88}%`,
  top: `${22 + seeded(i + 40) * 30}%`,
  size: 4 + Math.round(seeded(i + 80) * 8),
  round: seeded(i + 120) > 0.5,
  color: plasticColors[i % plasticColors.length],
  dur: `${7 + seeded(i + 160) * 6}s`,
  delay: `${-seeded(i + 200) * 10}s`,
  sway: `${Math.round((seeded(i + 240) - 0.5) * 40)}px`,
  fall: `${60 + Math.round(seeded(i + 280) * 80)}px`,
}));

const sediment = Array.from({ length: 34 }, (_, i) => ({
  left: `${seeded(i + 320) * 100}%`,
  bottom: `${seeded(i + 360) * 16}px`,
  w: 4 + Math.round(seeded(i + 400) * 10),
  h: 3 + Math.round(seeded(i + 440) * 4),
  rot: `${Math.round(seeded(i + 480) * 180)}deg`,
  color: plasticColors[(i + 2) % plasticColors.length],
}));

function OceanVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#1e5a7a] via-[#123e5c] to-[#0a1f33]"
    >
      {/* light rays */}
      <div className="absolute inset-0 bg-[conic-gradient(from_200deg_at_30%_-10%,transparent_0deg,rgba(255,255,255,0.08)_12deg,transparent_24deg,rgba(255,255,255,0.05)_40deg,transparent_55deg)]" />

      {/* surface wave */}
      <div className="absolute inset-x-0 top-[12%] h-6 overflow-hidden">
        <svg
          className="wave h-full w-[200%]"
          viewBox="0 0 800 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12 Q50 0 100 12 T200 12 T300 12 T400 12 T500 12 T600 12 T700 12 T800 12 V24 H0Z"
            fill="rgba(255,255,255,0.12)"
          />
        </svg>
      </div>

      {/* drifting pieces */}
      {particles.map((p, i) => (
        <span
          key={i}
          className={`plastic absolute ${p.round ? "rounded-full" : "rounded-[2px]"} transition-[filter] duration-500 group-hover:brightness-125`}
          style={
            {
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.round ? p.size : p.size * 0.6,
              background: p.color,
              "--dur": p.dur,
              "--delay": p.delay,
              "--sway": p.sway,
              "--fall": p.fall,
            } as CSSProperties
          }
        />
      ))}

      {/* accumulation on the sea floor */}
      <div className="absolute inset-x-0 bottom-0 h-10">
        {sediment.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-[2px] opacity-80"
            style={{
              left: s.left,
              bottom: s.bottom,
              width: s.w,
              height: s.h,
              background: s.color,
              transform: `rotate(${s.rot})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
