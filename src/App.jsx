import React, { useState } from 'react'
import { AppShell } from './components/AppShell'
import { EditorColumn } from './components/EditorColumn'
import { PreviewColumn } from './components/PreviewColumn'
import { CVPreview } from './components/CVPreview'
import { PersonalForm } from './components/PersonalForm'
import { ExperienceForm } from './components/ExperienceForm'
import { EducationForm } from './components/EducationForm'
import { SkillsForm } from './components/SkillsForm'
import { LanguagesForm } from './components/LanguagesForm'
import { TemplateSelector } from './components/TemplateSelector'
import { CustomizeModal } from './components/CustomizeModal'
import { exportToPDF } from './services/pdfExporter'
import { validateCV, getMissingFieldsMessage } from './utils/validation'
import { exportToJSON, importFromJSON } from './utils/jsonExport'
import { useCVStore } from './store/cvStore'
import { Edit, Eye } from 'lucide-react'

function App() {
  const [mobileView, setMobileView] = useState('edit') // 'edit' or 'preview'
  const [isTemplateSelectorOpen, setIsTemplateSelectorOpen] = useState(false)
  const [isCustomizeModalOpen, setIsCustomizeModalOpen] = useState(false)

  // Get CV data for validation
  const cvData = useCVStore()
  const validation = validateCV(cvData)
  const validationMessage = getMissingFieldsMessage(validation.missingFields)

  const handleExportPDF = async () => {
    // Don't export if CV is invalid
    if (!validation.isValid) {
      alert(validationMessage)
      return
    }

    const result = await exportToPDF('cv-preview')
    if (!result.success) {
      alert('PDF export failed. Please try using Print (Ctrl+P) instead.')
    }
  }

  const handleTemplateClick = () => {
    setIsTemplateSelectorOpen(true)
  }

  const handleCloseTemplateSelector = () => {
    setIsTemplateSelectorOpen(false)
  }

  const handleCustomizeClick = () => {
    setIsCustomizeModalOpen(true)
  }

  const handleCloseCustomizeModal = () => {
    setIsCustomizeModalOpen(false)
  }

  const handleExportJSON = () => {
    const result = exportToJSON(cvData, 'my-cv.json')
    if (result.success) {
      alert('CV data exported successfully!')
    } else {
      alert('Failed to export CV data')
    }
  }

  const handleImportJSON = async (file) => {
    if (!file) return

    const result = await importFromJSON(file)

    if (result.success) {
      // Load the imported data into the store
      cvData.loadState(result.data)
      alert('CV data imported successfully!')
    } else {
      alert(`Import failed: ${result.error}`)
    }
  }

  return (
    <AppShell
      onExportPDF={handleExportPDF}
      onTemplateClick={handleTemplateClick}
      onCustomizeClick={handleCustomizeClick}
      onExportJSON={handleExportJSON}
      onImportJSON={handleImportJSON}
      isExportDisabled={!validation.isValid}
      exportDisabledMessage={validationMessage}
    >
      {/* Mobile Toggle */}
      <div className="lg:hidden mb-4">
        <div className="bg-white rounded-lg shadow-sm p-1 flex gap-1">
          <button
            onClick={() => setMobileView('edit')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
              mobileView === 'edit'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Edit size={16} />
            <span>Edit</span>
          </button>
          <button
            onClick={() => setMobileView('preview')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
              mobileView === 'preview'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Eye size={16} />
            <span>Preview</span>
          </button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor Column */}
        <div className={`${mobileView === 'edit' ? 'block' : 'hidden'} lg:block`}>
          <EditorColumn>
            <PersonalForm />
            <div className="border-t border-gray-200 my-6"></div>
            <ExperienceForm />
            <div className="border-t border-gray-200 my-6"></div>
            <EducationForm />
            <div className="border-t border-gray-200 my-6"></div>
            <SkillsForm />
            <div className="border-t border-gray-200 my-6"></div>
            <LanguagesForm />
          </EditorColumn>
        </div>

        {/* Preview Column */}
        <div className={`${mobileView === 'preview' ? 'block' : 'hidden'} lg:block`}>
          <PreviewColumn>
            <CVPreview />
          </PreviewColumn>
        </div>
      </div>

      {/* Template Selector Modal */}
      <TemplateSelector
        isOpen={isTemplateSelectorOpen}
        onClose={handleCloseTemplateSelector}
      />

      {/* Customize Modal */}
      <CustomizeModal
        isOpen={isCustomizeModalOpen}
        onClose={handleCloseCustomizeModal}
      />
    </AppShell>
  )
}

export default App
