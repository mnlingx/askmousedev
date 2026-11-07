# Graph Report - askmouse  (2026-11-07)

## Corpus Check
- Corpus is ~5,832 words - fits in a single context window. You may not need a graph.

## Summary
- 73 nodes · 92 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Product Architecture
- Roll Interaction
- Runtime Dependencies
- Lint Configuration
- Project Metadata
- Type Definitions
- Build Configuration
- Npm Scripts
- Eslint Core
- React Hooks Linting
- React Refresh Linting

## God Nodes (most connected - your core abstractions)
1. `askmouse Architecture` - 11 edges
2. `scripts` - 5 edges
3. `react` - 5 edges
4. `App()` - 4 edges
5. `react-dom` - 3 edges
6. `@eslint/js` - 3 edges
7. `@vitejs/plugin-react` - 3 edges
8. `eslint` - 3 edges
9. `eslint-plugin-react-hooks` - 3 edges
10. `eslint-plugin-react-refresh` - 3 edges

## Surprising Connections (you probably didn't know these)
- `askmouse Architecture` --references--> `Purple Lightning Favicon`  [EXTRACTED]
  ARCHITECTURE_askmouse.md → public/favicon.svg
- `askmouse Architecture` --references--> `Social and Documentation Icon Symbols`  [EXTRACTED]
  ARCHITECTURE_askmouse.md → public/icons.svg
- `askmouse Architecture` --references--> `Layered Purple Hero Graphic`  [EXTRACTED]
  ARCHITECTURE_askmouse.md → src/assets/hero.png
- `askmouse Architecture` --references--> `React Starter Logo`  [EXTRACTED]
  ARCHITECTURE_askmouse.md → src/assets/react.svg
- `askmouse Architecture` --references--> `Vite Starter Logo`  [EXTRACTED]
  ARCHITECTURE_askmouse.md → src/assets/vite.svg

## Import Cycles
- None detected.

## Communities (12 total, 4 thin omitted)

### Community 0 - "Product Architecture"
Cohesion: 0.12
Nodes (18): Accessibility Support, askmouse Architecture, Browser-Based Fortune Toy, Client-Only Architecture, Google Fonts Runtime Request, Local Math.random Decision, React and Vite Stack, HTML Entry Document (+10 more)

### Community 1 - "Roll Interaction"
Cohesion: 0.22
Nodes (7): EMOTIONS, Face(), App(), NO_LINES, SPIN_WORDS, styles, YES_LINES

### Community 2 - "Runtime Dependencies"
Cohesion: 0.29
Nodes (5): dependencies, react@^19.2.8, react-dom@^19.2.8, react, react-dom

### Community 4 - "Lint Configuration"
Cohesion: 0.40
Nodes (4): eslint@^10.9.0, globals@^17.11.0, eslint, globals

### Community 5 - "Project Metadata"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 6 - "Type Definitions"
Cohesion: 0.40
Nodes (5): devDependencies, @types/react@^19.2.18, @types/react-dom@^19.2.4, @types/react, @types/react-dom

### Community 7 - "Build Configuration"
Cohesion: 0.40
Nodes (4): vite@^8.2.2, @vitejs/plugin-react@^6.1.0, vite, @vitejs/plugin-react

### Community 8 - "Npm Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

## Knowledge Gaps
- **8 isolated node(s):** `Client-Only Architecture`, `Google Fonts Runtime Request`, `Accessibility Support`, `React Root Mount`, `Social and Documentation Icon Symbols` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 30 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Runtime Dependencies` to `Roll Interaction`, `Source Assets`, `Project Metadata`?**
  _High betweenness centrality (0.268) - this node is a cross-community bridge._
- **What connects `Client-Only Architecture`, `Google Fonts Runtime Request`, `Accessibility Support` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Product Architecture` be split into smaller, more focused modules?**
  _Cohesion score 0.12418300653594772 - nodes in this community are weakly interconnected._
- **Why does `devDependencies` connect `Type Definitions` to `Lint Configuration`, `Project Metadata`, `Build Configuration`, `Eslint Core`, `React Hooks Linting`, `React Refresh Linting`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Why does `scripts` connect `Npm Scripts` to `Project Metadata`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._