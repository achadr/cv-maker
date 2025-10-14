import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

export const TemplateClassicPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 40,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      flexDirection: 'row',
      marginBottom: 20,
      gap: 20,
    },
    photo: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    headerInfo: {
      flex: 1,
    },
    name: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 4,
    },
    jobTitle: {
      fontSize: 16,
      color: '#374151',
      marginBottom: 10,
    },
    contactGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    contactItem: {
      fontSize: 9,
      color: '#6B7280',
      width: '48%',
      marginBottom: 4,
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      color: meta.accentColor,
      borderBottomWidth: 1,
      borderBottomColor: meta.accentColor,
      paddingBottom: 4,
      marginBottom: 10,
    },
    summary: {
      fontSize: 9,
      lineHeight: 1.5,
      color: '#374151',
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    experienceItem: {
      marginBottom: 12,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 2,
    },
    experienceTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
    },
    experienceDate: {
      fontSize: 9,
      color: '#6B7280',
    },
    experienceCompany: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 4,
    },
    bullet: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 2,
      paddingLeft: 10,
    },
    educationItem: {
      marginBottom: 10,
    },
    educationHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 2,
    },
    educationDegree: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
    },
    educationDate: {
      fontSize: 9,
      color: '#6B7280',
    },
    educationSchool: {
      fontSize: 9,
      color: '#374151',
    },
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillItem: {
      fontSize: 9,
      color: '#374151',
      width: skills.length <= 3 ? '100%' : skills.length <= 6 ? '48%' : '31%',
      marginBottom: 6,
    },
    skillName: {
      fontWeight: 'bold',
    },
    languagesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    languageItem: {
      fontSize: 9,
      color: '#374151',
    },
    languageName: {
      fontWeight: 'bold',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {/* Photo */}
          {personal.photo && (
            <Image src={personal.photo} style={styles.photo} />
          )}

          {/* Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>
              {personal.firstName} {personal.lastName}
            </Text>
            {personal.title && (
              <Text style={styles.jobTitle}>{personal.title}</Text>
            )}
            <View style={styles.contactGrid}>
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
          </View>
        </View>

        {/* Summary */}
        {summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </Text>
                </View>
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
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <View style={styles.educationHeader}>
                  <Text style={styles.educationDegree}>{edu.degree}</Text>
                  <Text style={styles.educationDate}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <Text style={styles.educationSchool}>
                  {edu.school}{edu.location && ` • ${edu.location}`}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill) => (
                <Text key={skill.id} style={styles.skillItem}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  {skill.level && ` (${skill.level})`}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.languagesContainer}>
              {languages.map((lang) => (
                <Text key={lang.id} style={styles.languageItem}>
                  <Text style={styles.languageName}>{lang.lang}</Text> ({lang.level})
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
