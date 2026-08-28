import { useState, useRef } from "react";

const EMOTIONS = [
  { key: "happy", label: "Happy", yes: 0.8 },
  { key: "sad", label: "Sad", yes: 0.35 },
  { key: "angry", label: "Angry", yes: 0.25 },
  { key: "embarrassed", label: "Embarrassed", yes: 0.4 },
  { key: "scared", label: "Scared", yes: 0.2 },
];

const YES_LINES = [
  "Yes — and you already knew that.",
  "Yes, obviously.",
  "The mouse says yes. Trust the mouse.",
  "Yes. Go on, then.",
  "Absolutely. Don't overthink it.",
  "Yes, that's the way.",
  "Signs point to a confident yes.",
  "Yes — the cheese has spoken.",
  "Yes, but bring snacks just in case.",
  "Yes. The whiskers never lie.",
];

const NO_LINES = [
  "No. There's another way.",
  "No, and you knew that too.",
  "The mouse says no. Sorry.",
  "No — maybe ask again later.",
  "Absolutely not.",
  "No, that's not it.",
  "Signs point to no.",
  "No. The cheese disagrees.",
  "No. Even the crumbs said no.",
  "No, but nice try.",
];

function Face({ type, active }) {
  const stroke = active ? "#1B1230" : "#C9B8EC";
  const common = { stroke, strokeWidth: 3.5, strokeLinecap: "round", fill: "none" };
  return (
    <svg viewBox="0 0 64 64" width="30" height="30" aria-hidden="true">
      <circle cx="14" cy="10" r="8" fill={active ? "#F2C14E" : "#3A2A5C"} />
      <circle cx="50" cy="10" r="8" fill={active ? "#F2C14E" : "#3A2A5C"} />
      <circle cx="32" cy="34" r="24" fill={active ? "#F2C14E" : "#3A2A5C"} />
      {type === "happy" && (
        <>
          <path d="M20 30 Q24 24 28 30" {...common} />
          <path d="M36 30 Q40 24 44 30" {...common} />
          <path d="M22 40 Q32 50 42 40" {...common} />
        </>
      )}
      {type === "sad" && (
        <>
          <path d="M19 27 Q24 32 29 28" {...common} />
          <path d="M35 28 Q40 32 45 27" {...common} />
          <path d="M23 45 Q32 37 41 45" {...common} />
        </>
      )}
      {type === "angry" && (
        <>
          <path d="M18 24 L29 30" {...common} />
          <path d="M46 24 L35 30" {...common} />
          <path d="M23 44 Q32 38 41 44" {...common} />
        </>
      )}
      {type === "embarrassed" && (
        <>
          <circle cx="24" cy="31" r="2.6" fill={stroke} />
          <circle cx="40" cy="31" r="2.6" fill={stroke} />
          <path d="M25 42 L39 42" {...common} />
          <circle cx="18" cy="38" r="4" fill={active ? "#E85D9E" : "#5A4580"} opacity="0.7" />
          <circle cx="46" cy="38" r="4" fill={active ? "#E85D9E" : "#5A4580"} opacity="0.7" />
        </>
      )}
      {type === "scared" && (
        <>
          <circle cx="24" cy="30" r="5" {...common} />
          <circle cx="40" cy="30" r="5" {...common} />
          <path d="M24 44 Q32 40 40 44 Q32 50 24 44" {...common} />
        </>
      )}
    </svg>
  );
}

const SPIN_DURATION = 750;
const SPIN_TICK = 55;
const SPIN_WORDS = ["yes", "no", "maybe", "sure", "later"];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [spinWord, setSpinWord] = useState(null);
  const [spinKey, setSpinKey] = useState(0);
  const [rolling, setRolling] = useState(false);
  const [resultType, setResultType] = useState(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  function toggleEmotion(key) {
    setSelected((prev) => (prev === key ? null : key));
  }

  function roll() {
    if (rolling) return;
    setRolling(true);
    setAnswer(null);
    setResultType(null);
    setSpinWord(SPIN_WORDS[Math.floor(Math.random() * SPIN_WORDS.length)]);
    setSpinKey((prev) => prev + 1);

    intervalRef.current = setInterval(() => {
      setSpinWord(SPIN_WORDS[Math.floor(Math.random() * SPIN_WORDS.length)]);
      setSpinKey((prev) => prev + 1);
    }, SPIN_TICK);

    const config = EMOTIONS.find((e) => e.key === selected);
    const yesChance = config ? config.yes : 0.5;

    timeoutRef.current = setTimeout(() => {
      clearInterval(intervalRef.current);
      const isYes = Math.random() < yesChance;
      const pool = isYes ? YES_LINES : NO_LINES;
      const line = pool[Math.floor(Math.random() * pool.length)];
      setAnswer(line);
      setResultType(isYes ? "yes" : "no");
      setRolling(false);
    }, SPIN_DURATION);
  }

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;1,600&family=Quicksand:wght@500;600;700&display=swap');
        @keyframes spin8ball {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(200deg) scale(1.04); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slotRoll {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slot-word {
          display: inline-block;
          min-width: 58px;
          animation: slotRoll 0.055s ease-out;
          color: #F2C14E;
        }
        .answer-in { animation: fadeIn 0.45s ease-out; }
        .emo-btn { transition: transform 0.15s ease, background 0.15s ease; }
        .emo-btn:hover { transform: translateY(-3px); }
        .emo-btn:active { transform: translateY(0) scale(0.95); }
        .roll-label {
          transition: color 0.2s ease, gap 0.2s ease, opacity 0.2s ease;
        }
        .roll-label:not([aria-disabled="true"]):hover {
          color: #F2C14E;
          gap: 12px;
        }
        .roll-label:not([aria-disabled="true"]):focus-visible {
          outline: 2px solid #F2C14E;
          outline-offset: 6px;
          border-radius: 4px;
        }
        .roll-label:not([aria-disabled="true"]):active {
          transform: translateY(1px);
        }
      `}</style>

      <div style={styles.frame}>
        <p style={styles.eyebrow}>askmouse</p>

        <div
          style={{
            ...styles.orb,
            boxShadow:
              resultType === "yes"
                ? "0 0 0 3px #6FCF97 inset"
                : resultType === "no"
                ? "0 0 0 3px #E8836B inset"
                : "0 0 0 3px rgba(242,193,78,0.35) inset",
          }}
        >
          <div style={styles.crater1} />
          <div style={styles.crater2} />
          <div style={styles.crater3} />
          <div style={styles.orbInner}>
            {rolling && (
              <p style={styles.thinking}>
                The mouse says <span key={spinKey} className="slot-word">{spinWord}</span>.
              </p>
            )}
            {!rolling && answer && (
              <p key={answer} className="answer-in" style={styles.answerText}>
                {answer}
              </p>
            )}
            {!rolling && !answer && (
              <p style={styles.placeholder}>Think of your question,<br />then roll.</p>
            )}
          </div>
        </div>

        <span
          role="button"
          tabIndex={rolling ? -1 : 0}
          onClick={roll}
          onKeyDown={(event) => {
            if (!rolling && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              roll();
            }
          }}
          aria-disabled={rolling}
          aria-label="Roll for an answer"
          className="roll-label"
          style={{ ...styles.rollLabel, opacity: rolling ? 0.6 : 1 }}
        >
          <span>roll</span>
        </span>

        <div style={styles.emoRow}>
          {EMOTIONS.map((e) => {
            const active = selected === e.key;
            return (
              <button
                key={e.key}
                onClick={() => toggleEmotion(e.key)}
                className="emo-btn"
                aria-pressed={active}
                aria-label={e.label}
                title={e.label}
                style={{
                  ...styles.emoBtn,
                  background: active ? "#F2C14E" : "transparent",
                  borderColor: active ? "#F2C14E" : "#4A3A72",
                }}
              >
                <Face type={e.key} active={active} />
              </button>
            );
          })}
        </div>

        <p style={styles.hint}>
          {selected
            ? `Feeling ${EMOTIONS.find((e) => e.key === selected).label.toLowerCase()} tips the odds.`
            : "Pick a feeling to tip the odds, or leave it even."}
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 16px",
    fontFamily: "'Quicksand', sans-serif",
  },
  frame: {
    width: "100%",
    maxWidth: "360px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eyebrow: {
    color: "#8A78B8",
    fontSize: "13px",
    letterSpacing: "0.18em",
    fontWeight: 600,
    marginBottom: "22px",
  },
  orb: {
    position: "relative",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background: "radial-gradient(circle at 35% 30%, #3A2A5C, #251840)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  orbInner: {
    width: "170px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 8px",
  },
  crater1: {
    position: "absolute",
    top: "28px",
    left: "36px",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.18)",
  },
  crater2: {
    position: "absolute",
    bottom: "34px",
    right: "30px",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.18)",
  },
  crater3: {
    position: "absolute",
    bottom: "50px",
    left: "26px",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.15)",
  },
  answerText: {
    fontFamily: "'Fraunces', serif",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: 1.35,
    color: "#F5F0FF",
    margin: 0,
  },
  placeholder: {
    fontFamily: "'Fraunces', serif",
    fontStyle: "italic",
    fontSize: "17px",
    lineHeight: 1.4,
    color: "#7C6BA3",
    margin: 0,
  },
  thinking: {
    fontFamily: "'Fraunces', serif",
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "17px",
    lineHeight: 1.35,
    color: "#5A4A80",
    margin: 0,
  },
  rollLabel: {
    marginTop: "28px",
    background: "transparent",
    color: "#F5F0FF",
    border: "none",
    borderBottom: "1px solid #4A3A72",
    borderRadius: 0,
    padding: "8px 0 6px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    cursor: "pointer",
  },
  emoRow: {
    display: "flex",
    gap: "10px",
    marginTop: "30px",
  },
  emoBtn: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid #4A3A72",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  hint: {
    marginTop: "16px",
    color: "#8A78B8",
    fontSize: "13px",
    textAlign: "center",
  },
};