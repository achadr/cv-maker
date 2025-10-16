import React from 'react';

export const TemplateSimple = ({ meta, personal, summary, experience, education, skills, languages }) => {
  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 p-10"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Simple Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          {personal.firstName} {personal.lastName}
        </h1>
        {personal.title && (
          <p className="text-lg text-gray-700 mb-3">{personal.title}</p>
        )}
        <div className="text-sm text-gray-600 space-y-0.5">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.location && <p>{personal.location}</p>}
          {personal.linkedin && <p>{personal.linkedin}</p>}
          {personal.github && <p>{personal.github}</p>}
          {personal.website && <p>{personal.website}</p>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-6">
          <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
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
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Education
          </h2>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
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
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.id} className="text-sm text-gray-700">
                {skill.name}{skill.level && ` (${skill.level})`}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-300 pb-1">
            Languages
          </h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <span key={lang.id} className="text-sm text-gray-700">
                {lang.lang}{lang.level && ` (${lang.level})`}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
