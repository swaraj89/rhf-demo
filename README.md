# RHF Demo

This is a demo application showcasing the usage of React Hook Form with Yup for form validation. The application is built using React, TypeScript, and Vite.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/rhf-demo.git
cd rhf-demo
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to see the application in action.

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Scripts

- `dev`: Runs the development server using Vite.
- `build`: Builds the project using TypeScript compiler and Vite.
- `lint`: Runs ESLint to check for linting issues.
- `preview`: Previews the production build.

## Technologies Used

- `React`: A JavaScript library for building user interfaces.
- `TypeScript`: A typed superset of JavaScript that compiles to plain JavaScript.
- `Vite`: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- `React Hook Form`: A performant, flexible, and extensible form library for React.
- `Yup`: A JavaScript schema builder for value parsing and validation.
- `Emotion`: A library designed for writing CSS styles with JavaScript.
- `Material-UI (MUI)`: React components for faster and easier web development.

## Folder Structure

The project structure is as follows:

```bash
rhf-demo/
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── hook-form
│   │       ├── FormProvider.tsx
│   │       ├── RHFCheckbox.tsx
│   │       ├── RHFSelect.tsx
│   │       ├── RHFTextField.tsx
│   │       └── index.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── Demo.tsx
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- **components/**: Contains reusable React components.
- **hooks/**: Contains custom React hooks.
- **pages/**: Contains page components for different routes.
- **App.tsx**: The root component of the application.
- **main.tsx**: The entry point of the application.
- **index.css**: Global CSS styles.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to create a pull request or open an issue.

- Fork the repository.
- Create a new branch (`git checkout -b feature/your-feature`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature/your-feature`).
- Open a pull request
