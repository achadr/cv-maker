import React from 'react';
import { useCVStore } from '../store/cvStore';
import { X, Check } from 'lucide-react';

const templates = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional layout with clean sections',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white p-4">
        <div className="text-xs font-bold mb-2">Achraf Bougattaya</div>
        <div className="text-[8px] text-gray-600 mb-2">Software Engineer</div>
        <div className="border-b border-gray-300 mb-2"></div>
        <div className="space-y-2">
          <div className="h-2 bg-gray-200 rounded w-full"></div>
          <div className="h-2 bg-gray-200 rounded w-5/6"></div>
          <div className="h-2 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Bold sidebar with vibrant colors',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white flex">
        <div className="w-1/3 bg-gradient-to-b from-blue-900 to-blue-800 p-2">
          <div className="text-[8px] font-bold text-white mb-1">Achraf Bougattaya</div>
          <div className="space-y-1 mt-2">
            <div className="h-1.5 bg-blue-700 rounded"></div>
            <div className="h-1.5 bg-blue-700 rounded"></div>
          </div>
        </div>
        <div className="flex-1 p-2">
          <div className="space-y-1.5">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
            <div className="h-2 bg-gray-200 rounded w-3/5"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean and elegant with lots of whitespace',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white p-4">
        <div className="text-center mb-3">
          <div className="text-xs font-light mb-1">Achraf Bougattaya</div>
          <div className="text-[8px] text-gray-600">Software Engineer</div>
        </div>
        <div className="border-b border-gray-200 mb-3"></div>
        <div className="space-y-2">
          <div className="pl-2 border-l-2 border-gray-300 space-y-1">
            <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
            <div className="h-1.5 bg-gray-200 rounded w-3/5"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Premium two-column layout for leadership roles',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-2 border-b-2 border-blue-600">
          <div className="text-xs font-bold text-blue-600 mb-1">Achraf Bougattaya</div>
          <div className="text-[8px] text-gray-700 font-semibold">Chief Executive Officer</div>
        </div>
        <div className="flex">
          <div className="flex-1 p-2 space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full"></div>
            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="w-1/3 bg-blue-50 p-2 border-l border-blue-200 space-y-1.5">
            <div className="h-1.5 bg-blue-200 rounded w-full"></div>
            <div className="h-1.5 bg-blue-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold typography and unique layout for creatives',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white relative">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 pb-4 relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)' }}>
          <div className="text-xs font-black text-white mb-1">ACHRAF BOUGATTAYA</div>
          <div className="text-[8px] text-white bg-white bg-opacity-20 px-2 py-0.5 inline-block rounded">CREATIVE</div>
        </div>
        <div className="p-2 pt-1">
          <div className="flex gap-2">
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 bg-purple-200 rounded w-full"></div>
              <div className="h-1.5 bg-purple-200 rounded w-4/5"></div>
            </div>
            <div className="w-1/3 space-y-1">
              <div className="h-1 bg-pink-200 rounded w-full"></div>
              <div className="h-1 bg-pink-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'compact',
    name: 'Compact',
    description: 'Dense layout that fits more content on one page',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white p-2">
        <div className="border-b-2 border-gray-400 pb-1 mb-2">
          <div className="text-xs font-bold mb-0.5">Achraf Bougattaya</div>
          <div className="text-[7px] text-gray-600">Software Engineer</div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="col-span-2 space-y-1">
            <div className="h-1 bg-gray-300 rounded w-full"></div>
            <div className="h-1 bg-gray-300 rounded w-5/6"></div>
            <div className="h-1 bg-gray-300 rounded w-4/6"></div>
          </div>
          <div className="space-y-1">
            <div className="h-1 bg-gray-200 rounded w-full"></div>
            <div className="h-1 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated design with refined typography',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white p-3">
        <div className="text-center border-b border-gray-300 pb-2 mb-2">
          <div className="text-xs font-light mb-1" style={{ fontFamily: 'Georgia, serif' }}>Achraf Bougattaya</div>
          <div className="text-[8px] text-gray-600 italic">Software Engineer</div>
        </div>
        <div className="space-y-2">
          <div className="border-l-2 border-gray-400 pl-2 space-y-1">
            <div className="h-1.5 bg-gray-200 rounded w-full"></div>
            <div className="h-1.5 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'simple',
    name: 'Simple',
    description: 'Ultra-minimalist with no styling distractions',
    preview: (
      <div className="border border-gray-200 rounded overflow-hidden h-48 bg-white p-3">
        <div className="mb-2">
          <div className="text-xs font-bold mb-1">Achraf Bougattaya</div>
          <div className="text-[8px] text-gray-700 mb-1">Software Engineer</div>
          <div className="text-[7px] text-gray-600">achraf@email.com</div>
        </div>
        <div className="border-b border-gray-300 mb-2"></div>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="h-1.5 bg-gray-200 rounded w-full"></div>
            <div className="h-1.5 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    ),
  },
];

export const TemplateSelector = ({ isOpen, onClose }) => {
  const { meta, updateMeta } = useCVStore();

  if (!isOpen) return null;

  const handleSelectTemplate = (templateId) => {
    updateMeta('template', templateId);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Choose Template</h2>
            <p className="text-sm text-gray-600 mt-1">
              Select a template to change your CV's appearance
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

        {/* Templates Grid */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className={`relative text-left rounded-lg border-2 transition-all hover:shadow-lg ${
                meta.template === template.id
                  ? 'border-blue-600 shadow-md'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Selected Badge */}
              {meta.template === template.id && (
                <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1 shadow-lg z-10">
                  <Check size={16} />
                </div>
              )}

              {/* Preview */}
              <div className="p-3">{template.preview}</div>

              {/* Template Info */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600">{template.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
