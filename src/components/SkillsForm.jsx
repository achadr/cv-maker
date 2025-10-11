import React from 'react';
import { useCVStore } from '../store/cvStore';
import { Input } from './shared/Input';
import { Code, Plus, Trash2 } from 'lucide-react';

export const SkillsForm = () => {
  const { skills, addSkill, updateSkill, removeSkill } = useCVStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
        </div>
        <button
          onClick={addSkill}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-primary border border-primary rounded-md hover:bg-blue-50 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {skills.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-8">
          No skills added yet. Click "Add" to get started.
        </p>
      )}

      <div className="space-y-3">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input
                value={skill.name}
                onChange={(value) => updateSkill(skill.id, 'name', value)}
                placeholder="e.g. React, TypeScript, Python"
              />
              <select
                value={skill.level}
                onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <button
              onClick={() => removeSkill(skill.id)}
              className="p-2 text-gray-400 hover:text-red-600"
              title="Remove skill"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
