import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateClassic = ({ meta, personal, summary, experience, education, skills, languages }) => {
  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 p-6 lg:p-12"
      style={{ fontFamily: meta.font }}
    >
      {/* Header */}
      <div className="mb-6 flex gap-6">
        {/* Photo */}
        {personal.photo && (
          <div className="flex-shrink-0">
            <img
              src={personal.photo}
              alt={`${personal.firstName} ${personal.lastName}`}
              className="w-32 h-32 rounded-lg object-cover border-2 border-gray-200"
            />
          </div>
        )}

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-1">
            {personal.firstName} {personal.lastName}
          </h1>
          {personal.title && (
            <p className="text-xl text-gray-700 mb-3">{personal.title}</p>
          )}
          <div className="text-sm text-gray-600 grid grid-cols-2 gap-x-4 gap-y-1">
            {personal.email && (
              <p className="flex items-center gap-2">
                <Mail size={14} />
                <span>{personal.email}</span>
              </p>
            )}
            {personal.github && (
              <p className="flex items-center gap-2">
                <Github size={14} />
                <span>{personal.github}</span>
              </p>
            )}
            {personal.location && (
              <p className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{personal.location}</span>
              </p>
            )}
            {personal.linkedin && (
              <p className="flex items-center gap-2">
                <Linkedin size={14} />
                <span>{personal.linkedin}</span>
              </p>
            )}
            {personal.phone && (
              <p className="flex items-center gap-2">
                <Phone size={14} />
                <span>{personal.phone}</span>
              </p>
            )}
            {personal.website && (
              <p className="flex items-center gap-2">
                <Globe size={14} />
                <span>{personal.website}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-2 pb-1"
            style={{ color: meta.accentColor, borderBottom: `1px solid ${meta.accentColor}` }}
          >
            Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-2 pb-1"
            style={{ color: meta.accentColor, borderBottom: `1px solid ${meta.accentColor}` }}
          >
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
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
        <div className="mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-2 pb-1"
            style={{ color: meta.accentColor, borderBottom: `1px solid ${meta.accentColor}` }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-base font-semibold text-gray-900">{edu.degree}</h3>
                  <span className="text-sm text-gray-600">
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {edu.school} {edu.location && `• ${edu.location}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-2 pb-1"
            style={{ color: meta.accentColor, borderBottom: `1px solid ${meta.accentColor}` }}
          >
            Skills
          </h2>
          <div className="flex flex-wrap" style={{ margin: '-4px' }}>
            {skills.map((skill) => (
              <span
                key={skill.id}
                className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                style={{ margin: '4px' }}
              >
                {skill.name} {skill.level && `• ${skill.level}`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2
            className="text-sm font-bold uppercase tracking-wider mb-2 pb-1"
            style={{ color: meta.accentColor, borderBottom: `1px solid ${meta.accentColor}` }}
          >
            Languages
          </h2>
          <div className="flex flex-wrap" style={{ margin: '-4px' }}>
            {languages.map((lang) => (
              <span key={lang.id} className="text-sm text-gray-700" style={{ margin: '4px' }}>
                {lang.lang} ({lang.level})
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
