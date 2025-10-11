import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPDF = async (elementId = 'cv-preview') => {
  try {
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error('CV preview element not found');
    }

    // Show loading state (optional)
    const originalStyle = element.style.cssText;

    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    // Restore original style
    element.style.cssText = originalStyle;

    // Calculate PDF dimensions (A4 size in mm)
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgData = canvas.toDataURL('image/png');

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

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
