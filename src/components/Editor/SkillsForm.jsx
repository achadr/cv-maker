import React from 'react'
import { Plus, Trash2 } from 'lucide-react'

function SkillsForm({
  skills,
  addSkill,
  updateSkill,
  deleteSkill
}) {
  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm"
        >
          <Plus size={16} />
          Add Skill
        </button>
      </div>

      {skills.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No skills added yet.</p>
          <p className="text-sm mt-2">Click "Add Skill" to get started.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 bg-gray-50">
              {/* Skill Name */}
              <div className="flex-1">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                  placeholder="e.g., JavaScript, Project Management"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Skill Level */}
              <div className="w-40">
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                >
                  {skillLevels.map(level => (
                    <option key={level.value} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteSkill(skill.id)}
                className="text-red-500 hover:text-red-700 transition-colors p-2"
                title="Delete skill"
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

export default SkillsForm
