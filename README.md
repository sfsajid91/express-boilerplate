# Express Boilerplate

This is a boilerplate for famous Node.js framework [Express.js](http://expressjs.com/) with [TypeScript](https://www.typescriptlang.org/) and [SWC](https://swc.rs/). Setting up a new Express.js project with TypeScript can be a hassle. Implementing of path aliases, linting, and formatting can be time-consuming. This boilerplate is a starting point for new projects that need to be up and running quickly. It includes all the necessary configurations and tools to help you focus on writing code.

## Features

-   [x] TypeScript
-   [x] SWC
-   [x] Express.js
-   [x] ESLint
-   [x] Prettier

## Getting Started

Clone the repository:

```bash
git clone https://github.com/sfsajid91/express-boilerplate.git
```

Install dependencies:

```bash
pnpm install
```

Configure environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your environment variables.

Start the development server:

```bash
pnpm dev
```

## Building for Production

```bash
pnpm build
```

## Running in Production

```bash
pnpm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
