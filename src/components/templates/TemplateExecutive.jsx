import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateExecutive = ({ meta, personal, summary, experience, education, skills, languages }) => {
  // Create a subtle gradient background color
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const lightBg = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)` : '#f8f9fa';
  const borderColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` : '#e0e0e0';

  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Header Banner */}
      <div
        className="p-6 lg:p-8 border-b-4"
        style={{
          backgroundColor: lightBg,
          borderColor: meta.accentColor
        }}
      >
        <div className="flex gap-6 items-center">
          {/* Photo */}
          {personal.photo && (
            <div className="flex-shrink-0">
              <img
                src={personal.photo}
                alt={`${personal.firstName} ${personal.lastName}`}
                className="w-28 h-28 rounded-full object-cover border-4 shadow-md"
                style={{ borderColor: meta.accentColor }}
              />
            </div>
          )}

          {/* Header Info */}
          <div className="flex-1">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: meta.accentColor }}
            >
              {personal.firstName} {personal.lastName}
            </h1>
            {personal.title && (
              <p className="text-xl text-gray-700 font-semibold mb-3">{personal.title}</p>
            )}
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
              {personal.email && (
                <span className="flex items-center gap-1.5">
                  <Mail size={14} />
                  {personal.email}
                </span>
              )}
              {personal.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone size={14} />
                  {personal.phone}
                </span>
              )}
              {personal.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {personal.location}
                </span>
              )}
              {personal.linkedin && (
                <span className="flex items-center gap-1.5">
                  <Linkedin size={14} />
                  {personal.linkedin}
                </span>
              )}
              {personal.github && (
                <span className="flex items-center gap-1.5">
                  <Github size={14} />
                  {personal.github}
                </span>
              )}
              {personal.website && (
                <span className="flex items-center gap-1.5">
                  <Globe size={14} />
                  {personal.website}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Main Content - Left Column */}
        <div className="flex-1 p-6 lg:p-8">
          {/* Summary */}
          {summary && (
            <div className="mb-6">
              <h2
                className="text-lg font-bold mb-3 pb-2 uppercase tracking-wide border-b-2"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Executive Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed italic">{summary}</p>
            </div>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <div className="mb-6">
              <h2
                className="text-lg font-bold mb-4 pb-2 uppercase tracking-wide border-b-2"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Professional Experience
              </h2>
              <div className="space-y-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                      <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                      <span className="text-xs text-gray-600 font-semibold">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <p
                      className="text-sm font-bold mb-2"
                      style={{ color: meta.accentColor }}
                    >
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
                className="text-lg font-bold mb-4 pb-2 uppercase tracking-wide border-b-2"
                style={{ color: meta.accentColor, borderColor: meta.accentColor }}
              >
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                      <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
                      <span className="text-xs text-gray-600 font-semibold">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p
                      className="text-sm font-bold"
                      style={{ color: meta.accentColor }}
                    >
                      {edu.school} {edu.location && `• ${edu.location}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Right Column */}
        <div
          className="w-full lg:w-72 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l"
          style={{
            backgroundColor: lightBg,
            borderColor: borderColor
          }}
        >
          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2
                className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b"
                style={{ color: meta.accentColor, borderColor: borderColor }}
              >
                Core Competencies
              </h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-gray-800">{skill.name}</span>
                      {skill.level && (
                        <span className="text-xs text-gray-600">{skill.level}</span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            backgroundColor: meta.accentColor,
                            width: skill.level === 'Expert' ? '100%' :
                                   skill.level === 'Advanced' ? '75%' :
                                   skill.level === 'Intermediate' ? '50%' : '25%'
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
              <h2
                className="text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b"
                style={{ color: meta.accentColor, borderColor: borderColor }}
              >
                Languages
              </h2>
              <div className="space-y-2">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-gray-800">{lang.lang}</span>
                    {lang.level && (
                      <span className="text-xs text-gray-600">{lang.level}</span>
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
