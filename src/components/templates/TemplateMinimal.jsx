import React from 'react';

export const TemplateMinimal = ({ personal, summary, experience, education, skills, languages }) => {
  return (
    <div className="w-full lg:w-[816px] bg-white shadow-lg p-8 lg:p-16">
      {/* Header - Centered */}
      <div className="text-center mb-12 pb-8 border-b border-gray-200">
        {/* Photo */}
        {personal.photo && (
          <div className="mb-6 flex justify-center">
            <img
              src={personal.photo}
              alt={`${personal.firstName} ${personal.lastName}`}
              className="w-40 h-40 rounded-full object-cover border-4 border-gray-200 shadow-md"
            />
          </div>
        )}

        <h1 className="text-5xl font-light text-gray-900 mb-2 tracking-tight">
          {personal.firstName} {personal.lastName}
        </h1>
        {personal.title && (
          <p className="text-lg text-gray-600 mb-4 font-light">{personal.title}</p>
        )}
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>•</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>•</span>}
          {personal.location && <span>{personal.location}</span>}
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600 mt-2">
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.website && personal.linkedin && <span>•</span>}
          {personal.website && <span>{personal.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-4">About</h2>
          <p className="text-base text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.id} className="pl-4 border-l-2 border-gray-300">
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
        <div className="mb-12">
          <h2 className="text-2xl font-light text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.id} className="pl-4 border-l-2 border-gray-300">
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
              <h2 className="text-2xl font-light text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="text-sm text-gray-700 px-3 py-1 border border-gray-300 rounded"
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
              <h2 className="text-2xl font-light text-gray-900 mb-4">Languages</h2>
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
