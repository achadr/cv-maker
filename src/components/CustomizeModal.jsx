import React from 'react';
import { useCVStore } from '../store/cvStore';
import { X, Palette, Type } from 'lucide-react';

const PRESET_COLORS = [
  { name: 'Blue', value: '#0f62fe' },
  { name: 'Indigo', value: '#4f46e5' },
  { name: 'Purple', value: '#9333ea' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Teal', value: '#14b8a6' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Gray', value: '#6b7280' },
  { name: 'Black', value: '#1f2937' },
];

const AVAILABLE_FONTS = [
  { name: 'Inter', value: 'Inter' },
  { name: 'Roboto', value: 'Roboto' },
  { name: 'Open Sans', value: 'Open Sans' },
  { name: 'Lato', value: 'Lato' },
  { name: 'Montserrat', value: 'Montserrat' },
  { name: 'Poppins', value: 'Poppins' },
  { name: 'Playfair Display', value: 'Playfair Display' },
  { name: 'Merriweather', value: 'Merriweather' },
  { name: 'Georgia', value: 'Georgia' },
  { name: 'Times New Roman', value: 'Times New Roman' },
];

export const CustomizeModal = ({ isOpen, onClose }) => {
  const { meta, updateMeta } = useCVStore();

  if (!isOpen) return null;

  const handleColorChange = (color) => {
    updateMeta('accentColor', color);
  };

  const handleFontChange = (font) => {
    updateMeta('font', font);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Customize CV</h2>
            <p className="text-sm text-gray-600 mt-1">
              Personalize colors and fonts for your CV
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Color Picker Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palette size={20} className="text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Accent Color</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Choose a color for headings, borders, and accent elements
            </p>

            {/* Preset Colors */}
            <div className="grid grid-cols-6 gap-3">
              {PRESET_COLORS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleColorChange(color.value)}
                  className={`group relative aspect-square rounded-lg transition-all hover:scale-110 ${
                    meta.accentColor === color.value
                      ? 'ring-4 ring-offset-2 ring-gray-400'
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {meta.accentColor === color.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Custom Color Input */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or choose custom color:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={meta.accentColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="w-16 h-10 rounded border border-gray-300 cursor-pointer"
                />
                <input
                  type="text"
                  value={meta.accentColor}
                  onChange={(e) => handleColorChange(e.target.value)}
                  placeholder="#0f62fe"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Font Selector Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Type size={20} className="text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Font Family</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Select a font for your entire CV
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {AVAILABLE_FONTS.map((font) => (
                <button
                  key={font.value}
                  onClick={() => handleFontChange(font.value)}
                  className={`text-left px-4 py-3 rounded-lg border-2 transition-all ${
                    meta.font === font.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ fontFamily: font.value }}
                >
                  <span className="text-base font-medium">{font.name}</span>
                  <div className="text-sm text-gray-600 mt-1">
                    The quick brown fox jumps
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
