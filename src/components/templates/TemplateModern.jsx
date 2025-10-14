import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateModern = ({ meta, personal, summary, experience, education, skills, languages }) => {
  // Create lighter and darker shades of accent color
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const darkerColor = rgb ? `rgb(${Math.max(0, rgb.r - 40)}, ${Math.max(0, rgb.g - 40)}, ${Math.max(0, rgb.b - 40)})` : meta.accentColor;
  const lighterColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)` : meta.accentColor;

  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 flex flex-col lg:flex-row"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Sidebar - Contact & Skills */}
      <div
        className="w-full lg:w-[280px] text-white p-6 lg:p-8"
        style={{
          background: `linear-gradient(to bottom, ${meta.accentColor}, ${darkerColor})`,
          minHeight: '1056px'
        }}
      >
        {/* Photo */}
        {personal.photo && (
          <div className="mb-6 flex justify-center">
            <img
              src={personal.photo}
              alt={`${personal.firstName} ${personal.lastName}`}
              className="w-32 h-32 rounded-full object-cover border-4 shadow-lg"
              style={{ borderColor: darkerColor }}
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
            <p className="text-sm font-medium uppercase tracking-wide opacity-80">
              {personal.title}
            </p>
          )}
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-80">
            Contact
          </h2>
          <div className="space-y-2 text-sm">
            {personal.email && (
              <p className="flex items-center gap-2 break-words">
                <Mail size={14} className="flex-shrink-0" />
                <span>{personal.email}</span>
              </p>
            )}
            {personal.github && (
              <p className="flex items-center gap-2 break-words">
                <Github size={14} className="flex-shrink-0" />
                <span>{personal.github}</span>
              </p>
            )}
            {personal.location && (
              <p className="flex items-center gap-2">
                <MapPin size={14} className="flex-shrink-0" />
                <span>{personal.location}</span>
              </p>
            )}
            {personal.linkedin && (
              <p className="flex items-center gap-2 break-words">
                <Linkedin size={14} className="flex-shrink-0" />
                <span>{personal.linkedin}</span>
              </p>
            )}
            {personal.phone && (
              <p className="flex items-center gap-2">
                <Phone size={14} className="flex-shrink-0" />
                <span>{personal.phone}</span>
              </p>
            )}
            {personal.website && (
              <p className="flex items-center gap-2 break-words">
                <Globe size={14} className="flex-shrink-0" />
                <span>{personal.website}</span>
              </p>
            )}
          </div>
        </div>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-80">
              Skills
            </h2>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                  {skill.level && (
                    <div className="w-full rounded-full h-1.5" style={{ backgroundColor: darkerColor }}>
                      <div className="h-1.5 rounded-full" style={{
                        backgroundColor: 'white',
                        opacity: 0.9,
                        width: skill.level === 'Expert' ? '100%' :
                               skill.level === 'Advanced' ? '75%' :
                               skill.level === 'Intermediate' ? '50%' : '25%'
                      }}></div>
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
            <h2 className="text-xs font-bold uppercase tracking-wider mb-3 opacity-80">
              Languages
            </h2>
            <div className="space-y-2">
              {languages.map((lang) => (
                <div key={lang.id} className="text-sm">
                  <span className="font-medium">{lang.lang}</span>
                  {lang.level && <span className="opacity-80"> • {lang.level}</span>}
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
            <h2
              className="text-lg font-bold mb-3 pb-2 border-b-2"
              style={{ color: meta.accentColor, borderColor: meta.accentColor }}
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
              className="text-lg font-bold mb-3 pb-2 border-b-2"
              style={{ color: meta.accentColor, borderColor: meta.accentColor }}
            >
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
                  <p
                    className="text-sm font-medium mb-2"
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
              className="text-lg font-bold mb-3 pb-2 border-b-2"
              style={{ color: meta.accentColor, borderColor: meta.accentColor }}
            >
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
                  <p
                    className="text-sm font-medium"
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
    </div>
  );
};
