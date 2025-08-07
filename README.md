# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme toggle
- 📱 Mobile-friendly navigation
- ⚡ Smooth animations with Framer Motion
- 🎯 SEO optimized
- 📄 Multiple pages (Home, About, Projects, Blog, Contact)
- 🔧 TypeScript for type safety

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── sections/       # Page sections
│   ├── Layout.tsx      # Main layout component
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page
│   ├── Blog.tsx        # Blog page
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── types/              # TypeScript type definitions
│   └── index.ts        # Main types file
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

1. **`public/index.html`** - Update meta tags, title, and description
2. **`src/components/Navbar.tsx`** - Update your name and social links
3. **`src/components/Footer.tsx`** - Update contact information and social links
4. **`src/pages/About.tsx`** - Update your photo, experience, and education
5. **`src/components/sections/HeroSection.tsx`** - Update hero content and stats

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Modify colors in the `theme.extend.colors` section
- Add custom animations in the `theme.extend.animation` section
- Update fonts in the `theme.extend.fontFamily` section

### Theme

The project includes a dark/light theme system managed by `ThemeContext.tsx`. The theme automatically:

- Saves user preference to localStorage
- Respects system theme preference
- Updates meta theme-color for mobile browsers

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect it's a React app

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.
