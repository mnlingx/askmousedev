# askmouse

askmouse is a tiny, playful fortune-teller. Think of a yes-or-no question, choose a feeling if you like, and roll to hear what the mouse says. Each roll takes a moment, then reveals one of several randomized responses.

## How It Works

Choose one of the five feelings to nudge the chance of a yes. Leave them all unselected for an even 50/50 roll.

| Feeling | Chance of yes |
| --- | ---: |
| Happy | 80% |
| Sad | 35% |
| Angry | 25% |
| Embarrassed | 40% |
| Scared | 20% |

The answer is generated in your browser; the app does not send your question anywhere. The result is for fun, not advice.

## Run Locally

Requires Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local development URL in the terminal. To create and preview a production build:

```sh
npm run build
npm run preview
```

Run the linter with `npm run lint`.

## Built With

React and Vite.
