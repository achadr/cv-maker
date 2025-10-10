import React from 'react'
import { Plus, Trash2 } from 'lucide-react'

function LanguagesForm({
  languages,
  addLanguage,
  updateLanguage,
  deleteLanguage
}) {
  const proficiencyLevels = [
    { value: 'basic', label: 'Basic' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'native', label: 'Native' }
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Languages</h2>
        <button
          onClick={addLanguage}
          className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Language
        </button>
      </div>

      {languages.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No languages added yet.</p>
          <p className="text-sm mt-2">Click "Add Language" to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {languages.map((language) => (
            <div key={language.id} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 bg-gray-50">
              {/* Language Name */}
              <div className="flex-1">
                <input
                  type="text"
                  value={language.name}
                  onChange={(e) => updateLanguage(language.id, 'name', e.target.value)}
                  placeholder="e.g., English, Spanish"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Proficiency Level */}
              <div className="w-40">
                <select
                  value={language.proficiency}
                  onChange={(e) => updateLanguage(language.id, 'proficiency', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  {proficiencyLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteLanguage(language.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-2"
                title="Delete language"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguagesForm
