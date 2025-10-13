import React from 'react';
import { Save, FileDown, Palette } from 'lucide-react';

export const Header = ({ saveStatus, onExportPDF, onTemplateClick, isExportDisabled, exportDisabledMessage }) => {
  const getSaveStatusText = () => {
    switch (saveStatus) {
      case 'saving':
        return 'Saving...';
      case 'saved':
        return 'Saved';
      case 'error':
        return 'Save failed';
      default:
        return '';
    }
  };

  const getSaveStatusColor = () => {
    switch (saveStatus) {
      case 'saving':
        return 'text-yellow-600';
      case 'saved':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-gray-900">CV Maker</h1>
            <div className={`flex items-center gap-2 text-sm ${getSaveStatusColor()}`}>
              <Save size={16} />
              <span>{getSaveStatusText()}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onTemplateClick}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              title="Change template"
            >
              <Palette size={16} />
              <span>Template</span>
            </button>

            <button
              onClick={onExportPDF}
              disabled={isExportDisabled}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isExportDisabled
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-blue-700'
              }`}
              title={isExportDisabled ? exportDisabledMessage : 'Export your CV as PDF'}
            >
              <FileDown size={16} />
              <span>Export PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
