import React from 'react'
import { Upload, X } from 'lucide-react'

function PersonalInfoForm({
  personalInfo,
  updatePersonalInfo,
  handlePhotoUpload,
  removePhoto
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>

      {/* Photo Upload */}
      <div className="flex flex-col items-center mb-6">
        {personalInfo.photo ? (
          <div className="relative">
            <img
              src={personalInfo.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200"
            />
            <button
              onClick={removePhoto}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              title="Remove photo"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="w-32 h-32 rounded-full border-4 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors">
            <Upload size={24} className="text-gray-400" />
            <span className="text-xs text-gray-500 mt-2">Upload Photo</span>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
          placeholder="John Doe"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo('email', e.target.value)}
          placeholder="john.doe@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone *
        </label>
        <input
          type="tel"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo('phone', e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location *
        </label>
        <input
          type="text"
          value={personalInfo.location}
          onChange={(e) => updatePersonalInfo('location', e.target.value)}
          placeholder="New York, NY"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* LinkedIn */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          LinkedIn URL
        </label>
        <input
          type="url"
          value={personalInfo.linkedin}
          onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
          placeholder="https://linkedin.com/in/johndoe"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Website */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website / Portfolio
        </label>
        <input
          type="url"
          value={personalInfo.website}
          onChange={(e) => updatePersonalInfo('website', e.target.value)}
          placeholder="https://johndoe.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Professional Summary */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Professional Summary
        </label>
        <textarea
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo('summary', e.target.value)}
          placeholder="A brief summary of your professional background and career objectives..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
        />
      </div>
    </div>
  )
}

export default PersonalInfoForm
