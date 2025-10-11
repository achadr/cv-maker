# CV Maker - Implementation Plan

## Project Goal
Build a CV maker web app that **strictly follows the layout and styling** of [app.cvmaker.com](https://app.cvmaker.com/#/personal-details/)

## Key Requirements
- ✅ Two-column editor: Form (left 40%) + Live Preview (right 60%)
- ✅ No authentication - client-side only with localStorage
- ✅ Sections: Personal Details, Experience, Education, Skills, Summary, Languages
- ✅ Add/Edit/Remove/Reorder items in repeatable sections
- ✅ Live preview updates as user types
- ✅ Client-side PDF export (html2canvas + jsPDF)
- ✅ Mobile responsive with Edit/Preview toggle
- ✅ Autosave to localStorage

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **PDF Export**: html2canvas + jsPDF
- **Icons**: Lucide React (or similar)
- **UUID**: uuid package for generating IDs

## Data Model (Canonical JSON Schema)
Located at: `.claude/new cv/data-model.json`

Key structure:
```json
{
  "meta": { "template": "classic", "theme": "indigo", "font": "Inter" },
  "personal": { "firstName", "lastName", "title", "email", "phone", "location", "linkedin", "website" },
  "summary": "string",
  "experience": [{ "id", "title", "company", "startDate", "endDate", "location", "bullets": [] }],
  "education": [{ "school", "degree", "startDate", "endDate", "location" }],
  "skills": [{ "name", "level" }],
  "projects": [{ "name", "description" }],
  "languages": [{ "lang", "level" }]
}
```

## Implementation Steps

### Phase 1: Setup & Foundation
1. ✅ Analyze reference website for exact layout/styling
2. ✅ Initialize React + Vite project with Tailwind CSS
3. ✅ Set up Zustand store with canonical JSON schema
4. ✅ Implement localStorage persistence with autosave (500-1000ms debounce)

### Phase 2: Layout & Shell
5. ✅ Build AppShell with two-column layout (40/60 split)
   - Background: #f6f8fb
   - Max width: 1200px centered
   - Soft shadow on editor card
6. ✅ Create Header component
   - App name (left)
   - Action buttons (right): Export PDF (primary), Template selector (dropdown)
   - Save status indicator

### Phase 3: Form Components (Left Column)
7. ✅ Build PersonalForm component
   - Fields: firstName, lastName, title, email, phone, location, linkedin, website, summary
   - Validation: email format, phone characters
   - Full-width inputs with labels above

8. ✅ Implement ExperienceForm
   - Add/Edit/Remove/Move Up/Move Down
   - Fields: title, company, startDate, endDate, location, bullets (editable list)
   - Each item in card with drag handle/controls

9. ✅ Implement EducationForm
   - Add/Edit/Remove/Move Up/Move Down
   - Fields: school, degree, startDate, endDate, location

10. ✅ Implement SkillsForm
    - Tag-style input or comma-separated
    - Fields: name, level (Beginner/Intermediate/Advanced/Expert)

11. ✅ Optional: LanguagesForm, ProjectsForm (if needed)

### Phase 4: Preview & Export (Right Column)
12. ✅ Build TemplateClassic component
    - Fixed width: 816px (A4-like)
    - Sections: Name/Title → Contact → Summary → Experience → Education → Skills
    - Typography: Name large & bold, section headings uppercase small
    - Live updates from store

13. ✅ Implement client-side PDF export
    - Use html2canvas + jsPDF
    - Capture preview container
    - Output A4-sized PDF
    - Fallback to browser print dialog

### Phase 5: Responsive & Polish
14. ✅ Mobile responsive layout
    - Single column on mobile
    - Segmented control to toggle Edit/Preview
    - Touch-friendly controls

15. ✅ UI Polish
    - Animations for add/remove items
    - Hover states on buttons
    - Focus styles on inputs
    - Loading states

16. ✅ Testing & Verification
    - Live editing updates preview instantly
    - Autosave works
    - All CRUD operations work
    - PDF export produces correct output
    - Mobile toggle works
    - Visual parity with reference site

## Component Architecture

```
App
├── AppShell
│   ├── Header (app name, save status, Export PDF, Template selector)
│   └── EditorPage
│       ├── FormColumn (left 40%)
│       │   ├── PersonalForm
│       │   ├── Section (Experience)
│       │   │   └── ExperienceFormItem (repeatable)
│       │   ├── Section (Education)
│       │   │   └── EducationFormItem (repeatable)
│       │   ├── Section (Skills)
│       │   │   └── SkillsFormItem (repeatable)
│       │   └── Section (Languages - optional)
│       └── PreviewColumn (right 60%)
│           └── TemplateClassic
└── Services
    ├── store (Zustand)
    └── pdfExporter
```

## Styling Guidelines (From Reference)

### Layout Tokens
- Background: `#f6f8fb`
- Primary color: `#0f62fe` (blue)
- Surface: white with shadow
- Grid gap: `1.5rem` (24px)

### Typography
- Font: Inter or system UI
- Name: Large & bold
- Section headings: Uppercase, small, bold
- Body: 14-16px, readable line-height

### Form Controls
- Full-width inputs
- Small vertical spacing between fields
- Label above each input
- Helper text below when needed
- Cards for repeatable items with subtle border

### Preview
- Width: 816px (A4 proportions)
- Background: white
- Shadow: soft drop-shadow
- Padding: 2rem (32px)

### Buttons
- Primary: `bg-[#0f62fe] text-white px-4 py-2 rounded-md`
- Secondary: `border border-gray-200 px-4 py-2 rounded-md`
- Add button: full-width with plus icon

## Reference URL
**Primary reference for visual parity**: https://app.cvmaker.com/#/personal-details/

## Deliverables
1. ✅ GitHub repository with clear README
2. ✅ Working deployed demo or local dev instructions
3. ✅ Example PDF in `examples/` folder
4. ✅ Screenshots (desktop + mobile) showing visual parity

## Notes
- Keep implementation self-contained (no backend)
- Client-side only for portfolio demonstration
- Focus on frontend craftsmanship and visual fidelity
- When in doubt, consult reference site for layout decisions
