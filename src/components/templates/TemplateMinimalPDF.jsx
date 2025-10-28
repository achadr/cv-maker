import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateMinimalPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 48,
      paddingTop: 32,
      paddingBottom: 32,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      marginBottom: 20,
      paddingBottom: 16,
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
    },
    headerCenter: {
      width: '40%',
      alignItems: 'center',
    },
    photo: {
      width: 68,
      height: 68,
      borderRadius: 34,
      marginBottom: 8,
      alignSelf: 'center',
      borderWidth: 3,
      borderColor: meta.accentColor,
    },
    name: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#111827',
      marginBottom: 2,
      textAlign: 'center',
      letterSpacing: 0.3,
    },
    jobTitle: {
      fontSize: 8,
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
      textAlign: 'right',
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 'normal',
      color: meta.accentColor,
      marginBottom: 10,
    },
    summary: {
      fontSize: 8,
      lineHeight: 1.6,
      color: '#374151',
      marginBottom: 20,
    },
    section: {
      marginBottom: 20,
    },
    experienceItem: {
      marginBottom: 8,
      paddingLeft: 8,
      borderLeftWidth: 2,
      borderLeftColor: meta.accentColor,
    },
    experienceTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 1,
    },
    experienceCompany: {
      fontSize: 9,
      color: '#6B7280',
      marginTop: 1,
      marginBottom: 1,
    },
    experienceDate: {
      fontSize: 8,
      color: '#9CA3AF',
      marginTop: 1,
      marginBottom: 4,
    },
    bullet: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 2,
      lineHeight: 1.3,
    },
    educationItem: {
      marginBottom: 8,
      paddingLeft: 8,
      borderLeftWidth: 2,
      borderLeftColor: meta.accentColor,
    },
    educationDegree: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 1,
    },
    educationSchool: {
      fontSize: 9,
      color: '#6B7280',
      marginTop: 1,
      marginBottom: 1,
    },
    educationDate: {
      fontSize: 8,
      color: '#9CA3AF',
      marginTop: 1,
    },
    skillsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
    },
    skillItem: {
      fontSize: 8,
      color: '#374151',
      width: skills.length <= 3 ? '100%' : skills.length <= 6 ? '48%' : '31%',
      marginBottom: 4,
    },
    skillName: {
      fontWeight: 'bold',
    },
    languagesRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    languageItem: {
      fontSize: 8,
      color: '#374151',
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
        {/* Header - 3 Column Layout */}
        <View style={styles.header}>
          <View style={styles.headerGrid}>
            {/* Left Column - Contact Info */}
            <View style={styles.contactLeft}>
              {personal.email && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <MailIcon />
                  <Text style={styles.contactItem}>{personal.email}</Text>
                </View>
              )}
              {personal.phone && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <PhoneIcon />
                  <Text style={styles.contactItem}>{personal.phone}</Text>
                </View>
              )}
              {personal.location && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 4 }}>
                  <MapPinIcon />
                  <Text style={styles.contactItem}>{personal.location}</Text>
                </View>
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
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 4 }}>
                  <Text style={styles.contactItemRight}>{personal.linkedin}</Text>
                  <View style={{ marginLeft: 3 }}>
                    <LinkedinIcon />
                  </View>
                </View>
              )}
              {personal.github && (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 4 }}>
                  <Text style={styles.contactItemRight}>{personal.github}</Text>
                  <View style={{ marginLeft: 3 }}>
                    <GithubIcon />
                  </View>
                </View>
              )}
              {personal.website && (
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginBottom: 4 }}>
                  <Text style={styles.contactItemRight}>{personal.website}</Text>
                  <View style={{ marginLeft: 3 }}>
                    <GlobeIcon />
                  </View>
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
            <View style={styles.languagesRow}>
              {languages.map((lang) => (
                <Text key={lang.id} style={styles.languageItem}>
                  <Text style={styles.languageName}>{lang.lang}</Text>
                  {lang.level && ` — ${lang.level}`}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};
