export const SCROLL_STATES = [
  // 0 — Hero: far right, phone angled showing screen
  {
    id: "hero",
    position: [1.1, 0.0, 0.0],
    rotation: [0.08, -0.4, 0.03],
    scale: 2.2,
  },
  // 1 — AI Agents: far right, rotated to show screen
  {
    id: "agents",
    position: [1.2, 0.0, 0.4],
    rotation: [0.04, 0.2, -0.02],
    scale: 2.1,
  },
  // 2 — Features: right side, front-facing
  {
    id: "features",
    position: [0.85, -0.05, 0.3],
    rotation: [0.0, -0.12, 0.0],
    scale: 1.9,
  },
  // 3 — Stats: center, top-down angle
  {
    id: "stats",
    position: [0.0, 0.1, 0.4],
    rotation: [Math.PI / 3, 0.0, Math.PI / 6],
    scale: 1.8,
  },
  // 4 — Pricing: right side, back view
  {
    id: "pricing",
    position: [0.8, -0.05, 0.0],
    rotation: [-0.08, Math.PI - 0.4, 0.1],
    scale: 1.8,
  },
  // 5 — CTA: left side, front-facing
  {
    id: "cta",
    position: [-0.85, -0.05, 0.2],
    rotation: [0.03, -0.15, -0.01],
    scale: 2.1,
  },
]

export const MOBILE_SCALE_FACTOR = 1.1
export const MOBILE_POSITION_FACTOR = 0.15
