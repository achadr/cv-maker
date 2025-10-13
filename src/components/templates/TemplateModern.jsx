import React from 'react';

export const TemplateModern = ({ personal, summary, experience, education, skills, languages }) => {
  return (
    <div className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 flex flex-col lg:flex-row">
      {/* Sidebar - Contact & Skills */}
      <div className="w-full lg:w-[280px] bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 lg:p-8">
        {/* Photo */}
        {personal.photo && (
          <div className="mb-6 flex justify-center">
            <img
              src={personal.photo}
              alt={`${personal.firstName} ${personal.lastName}`}
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-700 shadow-lg"
            />
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {personal.firstName}
            <br />
            {personal.lastName}
          </h1>
          {personal.title && (
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wide">
              {personal.title}
            </p>
          )}
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-3 text-blue-200">
            Contact
          </h2>
          <div className="space-y-2 text-sm">
            {personal.email && <p className="break-words">{personal.email}</p>}
            {personal.phone && <p>{personal.phone}</p>}
            {personal.location && <p>{personal.location}</p>}
            {personal.linkedin && <p className="break-words">{personal.linkedin}</p>}
            {personal.website && <p className="break-words">{personal.website}</p>}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider mb-3 text-blue-200">
              Skills
            </h2>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  {skill.level && (
                    <div className="w-full bg-blue-700 rounded-full h-1.5">
                      <div
                        className="bg-blue-300 h-1.5 rounded-full"
                        style={{
                          width:
                            skill.level === 'Expert'
                              ? '100%'
                              : skill.level === 'Advanced'
                              ? '75%'
                              : skill.level === 'Intermediate'
                              ? '50%'
                              : '25%',
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider mb-3 text-blue-200">
              Languages
            </h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  <span className="font-medium">{lang.lang}</span>
                  {lang.level && <span className="text-blue-200"> • {lang.level}</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8">
        {/* Summary */}
        {summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b-2 border-blue-900">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b-2 border-blue-900">
              Work Experience
            </h2>
            <div className="space-y-5">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                    <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                    <span className="text-xs text-gray-600 font-medium">
                      {exp.startDate} - {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 font-medium mb-2">
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
            <h2 className="text-lg font-bold text-gray-900 mb-3 pb-2 border-b-2 border-blue-900">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                    <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-xs text-gray-600 font-medium">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-blue-800 font-medium">
                    {edu.school} {edu.location && `• ${edu.location}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
