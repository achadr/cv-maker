# CV Maker - Styling Guide (Design System)

**IMPORTANT**: This guide focuses ONLY on styling changes. Do not modify functionality, state management, or component logic.

## Design Inspiration Summary
- Clean, minimal aesthetic with generous white space
- Soft color palette: whites, light grays, and blue accents
- Borderless inputs with light gray backgrounds
- Split-screen layout with clear visual hierarchy
- Professional and modern look

---

## Color System

### Primary Colors
```css
Primary Blue: #0EA5E9 (buttons, links, active states)
Primary Blue Hover: #0284C7
Primary Blue Light: #BAE6FD (backgrounds)
```

### Neutral Colors
```css
/* Backgrounds */
Page Background: #F3F4F6 (gray-100)
Card Background: #FFFFFF
Input Background: #F9FAFB (gray-50)
Input Focus Background: #FFFFFF
Section Background: #FAFBFC

/* Text */
Heading Text: #111827 (gray-900)
Body Text: #374151 (gray-700)
Secondary Text: #6B7280 (gray-500)
Placeholder Text: #9CA3AF (gray-400)

/* Borders */
Border Light: #E5E7EB (gray-200)
Border Medium: #D1D5DB (gray-300)
```

### Status Colors
```css
Success/High Score (70-100%): #10B981 (green-500)
Warning/Medium Score (40-69%): #F59E0B (yellow-500)
Error/Low Score (0-39%): #EF4444 (red-500)
```

---

## Typography Scale

```css
/* Headings */
Page Title: text-3xl font-bold (30px)
Section Title: text-2xl font-semibold (24px)
Subsection: text-xl font-semibold (20px)
Card Title: text-lg font-medium (18px)

/* Body Text */
Regular: text-base (16px)
Small: text-sm (14px)
Extra Small: text-xs (12px)

/* Font Weights */
Bold: font-bold (700)
Semibold: font-semibold (600)
Medium: font-medium (500)
Regular: font-normal (400)
```

---

## Component-Specific Styling

### 1. Top Navigation Tabs

**Container:**
```jsx
className="bg-white border-b border-gray-200 shadow-sm"
```

**Tab List Container:**
```jsx
className="max-w-7xl mx-auto px-6 flex gap-8"
```

**Individual Tab (Inactive):**
```jsx
className="py-4 px-2 text-gray-600 font-medium text-sm border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300 transition-all cursor-pointer"
```

**Individual Tab (Active):**
```jsx
className="py-4 px-2 text-blue-600 font-semibold text-sm border-b-2 border-blue-600 cursor-pointer"
```

### 2. Resume Score Badge

**Container:**
```jsx
className="absolute top-4 right-6 bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-2 border border-gray-200"
```

**Score Display:**
```jsx
// Low score (0-39%)
className="text-sm font-bold text-red-500"

// Medium score (40-69%)
className="text-sm font-bold text-yellow-500"

// High score (70-100%)
className="text-sm font-bold text-green-500"
```

**Label Text:**
```jsx
className="text-xs text-gray-600"
```

### 3. Main Layout Container

**Page Wrapper:**
```jsx
className="min-h-screen bg-gray-100"
```

**Content Container:**
```jsx
className="max-w-7xl mx-auto p-6"
```

**Split Layout Grid:**
```jsx
className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6"
```

**Editor Panel (Left):**
```jsx
className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8"
```

**Preview Panel (Right):**
```jsx
className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 sticky top-6 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto"
```

### 4. Form Input Fields

**Text Input (Default):**
```jsx
className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
```

**Text Input (Error State):**
```jsx
className="w-full px-4 py-3 bg-red-50 border-0 rounded-lg text-gray-900 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
```

**Textarea:**
```jsx
className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
```

**Label:**
```jsx
className="block text-sm font-medium text-gray-700 mb-2"
```

**Helper Text:**
```jsx
className="text-xs text-gray-500 mt-1"
```

### 5. Section Headers

**Main Section Title:**
```jsx
className="text-2xl font-semibold text-gray-900 mb-2"
```

**Section Description:**
```jsx
className="text-sm text-gray-600 mb-6"
```

### 6. Buttons

**Primary Button (Next, Submit):**
```jsx
className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm"
```

**Secondary Button (Previous, Cancel):**
```jsx
className="px-6 py-3 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all"
```

**Danger Button (Delete):**
```jsx
className="px-4 py-2 bg-red-50 text-red-600 text-sm font-medium rounded-lg hover:bg-red-100 active:bg-red-200 transition-all"
```

**Add Button (Add Experience, Add Skill):**
```jsx
className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-lg hover:bg-blue-100 active:bg-blue-200 transition-all flex items-center gap-2"
```

**Icon Button:**
```jsx
className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
```

### 7. Photo Upload Area

**Upload Container (No Photo):**
```jsx
className="w-full h-48 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col items-center justify-center gap-3 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer"
```

**Upload Icon Container:**
```jsx
className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center"
```

**Upload Text:**
```jsx
className="text-sm font-medium text-gray-700"
```

**Photo Preview Container:**
```jsx
className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
```

**Remove Photo Button:**
```jsx
className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-md"
```

### 8. Collapsible Section

**Trigger Button:**
```jsx
className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-all cursor-pointer"
```

**Content Container:**
```jsx
className="mt-4 space-y-4 animate-fadeIn"
```

### 9. Cards (Experience, Education Entries)

**Card Container:**
```jsx
className="p-5 bg-gray-50 border border-gray-200 rounded-lg space-y-4 hover:shadow-md transition-all"
```

**Card Header:**
```jsx
className="flex items-center justify-between pb-3 border-b border-gray-200"
```

**Card Title:**
```jsx
className="text-base font-semibold text-gray-900"
```

**Card Badge:**
```jsx
className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded"
```

### 10. Bottom Navigation

**Container:**
```jsx
className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between"
```

**Button Container:**
```jsx
className="flex gap-3"
```

### 11. Template Selector Cards

**Grid Container:**
```jsx
className="grid grid-cols-2 md:grid-cols-4 gap-4"
```

**Template Card (Inactive):**
```jsx
className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 hover:shadow-md transition-all bg-white"
```

**Template Card (Active):**
```jsx
className="p-4 border-2 border-blue-500 rounded-xl cursor-pointer shadow-lg transition-all bg-blue-50"
```

**Template Preview Thumbnail:**
```jsx
className="w-full h-40 bg-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden"
```

**Template Name:**
```jsx
className="text-sm font-semibold text-gray-900 text-center"
```

### 12. CV Preview Panel

**Preview Container:**
```jsx
className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
```

**Preview Name (Empty State):**
```jsx
className="text-3xl font-bold text-gray-300 mb-2"
```

**Preview Name (Filled):**
```jsx
className="text-3xl font-bold text-gray-900 mb-2"
```

**Preview Section Header:**
```jsx
className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 mt-6"
```

**Preview Section Content:**
```jsx
className="text-sm text-gray-700 space-y-2"
```

### 13. Loading & Empty States

**Empty State Container:**
```jsx
className="py-12 text-center"
```

**Empty State Icon:**
```jsx
className="w-16 h-16 mx-auto text-gray-300 mb-4"
```

**Empty State Text:**
```jsx
className="text-gray-500 text-sm"
```

**Skeleton Loader:**
```jsx
className="animate-pulse bg-gray-200 rounded h-4 w-full"
```

---

## Spacing System

```jsx
// Component Spacing
Section Gap: space-y-6
Form Field Gap: space-y-4
Inline Elements: gap-3
Card Padding: p-5 or p-6
Page Padding: px-6 py-8

// Margins
Top of Section: mt-8
Between Sections: mb-6
Between Labels and Inputs: mb-2
```

---

## Border Radius Scale

```jsx
Small (Buttons, Badges): rounded-lg (8px)
Medium (Cards, Inputs): rounded-xl (12px)
Large (Panels): rounded-2xl (16px)
Full (Avatars, Icons): rounded-full
```

---

## Shadow Scale

```jsx
None: shadow-none
Small: shadow-sm
Default: shadow
Medium: shadow-md
Large: shadow-lg
XLarge: shadow-xl
```

---

## Responsive Breakpoints

```jsx
Mobile: default (< 640px)
Tablet: sm: (≥ 640px)
Desktop: lg: (≥ 1024px)
Large Desktop: xl: (≥ 1280px)

// Example Usage:
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="text-sm lg:text-base"
className="px-4 lg:px-8"
```

---

## Animation Classes

Add these to your Tailwind config or use inline:

```jsx
// Fade In
className="animate-fadeIn"

// Slide In
className="transition-all duration-300 ease-in-out"

// Hover Scale
className="hover:scale-105 transition-transform"

// Focus Ring
className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
```

---

## Icons Styling

**Icon Size Reference:**
```jsx
Small Icon: size={16}
Medium Icon: size={20}
Large Icon: size={24}

// Example:
<Plus size={20} className="text-blue-600" />
```

---

## Quick Copy-Paste Combos

### Full-Width Input Group:
```jsx
<div>
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Label Text
  </label>
  <input
    type="text"
    placeholder="Placeholder"
    className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
  />
</div>
```

### Two-Column Layout:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {/* Left column */}
  {/* Right column */}
</div>
```

### Action Buttons Row:
```jsx
<div className="flex items-center justify-between gap-3">
  <button className="px-6 py-3 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all">
    Previous
  </button>
  <button className="px-6 py-3 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all">
    Next: Experience
  </button>
</div>
```

---

## Terminal Claude Commands

Use these commands to apply styling updates:

```
"Update all input fields to use the borderless gray background style from the styling guide"

"Apply the tab navigation styling with blue underline for active state"

"Style the resume score badge with color-coded percentage display"

"Update all buttons to match the design system: primary blue, secondary white with border"

"Apply the card styling to experience and education entries"

"Update the preview panel with proper section headers and spacing"

"Style the photo upload area with dashed border and hover effect"

"Apply consistent spacing using the spacing system throughout the form"
```

---

## What NOT to Change

- Component structure
- State management logic
- Function implementations
- Props passing
- Event handlers
- Conditional rendering logic

## What TO Change

- className attributes only
- Color values
- Spacing (padding, margin, gap)
- Typography (size, weight)
- Borders and shadows
- Hover and focus states
- Transitions and animations

---

**Usage**: Copy the specific section styling you need and apply it to your existing components. Replace old className strings with the new ones provided here.