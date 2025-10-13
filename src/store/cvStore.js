import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  meta: {
    template: 'classic',
    accentColor: '#0f62fe', // Primary blue color
    font: 'Inter',
    pageSize: 'A4',
    margin: 'normal',
  },
  personal: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: '',
    photo: '', // Base64 encoded image
  },
  summary: '',
  experience: [],
  education: [],
  skills: [],
  projects: [],
  languages: [],
};

export const useCVStore = create((set, get) => ({
  ...initialState,

  // Personal Info Actions
  updatePersonal: (field, value) =>
    set((state) => ({
      personal: { ...state.personal, [field]: value },
    })),

  // Summary Actions
  updateSummary: (value) => set({ summary: value }),

  // Experience Actions
  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        {
          id: uuidv4(),
          title: '',
          company: '',
          startDate: '',
          endDate: '',
          location: '',
          bullets: [''],
        },
      ],
    })),

  updateExperience: (id, field, value) =>
    set((state) => ({
      experience: state.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    })),

  updateExperienceBullet: (id, index, value) =>
    set((state) => ({
      experience: state.experience.map((exp) => {
        if (exp.id === id) {
          const newBullets = [...exp.bullets];
          newBullets[index] = value;
          return { ...exp, bullets: newBullets };
        }
        return exp;
      }),
    })),

  addExperienceBullet: (id) =>
    set((state) => ({
      experience: state.experience.map((exp) =>
        exp.id === id ? { ...exp, bullets: [...exp.bullets, ''] } : exp
      ),
    })),

  removeExperienceBullet: (id, index) =>
    set((state) => ({
      experience: state.experience.map((exp) => {
        if (exp.id === id) {
          const newBullets = exp.bullets.filter((_, i) => i !== index);
          return { ...exp, bullets: newBullets };
        }
        return exp;
      }),
    })),

  removeExperience: (id) =>
    set((state) => ({
      experience: state.experience.filter((exp) => exp.id !== id),
    })),

  moveExperience: (id, direction) =>
    set((state) => {
      const index = state.experience.findIndex((exp) => exp.id === id);
      if (
        (direction === 'up' && index === 0) ||
        (direction === 'down' && index === state.experience.length - 1)
      ) {
        return state;
      }
      const newExperience = [...state.experience];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      [newExperience[index], newExperience[newIndex]] = [
        newExperience[newIndex],
        newExperience[index],
      ];
      return { experience: newExperience };
    }),

  // Education Actions
  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        {
          id: uuidv4(),
          school: '',
          degree: '',
          startDate: '',
          endDate: '',
          location: '',
        },
      ],
    })),

  updateEducation: (id, field, value) =>
    set((state) => ({
      education: state.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    })),

  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((edu) => edu.id !== id),
    })),

  moveEducation: (id, direction) =>
    set((state) => {
      const index = state.education.findIndex((edu) => edu.id === id);
      if (
        (direction === 'up' && index === 0) ||
        (direction === 'down' && index === state.education.length - 1)
      ) {
        return state;
      }
      const newEducation = [...state.education];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      [newEducation[index], newEducation[newIndex]] = [
        newEducation[newIndex],
        newEducation[index],
      ];
      return { education: newEducation };
    }),

  // Skills Actions
  addSkill: () =>
    set((state) => ({
      skills: [...state.skills, { id: uuidv4(), name: '', level: 'Intermediate' }],
    })),

  updateSkill: (id, field, value) =>
    set((state) => ({
      skills: state.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    })),

  removeSkill: (id) =>
    set((state) => ({
      skills: state.skills.filter((skill) => skill.id !== id),
    })),

  // Languages Actions
  addLanguage: () =>
    set((state) => ({
      languages: [...state.languages, { id: uuidv4(), lang: '', level: 'Intermediate' }],
    })),

  updateLanguage: (id, field, value) =>
    set((state) => ({
      languages: state.languages.map((lang) =>
        lang.id === id ? { ...lang, [field]: value } : lang
      ),
    })),

  removeLanguage: (id) =>
    set((state) => ({
      languages: state.languages.filter((lang) => lang.id !== id),
    })),

  // Projects Actions
  addProject: () =>
    set((state) => ({
      projects: [...state.projects, { id: uuidv4(), name: '', description: '' }],
    })),

  updateProject: (id, field, value) =>
    set((state) => ({
      projects: state.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    })),

  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((proj) => proj.id !== id),
    })),

  // Meta Actions
  updateMeta: (field, value) =>
    set((state) => ({
      meta: { ...state.meta, [field]: value },
    })),

  // Load/Save State
  loadState: (state) => set(state),

  resetState: () => set(initialState),

  // Get entire state for persistence
  getState: () => get(),
}));
