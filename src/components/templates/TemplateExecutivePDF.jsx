import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateExecutivePDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const lightBg = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)` : '#f8f9fa';
  const borderColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` : '#e0e0e0';

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      backgroundColor: lightBg,
      borderBottomWidth: 4,
      borderBottomColor: meta.accentColor,
      padding: 25,
      flexDirection: 'row',
      gap: 15,
    },
    photo: {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      borderWidth: 3,
      borderColor: meta.accentColor,
    },
    headerInfo: {
      flex: 1,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      color: meta.accentColor,
      marginBottom: 6,
    },
    titleText: {
      fontSize: 14,
      color: '#374151',
      fontWeight: 'bold',
      marginBottom: 8,
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 10,
    },
    contactItem: {
      fontSize: 8,
      color: '#6B7280',
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      flexDirection: 'row',
    },
    mainColumn: {
      flex: 1,
      paddingLeft: 25,
      paddingRight: 15,
      paddingTop: 20,
      paddingBottom: 20,
    },
    sidebar: {
      width: 160,
      backgroundColor: lightBg,
      borderLeftWidth: 1,
      borderLeftColor: borderColor,
      paddingLeft: 15,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
    },
    mainSectionTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 1,
      borderBottomWidth: 2,
      borderBottomColor: meta.accentColor,
      paddingBottom: 6,
      marginBottom: 12,
    },
    sidebarSectionTitle: {
      fontSize: 9,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      borderBottomWidth: 1,
      borderBottomColor: borderColor,
      paddingBottom: 4,
      marginBottom: 10,
    },
    summary: {
      fontSize: 9,
      lineHeight: 1.5,
      color: '#374151',
      fontStyle: 'italic',
      marginBottom: 18,
    },
    experienceItem: {
      marginBottom: 14,
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
      fontWeight: 'bold',
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
      fontWeight: 'bold',
      marginBottom: 4,
    },
    educationSchool: {
      fontSize: 9,
      color: meta.accentColor,
      fontWeight: 'bold',
    },
    skillItem: {
      marginBottom: 10,
    },
    skillName: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 3,
    },
    skillLevel: {
      fontSize: 7,
      color: '#6B7280',
    },
    skillBarBg: {
      width: '100%',
      height: 3,
      backgroundColor: '#E5E7EB',
      borderRadius: 1.5,
      marginTop: 3,
    },
    skillBarFill: {
      height: 3,
      backgroundColor: meta.accentColor,
      borderRadius: 1.5,
    },
    languageRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
    languageName: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#111827',
    },
    languageLevel: {
      fontSize: 7,
      color: '#6B7280',
    },
    section: {
      marginBottom: 16,
    },
    sidebarSection: {
      marginBottom: 16,
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

          {/* Header Info */}
          <View style={styles.headerInfo}>
            <Text style={styles.name}>
              {personal.firstName} {personal.lastName}
            </Text>
            {personal.title && (
              <Text style={styles.titleText}>{personal.title}</Text>
            )}
            <View style={styles.contactRow}>
              {personal.email && (
                <View style={styles.contactItem}>
                  <MailIcon />
                  <Text>{personal.email}</Text>
                </View>
              )}
              {personal.phone && (
                <View style={styles.contactItem}>
                  <PhoneIcon />
                  <Text>{personal.phone}</Text>
                </View>
              )}
              {personal.location && (
                <View style={styles.contactItem}>
                  <MapPinIcon />
                  <Text>{personal.location}</Text>
                </View>
              )}
              {personal.linkedin && (
                <View style={styles.contactItem}>
                  <LinkedinIcon />
                  <Text>{personal.linkedin}</Text>
                </View>
              )}
              {personal.github && (
                <View style={styles.contactItem}>
                  <GithubIcon />
                  <Text>{personal.github}</Text>
                </View>
              )}
              {personal.website && (
                <View style={styles.contactItem}>
                  <GlobeIcon />
                  <Text>{personal.website}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Content - Two Columns */}
        <View style={styles.content}>
          {/* Main Column */}
          <View style={styles.mainColumn}>
            {/* Summary */}
            {summary && (
              <View style={styles.section}>
                <Text style={styles.mainSectionTitle}>Executive Summary</Text>
                <Text style={styles.summary}>{summary}</Text>
              </View>
            )}

            {/* Experience */}
            {experience.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.mainSectionTitle}>Professional Experience</Text>
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

          {/* Sidebar */}
          <View style={styles.sidebar}>
            {/* Skills */}
            {skills.length > 0 && (
              <View style={styles.sidebarSection}>
                <Text style={styles.sidebarSectionTitle}>Core Competencies</Text>
                {skills.map((skill) => (
                  <View key={skill.id} style={styles.skillItem}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={styles.skillName}>{skill.name}</Text>
                      {skill.level && (
                        <Text style={styles.skillLevel}>{skill.level}</Text>
                      )}
                    </View>
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
                <Text style={styles.sidebarSectionTitle}>Languages</Text>
                {languages.map((lang) => (
                  <View key={lang.id} style={styles.languageRow}>
                    <Text style={styles.languageName}>{lang.lang}</Text>
                    {lang.level && (
                      <Text style={styles.languageLevel}>{lang.level}</Text>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};
