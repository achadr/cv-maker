import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateCreative = ({ meta, personal, summary, experience, education, skills, languages }) => {
  // Create color variations
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const lightColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : '#f5f5f5';
  const mediumColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` : '#e8e8e8';

  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 overflow-hidden"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Header */}
      <div
        className="p-8 pb-10"
        style={{
          backgroundColor: meta.accentColor
        }}
      >
        <div className="flex gap-6 items-start mb-4">
          {/* Photo */}
          {personal.photo && (
            <div className="flex-shrink-0 p-1 bg-white">
              <img
                src={personal.photo}
                alt={`${personal.firstName} ${personal.lastName}`}
                className="w-24 h-24 object-cover"
              />
            </div>
          )}

          {/* Name & Title */}
          <div className="flex-1">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
              {personal.firstName} {personal.lastName}
            </h1>
            {personal.title && (
              <div
                className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase"
                style={{
                  backgroundColor: 'white',
                  color: meta.accentColor
                }}
              >
                {personal.title}
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-2 text-white text-xs mt-4">
          {personal.email && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full">
              <Mail size={11} className="flex-shrink-0" />
              <span className="truncate max-w-[250px]">{personal.email}</span>
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full whitespace-nowrap">
              <Phone size={11} className="flex-shrink-0" />
              {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full">
              <MapPin size={11} className="flex-shrink-0" />
              <span className="truncate max-w-[180px]">{personal.location}</span>
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full">
              <Linkedin size={11} className="flex-shrink-0" />
              <span className="truncate max-w-[200px]">{personal.linkedin}</span>
            </span>
          )}
          {personal.github && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full">
              <Github size={11} className="flex-shrink-0" />
              <span className="truncate max-w-[200px]">{personal.github}</span>
            </span>
          )}
          {personal.website && (
            <span className="flex items-center gap-1.5 bg-white bg-opacity-20 px-3 py-1.5 rounded-full">
              <Globe size={11} className="flex-shrink-0" />
              <span className="truncate max-w-[200px]">{personal.website}</span>
            </span>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 pt-6">
        {/* Summary with accent box */}
        {summary && (
          <div className="mb-8">
            <div
              className="relative pl-6 py-4 border-l-4"
              style={{
                backgroundColor: lightColor,
                borderColor: meta.accentColor
              }}
            >
              <h2
                className="text-xs font-black uppercase tracking-widest mb-2"
                style={{ color: meta.accentColor }}
              >
                About Me
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{summary}</p>
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-12 h-12"
                style={{
                  background: meta.accentColor,
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  opacity: 0.1
                }}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            {experience.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8"
                    style={{ backgroundColor: meta.accentColor }}
                  />
                  <h2
                    className="text-xl font-black uppercase tracking-wide"
                    style={{ color: meta.accentColor }}
                  >
                    Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className="relative pl-6 pb-6 border-l-2 border-dashed"
                      style={{ borderColor: idx === experience.length - 1 ? 'transparent' : mediumColor }}
                    >
                      {/* Timeline dot */}
                      <div
                        className="absolute -left-2 top-0 w-4 h-4 rounded-full border-2 bg-white"
                        style={{ borderColor: meta.accentColor }}
                      />

                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                        <h3 className="text-base font-bold text-gray-900">{exp.title}</h3>
                        <span
                          className="text-xs font-bold px-2 py-1 rounded"
                          style={{
                            backgroundColor: lightColor,
                            color: meta.accentColor
                          }}
                        >
                          {exp.startDate} - {exp.endDate || 'Present'}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-gray-600 mb-2">
                        {exp.company} {exp.location && `• ${exp.location}`}
                      </p>
                      {exp.bullets.length > 0 && exp.bullets[0] && (
                        <ul className="space-y-1.5">
                          {exp.bullets.filter(b => b).map((bullet, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-700">
                              <span style={{ color: meta.accentColor }}>▸</span>
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
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8"
                    style={{ backgroundColor: meta.accentColor }}
                  />
                  <h2
                    className="text-xl font-black uppercase tracking-wide"
                    style={{ color: meta.accentColor }}
                  >
                    Education
                  </h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-lg"
                      style={{ backgroundColor: lightColor }}
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-1">
                        <h3 className="text-base font-bold text-gray-900">{edu.degree}</h3>
                        <span className="text-xs font-bold" style={{ color: meta.accentColor }}>
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-gray-600">
                        {edu.school} {edu.location && `• ${edu.location}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Skills & Languages */}
          <div className="space-y-8">
            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8"
                    style={{ backgroundColor: meta.accentColor }}
                  />
                  <h2
                    className="text-lg font-black uppercase tracking-wide"
                    style={{ color: meta.accentColor }}
                  >
                    Skills
                  </h2>
                </div>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-gray-800">{skill.name}</span>
                        {skill.level && (
                          <span className="text-xs font-bold" style={{ color: meta.accentColor }}>
                            {skill.level}
                          </span>
                        )}
                      </div>
                      {skill.level && (
                        <div className="w-full h-1 bg-gray-200 rounded-sm overflow-hidden">
                          <div
                            className="h-full rounded-sm"
                            style={{
                              backgroundColor: meta.accentColor,
                              width: skill.level === 'Expert' ? '100%' :
                                     skill.level === 'Advanced' ? '75%' :
                                     skill.level === 'Intermediate' ? '50%' : '25%'
                            }}
                          />
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
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-2 h-8"
                    style={{ backgroundColor: meta.accentColor }}
                  />
                  <h2
                    className="text-lg font-black uppercase tracking-wide"
                    style={{ color: meta.accentColor }}
                  >
                    Languages
                  </h2>
                </div>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <div
                      key={lang.id}
                      className="px-4 py-2 rounded"
                      style={{ backgroundColor: lightColor }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-gray-800">{lang.lang}</span>
                        {lang.level && (
                          <span className="text-xs font-bold" style={{ color: meta.accentColor }}>
                            {lang.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
