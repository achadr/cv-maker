import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

function ModernTemplate({ cvData }) {
  const { personalInfo, experience, education, skills, languages } = cvData

  return (
    <div className="bg-white w-full h-full text-sm">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-t-lg">
        <div className="flex items-center gap-6">
          {/* Profile Photo */}
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          )}

          {/* Name and Contact */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || 'Your Name'}</h1>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {personalInfo.email && (
                <div className="flex items-center gap-1">
                  <Mail size={14} />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1">
                  <Phone size={14} />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1">
                  <Linkedin size={14} />
                  <span className="truncate">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-1 col-span-2">
                  <Globe size={14} />
                  <span className="truncate">{personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div className="mt-4 pt-4 border-t border-purple-400">
            <p className="text-sm leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Experience Section */}
        {experience.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-4">
              {experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.title || 'Job Title'}</h3>
                      <p className="text-gray-700">{exp.company || 'Company'}</p>
                    </div>
                    <div className="text-right text-gray-600 text-xs">
                      <p>{exp.location}</p>
                      <p>
                        {exp.startDate && new Date(exp.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {exp.startDate && (exp.endDate || exp.current) && ' - '}
                        {exp.current ? 'Present' : exp.endDate && new Date(exp.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">
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
            <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-gray-900">{edu.degree || 'Degree'}</h3>
                      <p className="text-gray-700">{edu.institution || 'Institution'}</p>
                      {edu.gpa && <p className="text-gray-600 text-xs">GPA: {edu.gpa}</p>}
                    </div>
                    <div className="text-right text-gray-600 text-xs">
                      <p>{edu.location}</p>
                      <p>
                        {edu.startDate && new Date(edu.startDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        {edu.startDate && edu.endDate && ' - '}
                        {edu.endDate && new Date(edu.endDate + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">
                      {edu.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills and Languages Row */}
        {(skills.length > 0 || languages.length > 0) && (
          <div className="grid grid-cols-2 gap-6">
            {/* Skills Section */}
            {skills.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">
                  SKILLS
                </h2>
                <div className="space-y-2">
                  {skills.map(skill => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-800 text-xs font-medium">{skill.name || 'Skill'}</span>
                        <span className="text-xs text-gray-500 capitalize">{skill.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-indigo-600 h-1.5 rounded-full"
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
              <div>
                <h2 className="text-lg font-bold text-indigo-600 border-b-2 border-indigo-600 pb-1 mb-3">
                  LANGUAGES
                </h2>
                <div className="space-y-2">
                  {languages.map(language => (
                    <div key={language.id} className="flex justify-between items-center">
                      <span className="text-gray-800 text-xs font-medium">{language.name || 'Language'}</span>
                      <span className="text-xs text-gray-500 capitalize">{language.proficiency}</span>
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

export default ModernTemplate
