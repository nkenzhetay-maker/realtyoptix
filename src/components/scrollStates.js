export const SCROLL_STATES = [
  // 0 — Hero: right side, screen facing user
  {
    id: "hero",
    position: [1.1, 0.0, 0.0],
    rotation: [0.08, -0.4, 0.03],
    scale: 2.2,
  },
  // 1 — AI Agents: right side, slight tilt
  {
    id: "agents",
    position: [1.15, 0.0, 0.3],
    rotation: [0.04, -0.25, -0.02],
    scale: 2.1,
  },
  // 2 — Features: right side, front-facing
  {
    id: "features",
    position: [0.95, -0.05, 0.3],
    rotation: [0.0, -0.15, 0.0],
    scale: 1.95,
  },
  // 3 — Stats: right side, top-down angle
  {
    id: "stats",
    position: [0.9, 0.05, 0.4],
    rotation: [0.35, -0.2, 0.08],
    scale: 1.85,
  },
  // 4 — Pricing: right side, back view tease
  {
    id: "pricing",
    position: [0.85, -0.05, 0.0],
    rotation: [-0.06, Math.PI - 0.5, 0.08],
    scale: 1.85,
  },
  // 5 — Investors: right side, screen showcase
  {
    id: "investors",
    position: [1.1, 0.0, 0.3],
    rotation: [0.08, -0.2, 0.04],
    scale: 1.95,
  },
  // 6 — CTA: right side, front-facing clean
  {
    id: "cta",
    position: [1.0, -0.05, 0.2],
    rotation: [0.03, -0.15, -0.01],
    scale: 2.1,
  },
]

export const MOBILE_SCALE_FACTOR = 1.1
export const MOBILE_POSITION_FACTOR = 0.15
