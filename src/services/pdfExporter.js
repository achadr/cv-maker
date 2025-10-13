import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId = 'cv-preview') => {
  try {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error('CV preview element not found');
    }

    // Find the actual CV template element (first child of cv-preview)
    const cvElement = element.firstChild;

    if (!cvElement) {
      throw new Error('CV template element not found');
    }

    // Show loading state (optional)
    const originalStyle = cvElement.style.cssText;

    // Capture the element as canvas with better settings
    const canvas = await html2canvas(cvElement, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1200, // Ensure consistent rendering width
    });

    // Restore original style
    cvElement.style.cssText = originalStyle;

    // A4 dimensions in mm
    const pdfWidth = 210;
    const pdfHeight = 297;

    // Calculate dimensions to fit the content properly
    const canvasAspectRatio = canvas.height / canvas.width;
    let imgWidth = pdfWidth;
    let imgHeight = pdfWidth * canvasAspectRatio;

    // If content is taller than A4, we might need multiple pages
    // For now, scale to fit on one page if possible
    if (imgHeight > pdfHeight) {
      imgHeight = pdfHeight;
      imgWidth = pdfHeight / canvasAspectRatio;
    }

    // Create PDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgData = canvas.toDataURL('image/png', 1.0);

    // Center the image on the page
    const xOffset = (pdfWidth - imgWidth) / 2;
    const yOffset = 0;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', xOffset, yOffset, imgWidth, imgHeight);

    // Download PDF
    const fileName = `CV_${new Date().toISOString().split('T')[0]}.pdf`;
    pdf.save(fileName);

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
