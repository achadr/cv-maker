import React from 'react';
import { useCVStore } from '../store/cvStore';
import { Input } from './shared/Input';
import { TextArea } from './shared/TextArea';
import { Briefcase, Plus, Trash2, ChevronUp, ChevronDown, X } from 'lucide-react';

export const ExperienceForm = () => {
  const {
    experience,
    addExperience,
    updateExperience,
    removeExperience,
    moveExperience,
    updateExperienceBullet,
    addExperienceBullet,
    removeExperienceBullet,
  } = useCVStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Briefcase size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Work Experience</h2>
        </div>
        <button
          onClick={addExperience}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-primary border border-primary rounded-md hover:bg-blue-50 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {experience.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-8">
          No experience added yet. Click "Add" to get started.
        </p>
      )}

      <div className="space-y-4">
        {experience.map((exp, index) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Experience {index + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveExperience(exp.id, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  onClick={() => moveExperience(exp.id, 'down')}
                  disabled={index === experience.length - 1}
                  className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <ChevronDown size={18} />
                </button>
                <button
                  onClick={() => removeExperience(exp.id)}
                  className="p-1 text-red-600 hover:text-red-700"
                  title="Remove"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <Input
              label="Job Title"
              value={exp.title}
              onChange={(value) => updateExperience(exp.id, 'title', value)}
              placeholder="Software Engineer"
            />

            <Input
              label="Company"
              value={exp.company}
              onChange={(value) => updateExperience(exp.id, 'company', value)}
              placeholder="Tech Corp"
            />

            <Input
              label="Location"
              value={exp.location}
              onChange={(value) => updateExperience(exp.id, 'location', value)}
              placeholder="San Francisco, CA"
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Start Date"
                value={exp.startDate}
                onChange={(value) => updateExperience(exp.id, 'startDate', value)}
                placeholder="Jan 2020"
              />
              <Input
                label="End Date"
                value={exp.endDate}
                onChange={(value) => updateExperience(exp.id, 'endDate', value)}
                placeholder="Present"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Responsibilities & Achievements
                </label>
                <button
                  onClick={() => addExperienceBullet(exp.id)}
                  className="text-xs text-primary hover:text-blue-700 font-medium"
                >
                  + Add bullet
                </button>
              </div>
              <div className="space-y-2">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex gap-2">
                    <input
                      type="text"
                      value={bullet}
                      onChange={(e) =>
                        updateExperienceBullet(exp.id, bulletIndex, e.target.value)
                      }
                      placeholder="Describe your achievement or responsibility..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    {exp.bullets.length > 1 && (
                      <button
                        onClick={() => removeExperienceBullet(exp.id, bulletIndex)}
                        className="p-2 text-gray-400 hover:text-red-600"
                        title="Remove bullet"
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
