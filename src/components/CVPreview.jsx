import React from 'react';
import { useCVStore } from '../store/cvStore';
import { TemplateClassic } from './templates/TemplateClassic';
import { TemplateModern } from './templates/TemplateModern';
import { TemplateMinimal } from './templates/TemplateMinimal';

export const CVPreview = () => {
  const { meta, personal, summary, experience, education, skills, languages } = useCVStore();

  const templateProps = {
    meta,
    personal,
    summary,
    experience,
    education,
    skills,
    languages,
  };

  const renderTemplate = () => {
    switch (meta.template) {
      case 'modern':
        return <TemplateModern {...templateProps} />;
      case 'minimal':
        return <TemplateMinimal {...templateProps} />;
      case 'classic':
      default:
        return <TemplateClassic {...templateProps} />;
    }
  };

  return <div id="cv-preview">{renderTemplate()}</div>;
};
