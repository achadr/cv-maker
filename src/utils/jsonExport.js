/**
 * Exports CV data as a JSON file
 * @param {Object} cvData - The CV data from the store
 * @param {string} filename - Optional filename (defaults to cv-data.json)
 */
export const exportToJSON = (cvData, filename = 'cv-data.json') => {
  try {
    // Create a clean copy without store methods
    const dataToExport = {
      meta: cvData.meta,
      personal: cvData.personal,
      summary: cvData.summary,
      experience: cvData.experience,
      education: cvData.education,
      skills: cvData.skills,
      languages: cvData.languages,
      projects: cvData.projects,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };

    // Convert to JSON string with pretty formatting
    const jsonString = JSON.stringify(dataToExport, null, 2);

    // Create blob and download
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true };
  } catch (error) {
    console.error('Failed to export JSON:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Validates imported CV data structure
 * @param {Object} data - The imported data to validate
 * @returns {Object} { valid: boolean, errors: string[] }
 */
export const validateImportedData = (data) => {
  const errors = [];

  // Check required top-level properties
  if (!data.personal || typeof data.personal !== 'object') {
    errors.push('Missing or invalid personal data');
  }

  if (!Array.isArray(data.experience)) {
    errors.push('Missing or invalid experience array');
  }

  if (!Array.isArray(data.education)) {
    errors.push('Missing or invalid education array');
  }

  if (!Array.isArray(data.skills)) {
    errors.push('Missing or invalid skills array');
  }

  if (!Array.isArray(data.languages)) {
    errors.push('Missing or invalid languages array');
  }

  // Check personal data structure
  if (data.personal) {
    const requiredPersonalFields = ['firstName', 'lastName'];
    requiredPersonalFields.forEach(field => {
      if (!(field in data.personal)) {
        errors.push(`Missing personal field: ${field}`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Imports CV data from JSON file
 * @param {File} file - The JSON file to import
 * @returns {Promise<Object>} { success: boolean, data?: Object, error?: string }
 */
export const importFromJSON = (file) => {
  return new Promise((resolve) => {
    if (!file) {
      resolve({ success: false, error: 'No file provided' });
      return;
    }

    if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
      resolve({ success: false, error: 'Please select a JSON file' });
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);

        // Validate the imported data
        const validation = validateImportedData(jsonData);

        if (!validation.valid) {
          resolve({
            success: false,
            error: `Invalid CV data: ${validation.errors.join(', ')}`,
          });
          return;
        }

        // Return the valid data
        resolve({
          success: true,
          data: {
            meta: jsonData.meta || {},
            personal: jsonData.personal || {},
            summary: jsonData.summary || '',
            experience: jsonData.experience || [],
            education: jsonData.education || [],
            skills: jsonData.skills || [],
            languages: jsonData.languages || [],
            projects: jsonData.projects || [],
          },
        });
      } catch (error) {
        resolve({
          success: false,
          error: 'Invalid JSON file format',
        });
      }
    };

    reader.onerror = () => {
      resolve({
        success: false,
        error: 'Failed to read file',
      });
    };

    reader.readAsText(file);
  });
};
