import React, { useRef } from 'react';
import { Save, FileDown, Palette, Upload, Download, Paintbrush } from 'lucide-react';

export const Header = ({ saveStatus, onExportPDF, onTemplateClick, onCustomizeClick, onExportJSON, onImportJSON, isExportDisabled, exportDisabledMessage }) => {
  const fileInputRef = useRef(null);
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

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onImportJSON(file);
      // Reset file input so the same file can be imported again
      e.target.value = '';
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
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleFileChange}
              className="hidden"
            />

            <button
              onClick={handleImportClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              title="Import CV from JSON file"
            >
              <Upload size={16} />
              <span className="hidden sm:inline">Import</span>
            </button>

            <button
              onClick={onExportJSON}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              title="Export CV as JSON file"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Export</span>
            </button>

            <button
              onClick={onTemplateClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              title="Change template"
            >
              <Palette size={16} />
              <span className="hidden sm:inline">Template</span>
            </button>

            <button
              onClick={onCustomizeClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              title="Customize colors and fonts"
            >
              <Paintbrush size={16} />
              <span className="hidden sm:inline">Customize</span>
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
              <span>PDF</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
