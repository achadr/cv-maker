# CV Maker - Professional Resume Builder

A modern, client-side CV/Resume builder with live preview, localStorage persistence, and PDF export functionality.

## Features

- **Two-Column Editor**: Form editor (left) with live preview (right)
- **Real-time Updates**: See changes instantly in the preview
- **Auto-save**: Automatically saves to localStorage
- **PDF Export**: Export your CV as PDF using html2canvas + jsPDF
- **Mobile Responsive**: Toggle between Edit and Preview on mobile devices
- **Sections**:
  - Personal Details (name, email, phone, location, links)
  - Professional Summary
  - Work Experience (with bullet points, reorderable)
  - Education (reorderable)
  - Skills (with proficiency levels)
  - Languages (with proficiency levels)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - State management
- **html2canvas + jsPDF** - PDF export
- **Lucide React** - Icons
- **UUID** - Unique ID generation

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cv-maker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## Usage

1. **Fill in your details** in the left editor panel
2. **See live preview** on the right as you type
3. **Add/Remove/Reorder** sections using the controls
4. **Export to PDF** using the "Export PDF" button in the header
5. **Data persists** automatically in your browser's localStorage

## Project Structure

```
cv-maker/
├── src/
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Input.jsx
│   │   │   └── TextArea.jsx
│   │   ├── AppShell.jsx
│   │   ├── Header.jsx
│   │   ├── EditorColumn.jsx
│   │   ├── PreviewColumn.jsx
│   │   ├── CVPreview.jsx
│   │   ├── PersonalForm.jsx
│   │   ├── ExperienceForm.jsx
│   │   ├── EducationForm.jsx
│   │   ├── SkillsForm.jsx
│   │   └── LanguagesForm.jsx
│   ├── store/
│   │   └── cvStore.js          # Zustand store
│   ├── services/
│   │   ├── persistence.js      # localStorage utilities
│   │   └── pdfExporter.js      # PDF export functionality
│   ├── hooks/
│   │   └── useAutosave.js      # Autosave hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Data Model

The application uses a canonical JSON schema for CV data:

```json
{
  "meta": {
    "template": "classic",
    "theme": "indigo",
    "font": "Inter"
  },
  "personal": {
    "firstName": "",
    "lastName": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "website": ""
  },
  "summary": "",
  "experience": [
    {
      "id": "uuid",
      "title": "",
      "company": "",
      "startDate": "",
      "endDate": "",
      "location": "",
      "bullets": [""]
    }
  ],
  "education": [
    {
      "id": "uuid",
      "school": "",
      "degree": "",
      "startDate": "",
      "endDate": "",
      "location": ""
    }
  ],
  "skills": [
    {
      "id": "uuid",
      "name": "",
      "level": "Intermediate"
    }
  ],
  "languages": [
    {
      "id": "uuid",
      "lang": "",
      "level": "Intermediate"
    }
  ]
}
```

## Features In Detail

### Auto-save
- Debounced save to localStorage (1 second)
- Save status indicator in header
- Automatic restore on page load

### PDF Export
- Client-side PDF generation
- A4-sized output
- High-quality rendering (2x scale)
- Fallback to browser print if export fails

### Mobile Experience
- Segmented control to toggle between Edit/Preview
- Touch-friendly controls
- Responsive layouts

### Form Features
- Add/Remove items in repeatable sections
- Move up/down to reorder items
- Input validation
- Placeholder text for guidance

## Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

- No server-side persistence (localStorage only)
- No authentication or user accounts
- Single template (classic) - more templates can be added
- PDF export quality depends on browser rendering

## Future Enhancements

- Multiple CV templates
- Template customization (colors, fonts)
- Import from LinkedIn
- Export to DOCX format
- Section reordering (drag & drop)
- Profile photo upload
- Projects section
- Cover letter builder

## License

MIT License - feel free to use this project for your portfolio or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Built with React + Vite + Tailwind CSS**

Portfolio Project demonstrating:
- Modern React patterns (hooks, context)
- State management with Zustand
- Responsive design
- Client-side data persistence
- PDF generation
- Clean component architecture
