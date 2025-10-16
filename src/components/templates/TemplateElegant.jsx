import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const TemplateElegant = ({ meta, personal, summary, experience, education, skills, languages }) => {
  return (
    <div
      className="w-full lg:w-[816px] bg-white shadow-lg border border-gray-200 p-12"
      style={{
        fontFamily: meta.font,
        minHeight: '1056px',
        height: 'auto'
      }}
    >
      {/* Elegant Header */}
      <div className="text-center mb-8 pb-6 border-b" style={{ borderColor: meta.accentColor }}>
        {personal.photo && (
          <img
            src={personal.photo}
            alt={`${personal.firstName} ${personal.lastName}`}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-2"
            style={{ borderColor: meta.accentColor }}
          />
        )}
        <h1
          className="text-4xl font-light tracking-wide text-gray-900 mb-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {personal.firstName} {personal.lastName}
        </h1>
        {personal.title && (
          <p
            className="text-lg font-light italic tracking-wide mb-4"
            style={{ color: meta.accentColor }}
          >
            {personal.title}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
          {personal.email && (
            <span className="flex items-center gap-2">
              <Mail size={14} />
              {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-2">
              <Phone size={14} />
              {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {personal.location}
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-2">
              <Linkedin size={14} />
              {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span className="flex items-center gap-2">
              <Github size={14} />
              {personal.github}
            </span>
          )}
          {personal.website && (
            <span className="flex items-center gap-2">
              <Globe size={14} />
              {personal.website}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-700 leading-relaxed italic max-w-3xl mx-auto">
            "{summary}"
          </p>
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-8">
          <h2
            className="text-2xl font-light text-center mb-6 tracking-wide"
            style={{ color: meta.accentColor, fontFamily: 'Georgia, serif' }}
          >
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.id} className="border-l-2 pl-6" style={{ borderColor: meta.accentColor }}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                  <span className="text-sm text-gray-600 italic">
                    {exp.startDate} – {exp.endDate || 'Present'}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.bullets.length > 0 && exp.bullets[0] && (
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1.5">
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
        <div className="mb-8">
          <h2
            className="text-2xl font-light text-center mb-6 tracking-wide"
            style={{ color: meta.accentColor, fontFamily: 'Georgia, serif' }}
          >
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-sm text-gray-700">
                  {edu.school} {edu.location && `• ${edu.location}`}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {edu.startDate} – {edu.endDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills & Languages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2
              className="text-2xl font-light text-center mb-4 tracking-wide"
              style={{ color: meta.accentColor, fontFamily: 'Georgia, serif' }}
            >
              Skills
            </h2>
            <div className="text-center space-y-2">
              {skills.map((skill) => (
                <div key={skill.id}>
                  <span className="text-sm text-gray-800 font-medium">{skill.name}</span>
                  {skill.level && (
                    <span className="text-sm text-gray-600 italic"> – {skill.level}</span>
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
              className="text-2xl font-light text-center mb-4 tracking-wide"
              style={{ color: meta.accentColor, fontFamily: 'Georgia, serif' }}
            >
              Languages
            </h2>
            <div className="text-center space-y-2">
              {languages.map((lang) => (
                <div key={lang.id}>
                  <span className="text-sm text-gray-800 font-medium">{lang.lang}</span>
                  {lang.level && (
                    <span className="text-sm text-gray-600 italic"> – {lang.level}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
