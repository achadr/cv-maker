/**
 * Validates if the CV has all required fields filled
 * @param {Object} cvData - The CV data from the store
 * @returns {Object} { isValid: boolean, missingFields: string[] }
 */
export const validateCV = (cvData) => {
  const missingFields = [];

  // Check required personal fields
  if (!cvData.personal?.firstName?.trim()) {
    missingFields.push('First Name');
  }

  if (!cvData.personal?.lastName?.trim()) {
    missingFields.push('Last Name');
  }

  // Check at least 1 work experience
  if (!cvData.experience || cvData.experience.length === 0) {
    missingFields.push('At least 1 Work Experience');
  }

  // Check at least 1 education
  if (!cvData.education || cvData.education.length === 0) {
    missingFields.push('At least 1 Education');
  }

  // Check at least 3 skills
  if (!cvData.skills || cvData.skills.length < 3) {
    missingFields.push(`At least 3 Skills (currently ${cvData.skills?.length || 0})`);
  }

  // Check at least 1 language
  if (!cvData.languages || cvData.languages.length === 0) {
    missingFields.push('At least 1 Language');
  }

  return {
    isValid: missingFields.length === 0,
    missingFields,
  };
};

/**
 * Gets a user-friendly message for missing fields
 * @param {string[]} missingFields - Array of missing field names
 * @returns {string} - User-friendly message
 */
export const getMissingFieldsMessage = (missingFields) => {
  if (missingFields.length === 0) {
    return '';
  }

  if (missingFields.length === 1) {
    return `Please fill in: ${missingFields[0]}`;
  }

  return `Please fill in: ${missingFields.join(', ')}`;
};
