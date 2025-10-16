import React from 'react';
import { useCVStore } from '../store/cvStore';
import { TemplateClassic } from './templates/TemplateClassic';
import { TemplateModern } from './templates/TemplateModern';
import { TemplateMinimal } from './templates/TemplateMinimal';
import { TemplateExecutive } from './templates/TemplateExecutive';
import { TemplateCreative } from './templates/TemplateCreative';
import { TemplateCompact } from './templates/TemplateCompact';
import { TemplateElegant } from './templates/TemplateElegant';
import { TemplateSimple } from './templates/TemplateSimple';

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
      case 'executive':
        return <TemplateExecutive {...templateProps} />;
      case 'creative':
        return <TemplateCreative {...templateProps} />;
      case 'compact':
        return <TemplateCompact {...templateProps} />;
      case 'elegant':
        return <TemplateElegant {...templateProps} />;
      case 'simple':
        return <TemplateSimple {...templateProps} />;
      case 'classic':
      default:
        return <TemplateClassic {...templateProps} />;
    }
  };

  return <div id="cv-preview">{renderTemplate()}</div>;
};
