
# Good Food — Restaurant Analytics Dashboard

A responsive restaurant analytics dashboard built with React, TypeScript, Tailwind CSS, and Recharts. The application translates Figma design mockups into a modular, production-ready interface with interactive metrics, charts, and layout state management.

---

## Live Demo & Design

- **Live Preview:** https://good-food-dashboard-three.vercel.app/ 
- **Design Reference:** Built strictly against Figma layout and typographic specifications. 
https://www.figma.com/design/qtdDY0Gq9FWTDwnB2b8PaT/Dashboard--Community-?node-id=0-72&t=1vC60qrKPvFROosQ-0

---

## Tech Stack

- **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Icons from the figma file]

---

## Key Features

- **Revenue Overview:** Custom dual-bar chart comparing sales performance (`Last 6 Days` vs `Last Week`) with an isolated SVG layout canvas and custom tooltips.
- **Order Distribution:** Donut pie chart representing sales volume split across morning, afternoon, and evening shifts.
- **Dynamic Rating Bubbles:** Scalable cluster layout mapping over array data dynamically with responsive absolute slot positioning, accent border rings, and hover transitions.
- **Most Ordered Items:** Ranked menu card with automatic Indonesian Rupiah (`IDR`) currency formatting, fluid text truncation, and thumbnail rendering.
- **Order Trend Graph:** Linear trend chart tracking weekly sales activity with smooth grid line formatting.
- **Interactive TopNav & Sidebar:** Collapsible sidebar with active link styling, catch-all route fallbacks for unbuilt views, and a profile dropdown featuring outside-click detection using custom DOM hooks.
- **Performance Trend Indicators:** Reusable dynamic badge tracking directional growth (increase/decrease percentages vs. prior week) across financial and order charts.
---

## Project Architecture

The codebase follows a feature-first structure to keep components, domain mock data, and TypeScript types decoupled and maintainable:

```text
src/
├── assets/                  # Static assets and icons
├── context/                 # Global UI context (Sidebar drawer state)
├── features/
│   └── dashboard/
│       ├── components/      # Domain widgets (Revenue, OrderTime, RatingBubbles, etc.)
│       ├── data/            # Mock analytics datasets
│       └── types/           # Strongly typed data models
├── layouts/                 # Shell container (Sidebar, TopNav, Scrollable Outlet)
├── routes/                  # Router tree and catch-all fallbacks
└── shared/                  # Reusable primitives and navigation links

```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js (>= 18.x)** and **pnpm** installed:

```bash
npm install -g pnpm

```

### Setup & Installation

1. **Clone the repository:**
```bash
git clone [https://github.com/Praise-Tech-Dev/Good_Food_Dashboard.git]
cd good-food-dashboard

```


2. **Install dependencies:**
```bash
pnpm install

```


3. **Start development server:**
```bash
pnpm dev

```


4. **Build for production:**
```bash
pnpm build

```


5. **Preview production build locally:**
```bash
pnpm preview

```



---

## Engineering Considerations

* **Dynamic Array Mapping:** The rating visualizer iterates through incoming datasets via dynamic layout slots rather than hardcoded DOM nodes, keeping it reusable for varying API payloads.
* **Responsive Chart Bounds:** Isolates chart dimensions within dedicated wrappers to avoid Recharts `ResponsiveContainer` zero-height or overflow rendering bugs during grid breakpoint shifts.
* **Route Guarding:** Unimplemented routes gracefully prevent runtime crashes using route event interception and wildcard fallback redirection.

---

## License

Distributed under the MIT License.

```

```