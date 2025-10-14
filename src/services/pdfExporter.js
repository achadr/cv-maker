import React from 'react';
import { pdf } from '@react-pdf/renderer';
import { TemplateClassicPDF } from '../components/templates/TemplateClassicPDF';
import { TemplateModernPDF } from '../components/templates/TemplateModernPDF';
import { TemplateMinimalPDF } from '../components/templates/TemplateMinimalPDF';

export const exportToPDF = async (cvData) => {
  try {
    // Validate CV data
    if (!cvData || !cvData.meta) {
      throw new Error('Invalid CV data');
    }

    // Prepare template props
    const templateProps = {
      meta: cvData.meta,
      personal: cvData.personal,
      summary: cvData.summary,
      experience: cvData.experience,
      education: cvData.education,
      skills: cvData.skills,
      languages: cvData.languages,
    };

    // Select the appropriate PDF template
    let TemplateComponent;
    switch (cvData.meta.template) {
      case 'modern':
        TemplateComponent = TemplateModernPDF;
        break;
      case 'minimal':
        TemplateComponent = TemplateMinimalPDF;
        break;
      case 'classic':
      default:
        TemplateComponent = TemplateClassicPDF;
        break;
    }

    // Generate PDF blob
    const blob = await pdf(React.createElement(TemplateComponent, templateProps)).toBlob();

    // Create download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${new Date().toISOString().split('T')[0]}.pdf`;

    // Trigger download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true, message: 'PDF exported successfully' };
  } catch (error) {
    console.error('PDF export failed:', error);
    return { success: false, message: error.message };
  }
};

// Fallback to browser print dialog
export const printCV = () => {
  window.print();
};
