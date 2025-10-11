import React from 'react';
import { useCVStore } from '../store/cvStore';
import { Input } from './shared/Input';
import { GraduationCap, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export const EducationForm = () => {
  const { education, addEducation, updateEducation, removeEducation, moveEducation } =
    useCVStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Education</h2>
        </div>
        <button
          onClick={addEducation}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-primary border border-primary rounded-md hover:bg-blue-50 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {education.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-8">
          No education added yet. Click "Add" to get started.
        </p>
      )}

      <div className="space-y-4">
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="border border-gray-200 rounded-lg p-4 space-y-3 bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Education {index + 1}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveEducation(edu.id, 'up')}
                  disabled={index === 0}
                  className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <ChevronUp size={18} />
                </button>
                <button
                  onClick={() => moveEducation(edu.id, 'down')}
                  disabled={index === education.length - 1}
                  className="p-1 text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <ChevronDown size={18} />
                </button>
                <button
                  onClick={() => removeEducation(edu.id)}
                  className="p-1 text-red-600 hover:text-red-700"
                  title="Remove"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <Input
              label="Degree"
              value={edu.degree}
              onChange={(value) => updateEducation(edu.id, 'degree', value)}
              placeholder="Bachelor of Science in Computer Science"
            />

            <Input
              label="Institution"
              value={edu.school}
              onChange={(value) => updateEducation(edu.id, 'school', value)}
              placeholder="University Name"
            />

            <Input
              label="Location"
              value={edu.location}
              onChange={(value) => updateEducation(edu.id, 'location', value)}
              placeholder="Boston, MA"
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Start Date"
                value={edu.startDate}
                onChange={(value) => updateEducation(edu.id, 'startDate', value)}
                placeholder="2016"
              />
              <Input
                label="End Date"
                value={edu.endDate}
                onChange={(value) => updateEducation(edu.id, 'endDate', value)}
                placeholder="2020"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
