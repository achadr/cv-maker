# CV Maker

A modern, responsive CV/Resume builder application built with React, Vite, and Tailwind CSS.

## Features (Planned)

- Personal information section with photo upload
- Work experience management
- Education history
- Skills with proficiency levels
- Languages with proficiency levels
- Multiple professional templates (Modern, Classic, Creative, Professional)
- Real-time preview
- PDF export functionality

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## Project Structure

```
cv-maker/
├── src/
│   ├── components/
│   │   ├── CVMaker.jsx              # Main component
│   │   ├── Editor/                  # Form components
│   │   ├── Preview/                 # Template components
│   │   └── shared/                  # Reusable components
│   ├── hooks/                       # Custom React hooks
│   ├── utils/                       # Helper functions
│   ├── constants/                   # Configuration constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── CLAUDE.md                        # Detailed project documentation
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview production build locally
npm run preview
```

## Development Status

This project is currently in initial setup phase. See `CLAUDE.md` for detailed project specifications and development roadmap.

## License

MIT License - feel free to use this project for your portfolio or commercial purposes.
