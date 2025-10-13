import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateMinimal = ({ meta, personal, summary, experience, education, skills, languages }) => {
  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg p-8 lg:p-16"
      style={{ fontFamily: meta.font }}
    >
      {/* Header - 3 Column Layout */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-2 text-xs text-gray-600">
            {personal.email && (
              <div className="flex items-start gap-1.5">
                <Mail size={12} className="flex-shrink-0 mt-0.5" />
                <span className="break-all">{personal.email}</span>
              </div>
            )}
            {personal.phone && (
              <div className="flex items-start gap-1.5">
                <Phone size={12} className="flex-shrink-0 mt-0.5" />
                <span>{personal.phone}</span>
              </div>
            )}
            {personal.location && (
              <div className="flex items-start gap-1.5">
                <MapPin size={12} className="flex-shrink-0 mt-0.5" />
                <span>{personal.location}</span>
              </div>
            )}
          </div>

          {/* Center Column - Photo, Name, Title */}
          <div className="text-center">
            {personal.photo && (
              <div className="mb-3 flex justify-center">
                <img
                  src={personal.photo}
                  alt={`${personal.firstName} ${personal.lastName}`}
                  className="w-24 h-24 rounded-full object-cover border-4 shadow-md"
                  style={{ borderColor: meta.accentColor }}
                />
              </div>
            )}
            <h1 className="text-2xl font-light text-gray-900 mb-1 tracking-tight">
              {personal.firstName} {personal.lastName}
            </h1>
            {personal.title && (
              <p className="text-sm text-gray-600 font-light">{personal.title}</p>
            )}
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-2 text-xs text-gray-600 flex flex-col items-end">
            {personal.linkedin && (
              <div className="flex items-start gap-1.5">
                <span className="break-all text-right">{personal.linkedin}</span>
                <Linkedin size={12} className="flex-shrink-0 mt-0.5" />
              </div>
            )}
            {personal.github && (
              <div className="flex items-start gap-1.5">
                <span className="break-all text-right">{personal.github}</span>
                <Github size={12} className="flex-shrink-0 mt-0.5" />
              </div>
            )}
            {personal.website && (
              <div className="flex items-start gap-1.5">
                <span className="break-all text-right">{personal.website}</span>
                <Globe size={12} className="flex-shrink-0 mt-0.5" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-8">
          <h2
            className="text-xl font-light mb-3"
            style={{ color: meta.accentColor }}
          >
            Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-light mb-4"
            style={{ color: meta.accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-5">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="pl-4 border-l-2"
                style={{ borderColor: meta.accentColor }}
              >
                <h3 className="text-lg font-medium text-gray-900">{exp.title}</h3>
                <p className="text-base text-gray-600 mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {exp.startDate} - {exp.endDate || 'Present'}
                  {exp.location && ` • ${exp.location}`}
                </p>
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="mt-3 space-y-2 text-sm text-gray-700 leading-relaxed">
                    {exp.bullets.filter(b => b).map((bullet, idx) => (
                      <li key={idx} className="flex">
                        <span className="mr-2 text-gray-400">—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-xl font-light mb-4"
            style={{ color: meta.accentColor }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="pl-4 border-l-2"
                style={{ borderColor: meta.accentColor }}
              >
                <h3 className="text-lg font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-base text-gray-600 mt-1">{edu.school}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.startDate} - {edu.endDate}
                  {edu.location && ` • ${edu.location}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Languages - Two columns on larger screens */}
      {(skills.length > 0 || languages.length > 0) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2
                className="text-xl font-light mb-3"
                style={{ color: meta.accentColor }}
              >
                Skills
              </h2>
              <div className="flex flex-wrap" style={{ margin: '-4px' }}>
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-sm text-gray-700 px-3 py-1 border border-gray-300 rounded"
                    style={{ margin: '4px' }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2
                className="text-xl font-light mb-3"
                style={{ color: meta.accentColor }}
              >
                Languages
              </h2>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.id} className="text-sm text-gray-700">
                    <span className="font-medium">{lang.lang}</span>
                    {lang.level && <span className="text-gray-500"> — {lang.level}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
