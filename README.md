# 👩‍🏫 QuizQuokka 🧑‍🏫

Master your knowledge with engaging flashcards on Data Structures & Algorithms, Python, JavaScript, React, and more!

## 🔥 Features

- [x] Responsive Design
- [x] Flashcards on multiple topics
- [x] AI integration for topic explanation

## 💻 Tech Stack and tools

- **Main Framework** - [React](https://react.dev/)
- **Styling** - [TailwindCSS](https://tailwindcss.com/)
- **Component Library** - [ShadCN](https://ui.shadcn.com/)
- **Icons** - [Radix UI](https://www.radix-ui.com/icons)
- **LLM Integration** - [Llama 3](https://ai.meta.com/blog/meta-llama-3/) (via [Groq](https://console.groq.com/docs/quickstart))
- **Backend As A Service** - [Firebase](https://firebase.google.com/)
  - **Database** - [Firestore Database](https://firebase.google.com/products/firestore/)
  - **Serverless Functions** - [Firebase Cloud Functions](https://firebase.google.com/products/functions/)
  - **Auth** - [Firebase Auth](https://firebase.google.com/docs/auth)
- **Deployment** - [Netlify](https://www.netlify.com/)
- **Code Formatting** - [Prettier](https://prettier.io/)
- **Linting** - [ESLint](https://eslint.org)
- **Package Manager** - [NPM](https://npmjs.com/)

## 📜 License

This project is licensed under the [MIT license.](https://github.com/xdaybreakerx/quizquokka/blob/main/LICENSE)

## 🏃‍➡️ Run App Locally

### Getting Started

1. Clone this repo
2. Install the dependencies: `npm install`
3. Start a local dev server: `npm run dev`

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

### To-do

- [x] theme toggle with choice selection that persists
- [x] authentication via firebase
  - [ ] users can upload their own cards
- [ ] error boundary
