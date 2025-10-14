import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

export const TemplateMinimalPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 50,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      marginBottom: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
    },
    headerGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    contactLeft: {
      width: '30%',
    },
    contactItem: {
      fontSize: 8,
      color: '#6B7280',
      marginBottom: 6,
    },
    headerCenter: {
      width: '40%',
      alignItems: 'center',
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 10,
      alignSelf: 'center',
      borderWidth: 3,
      borderColor: meta.accentColor,
    },
    name: {
      fontSize: 20,
      fontWeight: 'normal',
      color: '#111827',
      marginBottom: 4,
      textAlign: 'center',
    },
    jobTitle: {
      fontSize: 11,
      color: '#6B7280',
      fontWeight: 'normal',
      textAlign: 'center',
    },
    contactRight: {
      width: '30%',
      alignItems: 'flex-end',
    },
    contactItemRight: {
      fontSize: 8,
      color: '#6B7280',
      marginBottom: 6,
      textAlign: 'right',
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'normal',
      color: meta.accentColor,
      marginBottom: 12,
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
      marginBottom: 16,
      paddingLeft: 12,
      borderLeftWidth: 2,
      borderLeftColor: meta.accentColor,
    },
    experienceTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    experienceCompany: {
      fontSize: 11,
      color: '#6B7280',
      marginTop: 2,
      marginBottom: 2,
    },
    experienceDate: {
      fontSize: 9,
      color: '#9CA3AF',
      marginTop: 2,
      marginBottom: 8,
    },
    bullet: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 4,
      lineHeight: 1.5,
    },
    educationItem: {
      marginBottom: 12,
      paddingLeft: 12,
      borderLeftWidth: 2,
      borderLeftColor: meta.accentColor,
    },
    educationDegree: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    educationSchool: {
      fontSize: 11,
      color: '#6B7280',
      marginTop: 2,
      marginBottom: 2,
    },
    educationDate: {
      fontSize: 9,
      color: '#9CA3AF',
      marginTop: 2,
    },
    skillsAndLanguages: {
      flexDirection: 'row',
      gap: 60,
    },
    skillsContainer: {
      flex: 1,
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
      flex: 1,
      borderLeftWidth: 1,
      borderLeftColor: '#D1D5DB',
      paddingLeft: 30,
    },
    languageItem: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 6,
    },
    languageName: {
      fontWeight: 'bold',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header - 3 Column Layout */}
        <View style={styles.header}>
          <View style={styles.headerGrid}>
            {/* Left Column - Contact Info */}
            <View style={styles.contactLeft}>
              {personal.email && (
                <Text style={styles.contactItem}>{personal.email}</Text>
              )}
              {personal.phone && (
                <Text style={styles.contactItem}>{personal.phone}</Text>
              )}
              {personal.location && (
                <Text style={styles.contactItem}>{personal.location}</Text>
              )}
            </View>

            {/* Center Column - Photo, Name, Title */}
            <View style={styles.headerCenter}>
              {personal.photo && (
                <Image src={personal.photo} style={styles.photo} />
              )}
              <Text style={styles.name}>
                {personal.firstName} {personal.lastName}
              </Text>
              {personal.title && (
                <Text style={styles.jobTitle}>{personal.title}</Text>
              )}
            </View>

            {/* Right Column - Contact Info */}
            <View style={styles.contactRight}>
              {personal.linkedin && (
                <Text style={styles.contactItemRight}>{personal.linkedin}</Text>
              )}
              {personal.github && (
                <Text style={styles.contactItemRight}>{personal.github}</Text>
              )}
              {personal.website && (
                <Text style={styles.contactItemRight}>{personal.website}</Text>
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
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <Text style={styles.experienceTitle}>{exp.title}</Text>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
                <Text style={styles.experienceDate}>
                  {exp.startDate} - {exp.endDate || 'Present'}
                  {exp.location && ` • ${exp.location}`}
                </Text>
                {exp.bullets.filter(b => b).map((bullet, idx) => (
                  <Text key={idx} style={styles.bullet}>— {bullet}</Text>
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
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationSchool}>{edu.school}</Text>
                <Text style={styles.educationDate}>
                  {edu.startDate} - {edu.endDate}
                  {edu.location && ` • ${edu.location}`}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills & Languages - Two columns */}
        {(skills.length > 0 || languages.length > 0) && (
          <View style={styles.skillsAndLanguages}>
            {/* Skills */}
            {skills.length > 0 && (
              <View style={styles.skillsContainer}>
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
              <View style={styles.languagesContainer}>
                <Text style={styles.sectionTitle}>Languages</Text>
                {languages.map((lang) => (
                  <Text key={lang.id} style={styles.languageItem}>
                    <Text style={styles.languageName}>{lang.lang}</Text>
                    {lang.level && ` — ${lang.level}`}
                  </Text>
                ))}
              </View>
            )}
          </View>
        )}
      </Page>
    </Document>
  );
};
