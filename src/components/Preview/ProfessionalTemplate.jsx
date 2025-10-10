import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react'

function ProfessionalTemplate({ cvData }) {
  const { personalInfo, experience, education, skills, languages } = cvData

  return (
    <div className="bg-white w-full h-full text-sm">
      {/* Header - Deep Blue */}
      <div className="bg-blue-900 text-white p-6">
        <div className="flex items-center gap-6">
          {/* Profile Photo */}
          {personalInfo.photo && (
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="w-24 h-24 rounded-lg border-2 border-blue-300 object-cover"
            />
          )}

          {/* Name and Contact */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2 tracking-wide">
              {personalInfo.fullName || 'Your Name'}
            </h1>

            {/* Contact Grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-blue-100">
              {personalInfo.email && (
                <div className="flex items-center gap-1.5">
                  <Mail size={12} />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              {personalInfo.phone && (
                <div className="flex items-center gap-1.5">
                  <Phone size={12} />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              {personalInfo.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{personalInfo.location}</span>
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="flex items-center gap-1.5">
                  <Linkedin size={12} />
                  <span className="truncate">{personalInfo.linkedin}</span>
                </div>
              )}
              {personalInfo.website && (
                <div className="flex items-center gap-1.5 col-span-2">
                  <Globe size={12} />
                  <span className="truncate">{personalInfo.website}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-1/3 bg-gray-50 p-5 space-y-5">
          {/* Professional Summary */}
          {personalInfo.summary && (
            <div>
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2 pb-1 border-b-2 border-blue-900">
                Profile
              </h2>
              <p className="text-xs text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </div>
          )}

          {/* Skills Section */}
          {skills.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2 pb-1 border-b-2 border-blue-900">
                Skills
              </h2>
              <div className="space-y-2.5">
                {skills.map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-gray-800">{skill.name || 'Skill'}</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-1.5">
                      <div
                        className="bg-blue-900 h-1.5 rounded-full"
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
              <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2 pb-1 border-b-2 border-blue-900">
                Languages
              </h2>
              <div className="space-y-2">
                {languages.map(language => (
                  <div key={language.id} className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-800">{language.name || 'Language'}</span>
                    <span className="text-xs text-gray-600 capitalize">{language.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Main Content */}
        <div className="flex-1 p-6 space-y-5">
          {/* Experience Section */}
          {experience.length > 0 && (
            <div>
              <h2 className="text-base font-bold text-blue-900 uppercase tracking-wider mb-3 pb-1 border-b-2 border-blue-900">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{exp.title || 'Job Title'}</h3>
                        <p className="text-blue-800 font-semibold text-xs">{exp.company || 'Company'}</p>
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
              <h2 className="text-base font-bold text-blue-900 uppercase tracking-wider mb-3 pb-1 border-b-2 border-blue-900">
                Education
              </h2>
              <div className="space-y-4">
                {education.map(edu => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm">{edu.degree || 'Degree'}</h3>
                        <p className="text-blue-800 font-semibold text-xs">{edu.institution || 'Institution'}</p>
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
                      <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalTemplate
