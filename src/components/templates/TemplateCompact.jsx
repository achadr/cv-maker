import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateCompact = ({ meta, personal, summary, experience, education, skills, languages }) => {
  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 p-6"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Compact Header */}
      <div className="mb-4 pb-3 border-b-2" style={{ borderColor: meta.accentColor }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            {personal.photo && (
              <img
                src={personal.photo}
                alt={`${personal.firstName} ${personal.lastName}`}
                className="w-16 h-16 rounded-md object-cover border"
                style={{ borderColor: meta.accentColor }}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {personal.firstName} {personal.lastName}
              </h1>
              {personal.title && (
                <p className="text-sm font-semibold" style={{ color: meta.accentColor }}>
                  {personal.title}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Compact Contact Info */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          {personal.email && (
            <span className="flex items-center gap-1">
              <Mail size={10} />
              {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1">
              <Phone size={10} />
              {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-1">
              <MapPin size={10} />
              {personal.location}
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin size={10} />
              {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span className="flex items-center gap-1">
              <Github size={10} />
              {personal.github}
            </span>
          )}
          {personal.website && (
            <span className="flex items-center gap-1">
              <Globe size={10} />
              {personal.website}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-4">
          <p className="text-xs text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Experience */}
          {experience.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-700">
                      {exp.company} {exp.location && `• ${exp.location}`}
                    </p>
                    {exp.bullets.length > 0 && exp.bullets[0] && (
                      <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5 ml-2 mt-1">
                        {exp.bullets.filter(b => b).map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
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
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Education
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-sm font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-xs text-gray-700">
                      {edu.school} {edu.location && `• ${edu.location}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-gray-800">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-gray-600">{skill.level}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <div>
              <h2
                className="text-xs font-bold uppercase tracking-wider mb-2 pb-1 border-b"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Languages
              </h2>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-gray-800">{lang.lang}</span>
                    {lang.level && (
                      <span className="text-[10px] text-gray-600">{lang.level}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
