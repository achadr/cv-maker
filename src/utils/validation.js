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

  // Check at least 1 work experience with ALL fields filled
  const validExperiences = cvData.experience?.filter(
    exp =>
      exp.title?.trim() &&
      exp.company?.trim() &&
      exp.location?.trim() &&
      exp.startDate?.trim() &&
      exp.endDate?.trim() &&
      exp.bullets?.some(b => b?.trim()) // At least one bullet point with content
  ) || [];

  if (validExperiences.length === 0) {
    missingFields.push('At least 1 Work Experience (all fields: title, company, location, dates, bullets)');
  }

  // Check at least 1 education with ALL fields filled
  const validEducation = cvData.education?.filter(
    edu =>
      edu.degree?.trim() &&
      edu.school?.trim() &&
      edu.location?.trim() &&
      edu.startDate?.trim() &&
      edu.endDate?.trim()
  ) || [];

  if (validEducation.length === 0) {
    missingFields.push('At least 1 Education (all fields: degree, school, location, dates)');
  }

  // Check at least 3 skills with names
  const validSkills = cvData.skills?.filter(
    skill => skill.name?.trim()
  ) || [];

  if (validSkills.length < 3) {
    missingFields.push(`At least 3 Skills with names (currently ${validSkills.length})`);
  }

  // Check at least 1 language with name
  const validLanguages = cvData.languages?.filter(
    lang => lang.lang?.trim()
  ) || [];

  if (validLanguages.length === 0) {
    missingFields.push('At least 1 Language (with name)');
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
