# CV Maker - Project Context

## Project Overview
A modern, responsive CV/Resume builder application that allows users to create professional CVs with real-time preview, multiple templates, and PDF export functionality.

## Core Features

### 1. Personal Information Section
- Full name, email, phone, location
- LinkedIn and website URLs
- Professional summary/bio
- **Profile photo upload** with preview and remove functionality
- Image file handling using FileReader API

### 2. Work Experience Section
- Dynamic add/remove experience entries
- Fields: Job title, company, location, start date, end date
- "Currently working here" checkbox (disables end date)
- Multi-line description for responsibilities and achievements
- Unique ID generation for each entry using `Date.now()`

### 3. Education Section
- Dynamic add/remove education entries
- Fields: Degree, institution, location, start date, end date
- Optional GPA field
- Multi-line description for achievements and coursework
- Unique ID generation for each entry

### 4. Skills Section
- Dynamic add/remove skills
- Skill name input
- Skill level selector: Beginner, Intermediate, Advanced, Expert
- Visual representation of skill proficiency

### 5. Languages Section
- Dynamic add/remove languages
- Language name input
- Proficiency level selector: Basic, Intermediate, Advanced, Native

### 6. Template System
Four professionally designed templates:

#### **Modern Template**
- Gradient header (indigo to purple)
- Profile photo in header (circular)
- Clean, contemporary design
- Color-coded sections with accent colors
- Two-column layout for skills and languages

#### **Classic Template**
- Centered layout with traditional styling
- Gray/black color scheme
- Profile photo at top center
- Uppercase section headings
- List-based format for skills
- Professional and timeless design

#### **Creative Template**
- Purple to pink gradient header
- Bold and vibrant design
- Modern typography
- Eye-catching visual hierarchy
- Perfect for creative industries

#### **Professional Template**
- Deep blue header
- Conservative and corporate styling
- Emphasis on readability
- Structured layout
- Ideal for corporate positions

### 7. Real-time Preview
- Live preview updates as user types
- Template switching without losing data
- Responsive layout that adapts to content
- Print-friendly CSS for PDF generation

### 8. Data Management
- All data stored in React state (no localStorage)
- Immutable state updates
- Proper state lifting and prop drilling
- Unique IDs for list items to prevent key conflicts

### 9. PDF Export
- Download button to export CV as PDF
- Currently uses browser print functionality (Ctrl+P)
- Placeholder for html2pdf.js integration
- Print-optimized CSS styling

## Technical Architecture

### State Structure
```javascript
{
  personalInfo: {
    fullName: string,
    email: string,
    phone: string,
    location: string,
    linkedin: string,
    website: string,
    summary: string,
    photo: string | null  // Base64 encoded image
  },
  experience: [
    {
      id: number,
      title: string,
      company: string,
      location: string,
      startDate: string,
      endDate: string,
      current: boolean,
      description: string
    }
  ],
  education: [
    {
      id: number,
      degree: string,
      institution: string,
      location: string,
      startDate: string,
      endDate: string,
      gpa: string,
      description: string
    }
  ],
  skills: [
    {
      id: number,
      name: string,
      level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
    }
  ],
  languages: [
    {
      id: number,
      name: string,
      proficiency: 'basic' | 'intermediate' | 'advanced' | 'native'
    }
  ]
}
```

### Key Functions

#### Personal Info
- `updatePersonalInfo(field, value)` - Updates specific personal info field
- `handlePhotoUpload(event)` - Handles file input and converts to base64
- `removePhoto()` - Clears photo from state

#### Experience Management
- `addExperience()` - Adds new experience entry
- `updateExperience(id, field, value)` - Updates specific experience field
- `deleteExperience(id)` - Removes experience entry

#### Education Management
- `addEducation()` - Adds new education entry
- `updateEducation(id, field, value)` - Updates specific education field
- `deleteEducation(id)` - Removes education entry

#### Skills Management
- `addSkill()` - Adds new skill entry
- `updateSkill(id, field, value)` - Updates specific skill field
- `deleteSkill(id)` - Removes skill entry

#### Languages Management
- `addLanguage()` - Adds new language entry
- `updateLanguage(id, field, value)` - Updates specific language field
- `deleteLanguage(id)` - Removes language entry

#### Template System
- `getTemplateStyles()` - Returns color scheme based on selected template
- `renderModernTemplate()` - Renders modern template layout
- `renderClassicTemplate()` - Renders classic template layout
- Similar render functions for creative and professional templates

## UI/UX Considerations

### Navigation
- Tab-based navigation for different sections
- Active section highlighting
- Smooth transitions between sections
- Mobile-responsive tab layout

### Form Design
- Clear placeholder text for all inputs
- Consistent input styling with focus states
- Proper spacing and grouping of related fields
- Visual feedback for user actions

### Template Selection
- Large, clickable template cards
- Visual indication of selected template
- Instant preview update on template change
- Template preview thumbnails (future enhancement)

### Responsive Design
- Two-column layout on desktop (editor + preview)
- Single column on mobile/tablet
- Scrollable sections with max-height
- Touch-friendly buttons and inputs

### Visual Hierarchy
- Clear section headers
- Consistent typography scale
- Proper use of whitespace
- Color coding for different sections

## Future Enhancements

### High Priority
1. **PDF Export Integration**
   - Integrate html2pdf.js or similar library
   - Custom page breaks
   - Vector graphics for better quality
   - Multiple export formats (PDF, DOCX)

2. **Data Persistence**
   - Save CV drafts to browser (with user consent)
   - Export/import JSON data
   - Cloud save functionality (requires backend)

3. **Additional Templates**
   - Minimal template
   - Executive template
   - Academic template
   - Designer template

### Medium Priority
4. **Template Customization**
   - Color picker for accent colors
   - Font selection
   - Spacing adjustments
   - Section reordering

5. **Enhanced Features**
   - Multiple CV management
   - Cover letter builder
   - LinkedIn import
   - Spell checker integration

6. **Sections**
   - Projects section
   - Certifications section
   - Awards & achievements
   - Publications section
   - Volunteer experience

### Low Priority
7. **Collaboration Features**
   - Share CV for feedback
   - Comments and suggestions
   - Version history

8. **Analytics**
   - Track which templates are most popular
   - Usage statistics
   - A/B testing for template effectiveness

## Development Guidelines

### Code Style
- Use functional components with hooks
- Destructure props and state
- Keep components under 300 lines
- Use meaningful variable names
- Add comments for complex logic

### State Management
- Keep state as flat as possible
- Avoid unnecessary re-renders
- Use React.memo for expensive components
- Consider useCallback for handlers passed to children

### Error Handling
- Validate file uploads (size, type)
- Handle missing or invalid data gracefully
- Provide user feedback for errors
- Fallback UI for empty states

### Accessibility
- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly

### Performance
- Lazy load templates
- Optimize image uploads (resize/compress)
- Debounce text inputs (if needed)
- Virtualize long lists (if needed)

## Tech Stack

### Core
- **React 18+** - UI library
- **Hooks** - useState, useRef, useCallback (future)
- **Lucide React** - Icon library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- Core utility classes only (no compiler needed)
- Responsive design utilities
- Custom gradient backgrounds

### Future Dependencies
- **html2pdf.js** - PDF generation
- **FileSaver.js** - File download utility
- **React-DnD** - Drag and drop (for section reordering)

## File Structure Recommendation

```
cv-maker/
├── src/
│   ├── components/
│   │   ├── CVMaker.jsx              # Main component
│   │   ├── TemplateSelector.jsx     # Template chooser
│   │   ├── Editor/
│   │   │   ├── PersonalInfoForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   └── LanguagesForm.jsx
│   │   ├── Preview/
│   │   │   ├── ModernTemplate.jsx
│   │   │   ├── ClassicTemplate.jsx
│   │   │   ├── CreativeTemplate.jsx
│   │   │   └── ProfessionalTemplate.jsx
│   │   └── shared/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── TextArea.jsx
│   ├── hooks/
│   │   ├── useCVData.js             # Custom hook for CV data
│   │   └── usePhotoUpload.js        # Custom hook for photo handling
│   ├── utils/
│   │   ├── templateStyles.js        # Template configuration
│   │   ├── validators.js            # Form validation
│   │   └── pdfGenerator.js          # PDF export logic
│   ├── constants/
│   │   └── templates.js             # Template definitions
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js (or webpack/CRA config)
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm/yarn
- Basic understanding of React

### Installation
```bash
# Clone repository
git clone <your-repo-url>
cd cv-maker

# Install dependencies
npm install

# Required packages
npm install react react-dom
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind
npx tailwindcss init -p
```

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Run Development Server
```bash
npm run dev
```

## Testing Checklist

### Functionality Tests
- [ ] Add/edit/delete experience entries
- [ ] Add/edit/delete education entries
- [ ] Add/edit/delete skills
- [ ] Add/edit/delete languages
- [ ] Upload and remove profile photo
- [ ] Switch between templates
- [ ] All form inputs update preview in real-time
- [ ] "Currently working" checkbox disables end date
- [ ] Empty states display properly

### UI/UX Tests
- [ ] Responsive layout on mobile, tablet, desktop
- [ ] All buttons are clickable and provide feedback
- [ ] Form validation works correctly
- [ ] Scrolling works in long forms
- [ ] Template selection is clear
- [ ] Print preview looks good

### Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

## Common Issues & Solutions

### Issue: Photo upload not working
**Solution:** Ensure FileReader API is properly implemented and file input has correct accept attribute

### Issue: Template colors not applying
**Solution:** Check that Tailwind classes are not being purged, use safelist in config if needed

### Issue: State not updating
**Solution:** Verify immutable state updates, check for direct state mutations

### Issue: PDF export quality poor
**Solution:** Increase scale in html2pdf options, use vector icons instead of raster images

## Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
MIT License - feel free to use this project for your portfolio or commercial purposes.

## Contact & Support
- Create an issue for bug reports
- Submit feature requests via GitHub Issues
- Check existing issues before creating new ones

---

**Note:** This is a portfolio project demonstrating React state management, component composition, and modern UI design. It's an excellent addition to showcase full-stack development skills.