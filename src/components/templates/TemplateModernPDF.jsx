import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

export const TemplateModernPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  // Create lighter and darker shades of accent color
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const darkerColor = rgb
    ? `rgb(${Math.max(0, rgb.r - 40)}, ${Math.max(0, rgb.g - 40)}, ${Math.max(0, rgb.b - 40)})`
    : meta.accentColor;

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#ffffff',
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    sidebar: {
      width: '35%',
      backgroundColor: meta.accentColor,
      color: '#ffffff',
      padding: 30,
    },
    mainContent: {
      width: '65%',
      padding: 30,
    },
    photo: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 20,
      alignSelf: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#ffffff',
    },
    title: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 1,
      opacity: 0.9,
      marginBottom: 20,
      color: '#ffffff',
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 10,
      opacity: 0.9,
      color: '#ffffff',
    },
    contactItem: {
      fontSize: 9,
      marginBottom: 6,
      color: '#ffffff',
    },
    skillName: {
      fontSize: 9,
      marginBottom: 3,
      color: '#ffffff',
    },
    skillBarBg: {
      width: '100%',
      height: 4,
      backgroundColor: darkerColor,
      borderRadius: 2,
      marginBottom: 10,
    },
    skillBarFill: {
      height: 4,
      backgroundColor: '#ffffff',
      borderRadius: 2,
      opacity: 0.9,
    },
    languageItem: {
      fontSize: 9,
      marginBottom: 6,
      color: '#ffffff',
    },
    mainSectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: meta.accentColor,
      borderBottomWidth: 2,
      borderBottomColor: meta.accentColor,
      paddingBottom: 6,
      marginBottom: 12,
    },
    summary: {
      fontSize: 9,
      lineHeight: 1.5,
      color: '#374151',
      marginBottom: 20,
    },
    experienceItem: {
      marginBottom: 16,
    },
    experienceTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    experienceDate: {
      fontSize: 8,
      color: '#6B7280',
      marginBottom: 4,
    },
    experienceCompany: {
      fontSize: 9,
      color: meta.accentColor,
      fontWeight: 'bold',
      marginBottom: 6,
    },
    bullet: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 3,
      paddingLeft: 10,
    },
    educationItem: {
      marginBottom: 12,
    },
    educationDegree: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    educationDate: {
      fontSize: 8,
      color: '#6B7280',
      marginBottom: 4,
    },
    educationSchool: {
      fontSize: 9,
      color: meta.accentColor,
      fontWeight: 'bold',
    },
    section: {
      marginBottom: 20,
    },
    sidebarSection: {
      marginBottom: 20,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          {/* Photo */}
          {personal.photo && (
            <Image src={personal.photo} style={styles.photo} />
          )}

          {/* Name and Title */}
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.name}>
              {personal.firstName} {personal.lastName}
            </Text>
            {personal.title && (
              <Text style={styles.title}>{personal.title}</Text>
            )}
          </View>

          {/* Contact */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            {personal.email && (
              <Text style={styles.contactItem}>{personal.email}</Text>
            )}
            {personal.phone && (
              <Text style={styles.contactItem}>{personal.phone}</Text>
            )}
            {personal.location && (
              <Text style={styles.contactItem}>{personal.location}</Text>
            )}
            {personal.linkedin && (
              <Text style={styles.contactItem}>{personal.linkedin}</Text>
            )}
            {personal.github && (
              <Text style={styles.contactItem}>{personal.github}</Text>
            )}
            {personal.website && (
              <Text style={styles.contactItem}>{personal.website}</Text>
            )}
          </View>

          {/* Skills */}
          {skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {skills.map((skill) => (
                <View key={skill.id} style={{ marginBottom: 10 }}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  {skill.level && (
                    <View style={styles.skillBarBg}>
                      <View
                        style={[
                          styles.skillBarFill,
                          {
                            width: skill.level === 'Expert' ? '100%' :
                                   skill.level === 'Advanced' ? '75%' :
                                   skill.level === 'Intermediate' ? '50%' : '25%'
                          }
                        ]}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sectionTitle}>LANGUAGES</Text>
              {languages.map((lang) => (
                <Text key={lang.id} style={styles.languageItem}>
                  {lang.lang}{lang.level && ` • ${lang.level}`}
                </Text>
              ))}
            </View>
          )}
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Summary */}
          {summary && (
            <View style={styles.section}>
              <Text style={styles.mainSectionTitle}>Summary</Text>
              <Text style={styles.summary}>{summary}</Text>
            </View>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.mainSectionTitle}>Work Experience</Text>
              {experience.map((exp) => (
                <View key={exp.id} style={styles.experienceItem}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </Text>
                  <Text style={styles.experienceCompany}>
                    {exp.company}{exp.location && ` • ${exp.location}`}
                  </Text>
                  {exp.bullets.filter(b => b).map((bullet, idx) => (
                    <Text key={idx} style={styles.bullet}>• {bullet}</Text>
                  ))}
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.mainSectionTitle}>Education</Text>
              {education.map((edu) => (
                <View key={edu.id} style={styles.educationItem}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                  <Text style={styles.educationSchool}>
                    {edu.school}{edu.location && ` • ${edu.location}`}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
