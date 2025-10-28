import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateClassicPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 35,
      paddingTop: 30,
      paddingBottom: 30,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      flexDirection: 'row',
      marginBottom: 16,
      gap: 16,
    },
    photo: {
      width: 90,
      height: 90,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: '#E5E7EB',
    },
    headerInfo: {
      flex: 1,
    },
    name: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    jobTitle: {
      fontSize: 13,
      color: '#374151',
      marginBottom: 10,
    },
    contactGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 6,
    },
    contactItem: {
      fontSize: 7.5,
      color: '#6B7280',
      flex: 1,
    },
    sectionTitle: {
      fontSize: 8,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1.2,
      color: meta.accentColor,
      borderBottomWidth: 1,
      borderBottomColor: meta.accentColor,
      paddingBottom: 2,
      marginBottom: 6,
    },
    summary: {
      fontSize: 8,
      lineHeight: 1.6,
      color: '#374151',
      marginBottom: 16,
    },
    section: {
      marginBottom: 16,
    },
    experienceItem: {
      marginBottom: 11,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 2,
    },
    experienceTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#111827',
    },
    experienceDate: {
      fontSize: 8,
      color: '#6B7280',
    },
    experienceCompany: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 3,
    },
    bullet: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 2,
      paddingLeft: 8,
      lineHeight: 1.4,
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
      fontSize: 10,
      fontWeight: 'bold',
      color: '#111827',
    },
    educationDate: {
      fontSize: 8,
      color: '#6B7280',
    },
    educationSchool: {
      fontSize: 8,
      color: '#374151',
    },
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    skillItem: {
      fontSize: 8,
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
      gap: 10,
    },
    languageItem: {
      fontSize: 8,
      color: '#374151',
      marginRight: 4,
    },
    languageName: {
      fontWeight: 'bold',
    },
  });

  // Icon components
  const MailIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const PhoneIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const MapPinIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const LinkedinIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 9h4v12H2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GithubIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M9 18c-4.51 2-5-2-7-2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GlobeIcon = ({ size = 8, color = '#6B7280' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 12h20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

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
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <MailIcon />
                  <Text style={styles.contactItem}>{personal.email}</Text>
                </View>
              )}
              {personal.phone && (
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <PhoneIcon />
                  <Text style={styles.contactItem}>{personal.phone}</Text>
                </View>
              )}
              {personal.location && (
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <MapPinIcon />
                  <Text style={styles.contactItem}>{personal.location}</Text>
                </View>
              )}
              {personal.linkedin && (
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <LinkedinIcon />
                  <Text style={styles.contactItem}>{personal.linkedin}</Text>
                </View>
              )}
              {personal.github && (
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <GithubIcon />
                  <Text style={styles.contactItem}>{personal.github}</Text>
                </View>
              )}
              {personal.website && (
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '48%', marginBottom: 3 }}>
                  <GlobeIcon />
                  <Text style={styles.contactItem}>{personal.website}</Text>
                </View>
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
