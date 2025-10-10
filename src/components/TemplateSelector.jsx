import React from 'react'
import { Check } from 'lucide-react'

function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Gradient header with contemporary design',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'classic',
      name: 'Classic',
      description: 'Traditional centered layout',
      color: 'from-gray-700 to-gray-900'
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Bold and vibrant for creative industries',
      color: 'from-purple-600 via-pink-500 to-rose-500'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Corporate sidebar design',
      color: 'from-blue-800 to-blue-950'
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Template</h2>
      <p className="text-sm text-gray-600 mb-4">
        Select a template style that best represents your professional brand
      </p>

      <div className="grid grid-cols-1 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelectedTemplate(template.id)}
            className={`relative text-left p-4 rounded-lg border-2 transition-all ${
              selectedTemplate === template.id
                ? 'border-indigo-600 bg-indigo-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            {/* Gradient Preview Bar */}
            <div className={`h-12 rounded-md bg-gradient-to-r ${template.color} mb-3`} />

            {/* Template Info */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-xs text-gray-600">{template.description}</p>
              </div>

              {/* Selected Indicator */}
              {selectedTemplate === template.id && (
                <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default TemplateSelector
