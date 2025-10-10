import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

function CreativeTemplate({ cvData }) {
  const { personalInfo, experience, education, skills, languages } = cvData

  return (
    <div className="bg-white w-full h-full text-sm">
      {/* Header with Purple to Pink Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white p-8 rounded-t-lg">
        <div className="flex items-center gap-6">
          {/* Profile Photo */}
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover"
            />
          )}

          {/* Name and Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-black mb-2 tracking-tight">
              {personalInfo.fullName || 'Your Name'}
            </h1>

            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm mt-3">
              {personalInfo.email && (
                <div className="flex items-center gap-1.5">
                  <Mail size={14} className="flex-shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone size={14} className="flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1.5">
                  <Linkedin size={14} className="flex-shrink-0" />
                  <span className="truncate">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-1.5 col-span-2">
                  <Globe size={14} className="flex-shrink-0" />
                  <span className="truncate">{personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div className="mt-4 pt-4 border-t border-pink-300">
            <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Experience Section */}
        {experience.length > 0 && (
          <div>
            <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id} className="border-l-4 border-purple-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{exp.title || 'Job Title'}</h3>
                      <p className="text-purple-600 font-semibold text-sm">{exp.company || 'Company'}</p>
                    </div>
                    <div className="text-right text-gray-600 text-xs">
                      <p className="font-medium">{exp.location}</p>
                      <p>
                        {exp.startDate && new Date(exp.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {exp.startDate && (exp.endDate || exp.current) && ' - '}
                        {exp.current ? 'Present' : exp.endDate && new Date(exp.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line mt-2">
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
            <h2 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id} className="border-l-4 border-pink-500 pl-4">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{edu.degree || 'Degree'}</h3>
                      <p className="text-pink-600 font-semibold text-sm">{edu.institution || 'Institution'}</p>
                      {edu.gpa && <p className="text-gray-600 text-xs">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-right text-gray-600 text-xs">
                      <p className="font-medium">{edu.location}</p>
                      <p>
                        {edu.startDate && new Date(edu.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {edu.startDate && edu.endDate && ' - '}
                        {edu.endDate && new Date(edu.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills and Languages in Cards */}
        {(skills.length > 0 || languages.length > 0) && (
          <div className="grid grid-cols-2 gap-4">
            {/* Skills Section */}
            {skills.length > 0 && (
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
                <h2 className="text-lg font-black text-purple-700 mb-3">SKILLS</h2>
                <div className="space-y-2">
                  {skills.map(skill => (
                    <div key={skill.id} className="bg-white p-2 rounded shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-gray-800">{skill.name || 'Skill'}</span>
                        <span className="text-xs text-purple-600 font-semibold capitalize">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                          style={{
                            width:
                              skill.level === 'beginner' ? '25%' :
                              skill.level === 'intermediate' ? '50%' :
                              skill.level === 'advanced' ? '75%' :
                              skill.level === 'expert' ? '100%' : '50%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages Section */}
            {languages.length > 0 && (
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
                <h2 className="text-lg font-black text-pink-700 mb-3">LANGUAGES</h2>
                <div className="space-y-2">
                  {languages.map(language => (
                    <div key={language.id} className="bg-white p-2 rounded shadow-sm flex justify-between items-center">
                      <span className="text-xs font-bold text-gray-800">{language.name || 'Language'}</span>
                      <span className="text-xs text-pink-600 font-semibold capitalize">{language.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CreativeTemplate
