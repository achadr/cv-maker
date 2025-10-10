import React, { useState } from 'react'
import { Download, FileText, Trash2 } from 'lucide-react'
import PersonalInfoForm from './Editor/PersonalInfoForm'
import ExperienceForm from './Editor/ExperienceForm'
import EducationForm from './Editor/EducationForm'
import SkillsForm from './Editor/SkillsForm'
import LanguagesForm from './Editor/LanguagesForm'
import ModernTemplate from './Preview/ModernTemplate'
import ClassicTemplate from './Preview/ClassicTemplate'
import CreativeTemplate from './Preview/CreativeTemplate'
import ProfessionalTemplate from './Preview/ProfessionalTemplate'
import TemplateSelector from './TemplateSelector'
import { sampleData } from '../utils/sampleData'

function CVMaker() {
  // Active section state
  const [activeSection, setActiveSection] = useState('personal')
  const [selectedTemplate, setSelectedTemplate] = useState('modern')

  // Personal Information State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    website: '',
    summary: '',
    photo: null
  })

  // Experience State
  const [experience, setExperience] = useState([])

  // Education State
  const [education, setEducation] = useState([])

  // Skills State
  const [skills, setSkills] = useState([])

  // Languages State
  const [languages, setLanguages] = useState([])

  // Personal Info Handlers
  const updatePersonalInfo = (field, value) => {
    setPersonalInfo(prev => ({ ...prev, [field]: value }))
  }

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPersonalInfo(prev => ({ ...prev, photo: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = () => {
    setPersonalInfo(prev => ({ ...prev, photo: null }))
  }

  // Experience Handlers
  const addExperience = () => {
    setExperience(prev => [...prev, {
      id: Date.now(),
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    }])
  }

  const updateExperience = (id, field, value) => {
    setExperience(prev => prev.map(exp =>
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  const deleteExperience = (id) => {
    setExperience(prev => prev.filter(exp => exp.id !== id))
  }

  // Education Handlers
  const addEducation = () => {
    setEducation(prev => [...prev, {
      id: Date.now(),
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: ''
    }])
  }

  const updateEducation = (id, field, value) => {
    setEducation(prev => prev.map(edu =>
      edu.id === id ? { ...edu, [field]: value } : edu
    ))
  }

  const deleteEducation = (id) => {
    setEducation(prev => prev.filter(edu => edu.id !== id))
  }

  // Skills Handlers
  const addSkill = () => {
    setSkills(prev => [...prev, {
      id: Date.now(),
      name: '',
      level: 'intermediate'
    }])
  }

  const updateSkill = (id, field, value) => {
    setSkills(prev => prev.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    ))
  }

  const deleteSkill = (id) => {
    setSkills(prev => prev.filter(skill => skill.id !== id))
  }

  // Languages Handlers
  const addLanguage = () => {
    setLanguages(prev => [...prev, {
      id: Date.now(),
      name: '',
      proficiency: 'intermediate'
    }])
  }

  const updateLanguage = (id, field, value) => {
    setLanguages(prev => prev.map(lang =>
      lang.id === id ? { ...lang, [field]: value } : lang
    ))
  }

  const deleteLanguage = (id) => {
    setLanguages(prev => prev.filter(lang => lang.id !== id))
  }

  // PDF Export Handler
  const handleExport = () => {
    window.print()
  }

  // Load Sample Data Handler
  const loadSampleData = () => {
    setPersonalInfo(sampleData.personalInfo)
    setExperience(sampleData.experience)
    setEducation(sampleData.education)
    setSkills(sampleData.skills)
    setLanguages(sampleData.languages)
    setActiveSection('personal')
  }

  // Clear All Data Handler
  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      setPersonalInfo({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        website: '',
        summary: '',
        photo: null
      })
      setExperience([])
      setEducation([])
      setSkills([])
      setLanguages([])
      setActiveSection('personal')
    }
  }

  const sections = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'template', label: 'Template' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">CV Maker</h1>
            <div className="flex items-center gap-3">
              <button
                onClick={loadSampleData}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm"
              >
                <FileText size={18} />
                Load Sample
              </button>
              <button
                onClick={clearAllData}
                className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors text-sm"
              >
                <Trash2 size={18} />
                Clear All
              </button>
              <button
                onClick={handleExport}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Download size={20} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Editor */}
          <div className="no-print">
            {/* Section Tabs */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex flex-wrap border-b border-gray-200">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'border-b-2 border-indigo-600 text-indigo-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <div className="p-6 max-h-[calc(100vh-280px)] overflow-y-auto">
                {activeSection === 'personal' && (
                  <PersonalInfoForm
                    personalInfo={personalInfo}
                    updatePersonalInfo={updatePersonalInfo}
                    handlePhotoUpload={handlePhotoUpload}
                    removePhoto={removePhoto}
                  />
                )}

                {activeSection === 'experience' && (
                  <ExperienceForm
                    experience={experience}
                    addExperience={addExperience}
                    updateExperience={updateExperience}
                    deleteExperience={deleteExperience}
                  />
                )}

                {activeSection === 'education' && (
                  <EducationForm
                    education={education}
                    addEducation={addEducation}
                    updateEducation={updateEducation}
                    deleteEducation={deleteEducation}
                  />
                )}

                {activeSection === 'skills' && (
                  <SkillsForm
                    skills={skills}
                    addSkill={addSkill}
                    updateSkill={updateSkill}
                    deleteSkill={deleteSkill}
                  />
                )}

                {activeSection === 'languages' && (
                  <LanguagesForm
                    languages={languages}
                    addLanguage={addLanguage}
                    updateLanguage={updateLanguage}
                    deleteLanguage={deleteLanguage}
                  />
                )}

                {activeSection === 'template' && (
                  <TemplateSelector
                    selectedTemplate={selectedTemplate}
                    setSelectedTemplate={setSelectedTemplate}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div>
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {selectedTemplate === 'modern' && (
                <ModernTemplate
                  cvData={{ personalInfo, experience, education, skills, languages }}
                />
              )}
              {selectedTemplate === 'classic' && (
                <ClassicTemplate
                  cvData={{ personalInfo, experience, education, skills, languages }}
                />
              )}
              {selectedTemplate === 'creative' && (
                <CreativeTemplate
                  cvData={{ personalInfo, experience, education, skills, languages }}
                />
              )}
              {selectedTemplate === 'professional' && (
                <ProfessionalTemplate
                  cvData={{ personalInfo, experience, education, skills, languages }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVMaker
