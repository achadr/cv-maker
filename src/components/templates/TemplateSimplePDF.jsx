import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

export const TemplateSimplePDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 35,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      marginBottom: 20,
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 3,
    },
    title: {
      fontSize: 14,
      color: '#374151',
      marginBottom: 10,
    },
    contactInfo: {
      fontSize: 9,
      color: '#6B7280',
      lineHeight: 1.4,
    },
    summary: {
      fontSize: 9,
      lineHeight: 1.5,
      color: '#374151',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 10,
      paddingBottom: 3,
      borderBottomWidth: 1,
      borderBottomColor: '#D1D5DB',
    },
    section: {
      marginBottom: 18,
    },
    experienceItem: {
      marginBottom: 12,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
      marginBottom: 3,
      paddingLeft: 10,
    },
    educationItem: {
      marginBottom: 10,
    },
    educationTitle: {
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
    skillsRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillItem: {
      fontSize: 9,
      color: '#374151',
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal.firstName} {personal.lastName}</Text>
          {personal.title && <Text style={styles.title}>{personal.title}</Text>}
          <View style={styles.contactInfo}>
            {personal.email && <Text>{personal.email}</Text>}
            {personal.phone && <Text>{personal.phone}</Text>}
            {personal.location && <Text>{personal.location}</Text>}
            {personal.linkedin && <Text>{personal.linkedin}</Text>}
            {personal.github && <Text>{personal.github}</Text>}
            {personal.website && <Text>{personal.website}</Text>}
          </View>
        </View>

        {summary && <Text style={styles.summary}>{summary}</Text>}

        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
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

        {education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu) => (
              <View key={edu.id} style={styles.educationItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.educationTitle}>{edu.degree}</Text>
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

        {skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsRow}>
              {skills.map((skill) => (
                <Text key={skill.id} style={styles.skillItem}>
                  {skill.name}{skill.level && ` (${skill.level})`}
                </Text>
              ))}
            </View>
          </View>
        )}

        {languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            <View style={styles.skillsRow}>
              {languages.map((lang) => (
                <Text key={lang.id} style={styles.skillItem}>
                  {lang.lang}{lang.level && ` (${lang.level})`}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
