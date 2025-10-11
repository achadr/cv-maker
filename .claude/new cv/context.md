# context.md — CV Maker Web App (Portfolio Project)

> **Purpose:** This document describes the exact project context, constraints, goals, and a detailed step-by-step implementation plan for a CV maker web application intended for a personal portfolio. The app must follow as strictly as possible the layout and styling of [https://app.cvmaker.com/#/personal-details/](https://app.cvmaker.com/#/personal-details/) and provide a minimal, polished, non-authenticated experience with core features.

---

## 1. High-level summary

You will build a single-page CV maker web application for your portfolio. It is intentionally **simple**: no authentication, no account management, no server-side user database. The app must closely mirror the structure, layout, and visual language of the **CVMaker personal details** editor page (reference URL above). This project demonstrates frontend skills: component architecture, state management, responsive layout, pixel-accurate styling, template rendering, client-side PDF export, and good UX.

**Must-haves (minimum):**

* Two-column editor: **left** = form with sections (personal details, experience, education, skills, summary), **right** = live preview showing the formatted CV.
* UI layout and spacing that strictly follow the reference page (visual parity). Use the reference for measurements, paddings, font sizes and component positions.
* Ability to add / edit / remove items in repeatable sections (experience, education, skills).
* Reordering sections/items via drag handles (drag & drop optional for MVP; at least move up/down controls required).
* Select between at least one printable template and produce a PDF export client-side that matches the preview.
* Autosave to localStorage and load from localStorage on return.
* Mobile-friendly: stacked single-column with toggle between Edit / Preview.

**Not required:**

* Login / signup / persistence on the server.
* Sharing links or public hosting of CVs.

---

## 2. Project constraints & design mandate

* **Strict visual fidelity required.** The editor layout, control placement, sizes, and visual rhythm should closely match the reference `personal-details` page. Use the reference as the single source of truth for spacing, alignment, button placement, and the two-column editor behavior.
* **No backend auth or user accounts.** Server only optional for PDF rendering (client-side export is acceptable and preferred to keep the project self-contained).
* **Canonical JSON model.** Use a single JSON schema to represent the CV data; templates read from the same JSON. Keep field names clear and stable (see schema below).
* **Single-file deployable demo.** The project should be runnable locally and easily deployable as a static app (Vercel, Netlify, GitHub Pages if no server-side PDF). Ensure all features work in that environment.

---

## 3. Canonical JSON schema (template-agnostic)

Provide a stable JSON object shape so any template reads consistently. Keep the schema minimal and explicit:

```json
{
  "meta": { "title": "Frontend Developer CV", "template": "classic" },
  "personal": {
    "firstName": "",
    "lastName": "",
    "title": "",
    "email": "",
    "phone": "",
    "location": "",
    "website": "",
    "summary": ""
  },
  "experience": [
    {"id":"exp-1","role":"","company":"","start":"","end":"","bullets":[""]}
  ],
  "education": [
    {"id":"edu-1","degree":"","institution":"","start":"","end":"","notes":""}
  ],
  "skills": ["JavaScript", "React", "CSS"]
}
```

---

## 4. Exact layout and styling guidelines (to follow the reference)

> Use the reference page visually and measure values if needed. The goal is a visually close result — typography, spacing, button styles, control placement and the two-column editor must match.

### 4.1 Page shell and grid

* Desktop: two-column layout. Left column width ~40% (form column), right column ~60% (preview column). Use a responsive grid with exact gaps approximating the reference.
* Content vertically centered in editor view with a subtle background (#f6f8fb or similar) and the editor card elevated with a soft shadow.

### 4.2 Header & breadcrumbs

* Simple header above the columns with the app name (left) and action buttons (right): `Save` (or auto), `Export PDF`, and a `Template` selector dropdown.
* Buttons should be rounded, with the primary action using a solid brand color and secondary as an outlined/ghost button.

### 4.3 Form controls (left column)

* Inputs should be full-width, compact, and stacked with small vertical spacing. Use label above each input, small helper text under when necessary.
* For repeatable sections (experience, education): each item displayed in a card with a subtle border and a drag-handle / up-down controls on the top-right.
* `Add section` and `Add item` buttons should be full-width, with a plus icon and small-caps label.

### 4.4 Preview (right column)

* The preview must visually match a printed page: fixed width page container with top/bottom margins and a drop-shadow to emulate a physical sheet.
* Typography in the preview should mirror the reference: name large & bold, section headings uppercase small, body copy readable with balanced line-height.
* Layout within the preview: left-aligned name/title at top, contact line under, sections in order: Summary, Experience, Education, Skills.

### 4.5 Mobile behavior

* Collapse to single column. Show segmented control at top to toggle between `Edit` and `Preview`. Form fields should be vertically scrollable.

### 4.6 Visual tokens

* Choose a neutral brand color similar to the reference (blue-gray). Define tokens for: primary, accent, background, surface, text, muted.
* Use a modern UI font (Inter or system UI) and a serif or slab if the reference uses one for headings — match proportions.

---

## 5. Feature-by-feature step-by-step implementation plan

> Each step includes acceptance criteria that Claude (or any code-gen tool) can follow to implement components without ambiguity.

### Step 0 — Project initialization

1. Create a new React project with Vite (or Next.js but use SPA features only). Configure Tailwind CSS and base font.

   * Acceptance: `npm run dev` launches and shows a blank page.
2. Add Zustand (or use React Context) for app state; add `uuid` for ids.

   * Acceptance: A simple store holds the canonical JSON and exposes get/set methods.

### Step 1 — Layout & Shell

1. Implement `AppShell` with a centered content area and background matching reference.

   * Acceptance: page shows header and two-column grid placeholder with correct ratios.
2. Create top header with app name left and action buttons right: `Export PDF` (primary), `Template` (dropdown).

   * Acceptance: header visually matches spacing/positioning similar to reference.

### Step 2 — Data model + local persistence

1. Implement the canonical JSON schema in the store and provide `load()`/`save()` helpers to `localStorage`.

   * Acceptance: editing data and refreshing the page restores previous state.
2. Add autosave debounce (500–1000ms) and saved indicator in the header.

### Step 3 — Personal details form

1. Build `PersonalForm` component with labeled inputs for firstName, lastName, title, email, phone, website, location and a multi-line `summary` textarea.

   * Acceptance: typing updates store and the saved indicator changes.
2. Add validation: email format, phone allowed characters.

   * Acceptance: invalid email shows inline error and prevents export until resolved.

### Step 4 — Repeatable sections (Experience, Education, Skills)

1. Implement a `Section` wrapper UI used for Experience, Education and Skills.

   * Acceptance: `Add` button creates a new item with generated `id` and default empty fields.
2. Each item is editable inline. Provide `Remove` and `Move up / Move down` controls.

   * Acceptance: moving items updates the array order; removal deletes and preview updates.
3. Skills: allow both tag-style input and comma-separated input field.

### Step 5 — Preview renderer & template

1. Create `TemplateClassic` React component that renders the JSON into the preview layout. Use CSS variables for tokens so the editor can change colors.

   * Acceptance: the right column shows a styled CV that updates live with changes from the left form.
2. Ensure the preview uses a fixed-width page container (emulating A4) and that fonts/spacing match the reference.

### Step 6 — Export PDF (client-side for portfolio simplicity)

1. Implement `Export PDF` using `html2canvas` + `jsPDF` or `dom-to-pdf` approach. The export must capture the preview container and emit an A4-sized PDF.

   * Acceptance: clicking `Export PDF` downloads a PDF with visible text and layout closely matching the preview.
2. Provide a fallback message if PDF export fails and link to open the browser print dialog.

### Step 7 — Mobile & responsive polishing

1. Implement segmented control to toggle Edit / Preview on small screens.

   * Acceptance: on mobile the preview is readable and the form is fully usable.
2. Ensure touch targets, spacing, and inputs are comfortable and match the reference rhythm.

### Step 8 — Finishing touches

1. Add a small gallery or dropdown to change template (even if only one template is fully implemented). Selecting a different template toggles preview CSS variables.
2. Implement visual polish: subtle animations for adding/removing items, hover states for buttons, and focused input styles.

---

## 6. Component list with responsibilities (for unambiguous implementation)

* `AppShell` — header, main grid container, global style tokens.
* `Header` — app title, save status, export button, template selector.
* `EditorPage` — composes `FormColumn` + `PreviewColumn` and handles responsive toggles.
* `FormColumn` — lists `Section` components and `PersonalForm`.
* `PersonalForm` — all personal inputs bound to store.
* `Section` — wrapper for `ExperienceForm`, `EducationForm`, `SkillsForm` with add/remove/move controls.
* `ExperienceFormItem` — inputs for role, company, start/end, bullets (editable list).
* `TemplateClassic` — renders the CV preview from JSON.
* `PdfExporter` service — captures preview and produces client-side PDF.
* `store` — Zustand store exposing state, actions and persistence.

---

## 7. Styling reference snippets (Tailwind-focused)

* Two-column grid:

```html
<div class="min-h-screen bg-[#f6f8fb] p-6">
  <div class="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
    <aside class="col-span-5 bg-white p-6 rounded-md shadow">...</aside>
    <main class="col-span-7 flex justify-center items-start p-6">...</main>
  </div>
</div>
```

* Preview page container (fixed width, A4-like):

```html
<div class="w-[816px] bg-white shadow-lg p-8 border" style="height:auto">...</div>
```

* Button style (primary/secondary):

```html
<button class="px-4 py-2 rounded-md text-sm font-medium bg-[#0f62fe] text-white">Export PDF</button>
<button class="px-4 py-2 rounded-md text-sm font-medium border border-gray-200">Template</button>
```

---

## 8. Acceptance criteria & testing checklist

* Live editing updates preview instantly (<100–200ms on typical machine).
* Autosave persists to localStorage and restores on refresh.
* All form fields present and editable as specified.
* Adding/removing/reordering items updates preview and persists.
* PDF export produces a downloadable A4 PDF matching the preview.
* Mobile layout toggles between Edit and Preview and remains usable.
* No authentication prompts or account flows appear.

---

## 9. How to make this robust for automated code generation (Claude)

* Provide the canonical JSON shape and require every template function/component accept that JSON and render deterministically.
* Keep component responsibilities narrow and pure: forms write to store; preview components read only from store.
* Avoid runtime side effects in templates (no network calls). Keep all rendering deterministic based on the JSON input.
* Use explicit, small utility functions (e.g., `formatDate`, `safeJoinBullets`) to avoid ambiguity.

---

## 10. Deliverables for the portfolio

1. A GitHub repository containing the full source code with clear README explaining how to run locally.
2. A working deployed demo (static host) or clear instructions to run locally with `npm run dev`.
3. At least one exported PDF example generated from sample data saved in `examples/`.
4. Screenshots (desktop and mobile) showing visual parity to the reference page.

---

## 11. Final notes

This project is scoped to showcase frontend craftsmanship and strong attention to visual detail. Keep the implementation self-contained and avoid adding account or server complexity. When in doubt about a UI decision, consult the reference `https://app.cvmaker.com/#/personal-details/` and aim for visual parity.

---

*End of `context.md`.*
