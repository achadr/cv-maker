import React from 'react';
import { useCVStore } from '../store/cvStore';
import { Input } from './shared/Input';
import { Languages, Plus, Trash2 } from 'lucide-react';

export const LanguagesForm = () => {
  const { languages, addLanguage, updateLanguage, removeLanguage } = useCVStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Languages size={20} className="text-primary" />
          <h2 className="text-lg font-semibold text-gray-900">Languages</h2>
        </div>
        <button
          onClick={addLanguage}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-primary border border-primary rounded-md hover:bg-blue-50 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>

      {languages.length === 0 && (
        <p className="text-sm text-gray-500 text-center py-8">
          No languages added yet. Click "Add" to get started.
        </p>
      )}

      <div className="space-y-3">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
          >
            <div className="flex-1 grid grid-cols-2 gap-3">
              <Input
                value={lang.lang}
                onChange={(value) => updateLanguage(lang.id, 'lang', value)}
                placeholder="e.g. English, Spanish"
              />
              <select
                value={lang.level}
                onChange={(e) => updateLanguage(lang.id, 'level', e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="Basic">Basic</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Native">Native / Fluent</option>
              </select>
            </div>
            <button
              onClick={() => removeLanguage(lang.id)}
              className="p-2 text-gray-400 hover:text-red-600"
              title="Remove language"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
