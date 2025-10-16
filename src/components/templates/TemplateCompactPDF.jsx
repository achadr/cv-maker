import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateCompactPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 20,
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      marginBottom: 12,
      paddingBottom: 10,
      borderBottomWidth: 2,
      borderBottomColor: meta.accentColor,
    },
    headerContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    headerLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    photo: {
      width: 50,
      height: 50,
      borderRadius: 3,
      borderWidth: 1,
      borderColor: meta.accentColor,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    title: {
      fontSize: 10,
      fontWeight: 'bold',
      color: meta.accentColor,
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 8,
      color: '#6B7280',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
    },
    summary: {
      fontSize: 8,
      lineHeight: 1.5,
      color: '#374151',
      marginBottom: 12,
    },
    content: {
      flexDirection: 'row',
      gap: 12,
    },
    mainColumn: {
      flex: 2,
    },
    sidebar: {
      flex: 1,
    },
    sectionTitle: {
      fontSize: 9,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 6,
      paddingBottom: 3,
      borderBottomWidth: 1,
      borderBottomColor: meta.accentColor,
    },
    experienceItem: {
      marginBottom: 10,
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
      flex: 1,
    },
    experienceDate: {
      fontSize: 7,
      color: '#6B7280',
      marginLeft: 6,
    },
    experienceCompany: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 4,
    },
    bullet: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 2,
      paddingLeft: 8,
    },
    educationItem: {
      marginBottom: 8,
    },
    educationTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      color: '#111827',
    },
    educationDate: {
      fontSize: 7,
      color: '#6B7280',
    },
    educationSchool: {
      fontSize: 8,
      color: '#374151',
    },
    skillItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    skillName: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#111827',
    },
    skillLevel: {
      fontSize: 7,
      color: '#6B7280',
    },
    languageItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
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
      marginBottom: 12,
    },
  });

  const MailIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M22 6l-10 7L2 6" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const PhoneIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const MapPinIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const LinkedinIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M2 9h4v12H2z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const GithubIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M9 18c-4.51 2-5-2-7-2" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const GlobeIcon = () => (
    <Svg width={8} height={8} viewBox="0 0 24 24" style={{ marginRight: 2 }}>
      <Path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M2 12h20" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerLeft}>
              {personal.photo && <Image src={personal.photo} style={styles.photo} />}
              <View>
                <Text style={styles.name}>
                  {personal.firstName} {personal.lastName}
                </Text>
                {personal.title && <Text style={styles.title}>{personal.title}</Text>}
              </View>
            </View>
          </View>

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

        {/* Summary */}
        {summary && <Text style={styles.summary}>{summary}</Text>}

        {/* Content */}
        <View style={styles.content}>
          {/* Main Column */}
          <View style={styles.mainColumn}>
            {/* Experience */}
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

            {/* Education */}
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
          </View>

          {/* Sidebar */}
          <View style={styles.sidebar}>
            {/* Skills */}
            {skills.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                {skills.map((skill) => (
                  <View key={skill.id} style={styles.skillItem}>
                    <Text style={styles.skillName}>{skill.name}</Text>
                    {skill.level && <Text style={styles.skillLevel}>{skill.level}</Text>}
                  </View>
                ))}
              </View>
            )}

            {/* Languages */}
            {languages.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Languages</Text>
                {languages.map((lang) => (
                  <View key={lang.id} style={styles.languageItem}>
                    <Text style={styles.languageName}>{lang.lang}</Text>
                    {lang.level && <Text style={styles.languageLevel}>{lang.level}</Text>}
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
