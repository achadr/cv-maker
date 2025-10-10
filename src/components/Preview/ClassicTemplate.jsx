import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

function ClassicTemplate({ cvData }) {
  const { personalInfo, experience, education, skills, languages } = cvData

  return (
    <div className="bg-white w-full h-full text-sm">
      {/* Header - Centered Layout */}
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6 px-6 pt-6">
        {/* Profile Photo */}
        {personalInfo.photo && (
          <img
            src={personalInfo.photo}
            alt={personalInfo.fullName}
            className="w-24 h-24 rounded-full mx-auto mb-3 border-2 border-gray-300 object-cover"
          />
        )}

        <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wide mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={12} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={12} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={12} />
              <span className="truncate max-w-[150px]">{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center gap-1">
              <Globe size={12} />
              <span className="truncate max-w-[150px]">{personalInfo.website}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-6 space-y-5">
        {/* Professional Summary */}
        {personalInfo.summary && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-3">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{exp.title || 'Job Title'}</h3>
                    <span className="text-xs text-gray-600">
                      {exp.startDate && new Date(exp.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {exp.startDate && (exp.endDate || exp.current) && ' - '}
                      {exp.current ? 'Present' : exp.endDate && new Date(exp.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 italic mb-1">
                    {exp.company || 'Company'}{exp.location && ` | ${exp.location}`}
                  </p>
                  {exp.description && (
                    <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-bold text-gray-900 text-xs">{edu.degree || 'Degree'}</h3>
                    <span className="text-xs text-gray-600">
                      {edu.startDate && new Date(edu.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      {edu.startDate && edu.endDate && ' - '}
                      {edu.endDate && new Date(edu.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-700 italic mb-1">
                    {edu.institution || 'Institution'}{edu.location && ` | ${edu.location}`}
                    {edu.gpa && ` | GPA: ${edu.gpa}`}
                  </p>
                  {edu.description && (
                    <p className="text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {skills.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
              Skills
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {skills.map(skill => (
                <li key={skill.id}>
                  <span className="font-medium">{skill.name || 'Skill'}</span>
                  <span className="text-gray-500"> - {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages Section */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">
              Languages
            </h2>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1">
              {languages.map(language => (
                <li key={language.id}>
                  <span className="font-medium">{language.name || 'Language'}</span>
                  <span className="text-gray-500"> - {language.proficiency.charAt(0).toUpperCase() + language.proficiency.slice(1)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default ClassicTemplate
