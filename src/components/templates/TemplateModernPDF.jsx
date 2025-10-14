import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

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
      padding: 25,
    },
    mainContent: {
      width: '65%',
      padding: 25,
    },
    photo: {
      width: 85,
      height: 85,
      borderRadius: 42.5,
      marginBottom: 12,
      alignSelf: 'center',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 6,
      color: '#ffffff',
    },
    title: {
      fontSize: 9,
      textTransform: 'uppercase',
      letterSpacing: 1,
      opacity: 0.9,
      marginBottom: 12,
      color: '#ffffff',
    },
    sectionTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
      marginBottom: 8,
      opacity: 0.95,
      color: '#ffffff',
    },
    contactItem: {
      fontSize: 9,
      color: '#ffffff',
      lineHeight: 1.3,
    },
    skillName: {
      fontSize: 8,
      color: '#ffffff',
      lineHeight: 1.5,
      flexWrap: 'wrap',
    },
    skillBarBg: {
      width: '100%',
      height: 3,
      backgroundColor: darkerColor,
      borderRadius: 1.5,
      marginBottom: 6,
    },
    skillBarFill: {
      height: 3,
      backgroundColor: '#ffffff',
      borderRadius: 1.5,
      opacity: 0.9,
    },
    languageItem: {
      fontSize: 8,
      marginBottom: 4,
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
      marginBottom: 16,
    },
    sidebarSection: {
      marginBottom: 12,
    },
  });

  // Icon components
  const MailIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const PhoneIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const MapPinIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const LinkedinIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 9h4v12H2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GithubIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M9 18c-4.51 2-5-2-7-2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GlobeIcon = ({ size = 10, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 12h20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

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
          <View style={{ marginBottom: 12 }}>
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
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <MailIcon />
                <Text style={styles.contactItem}>{personal.email}</Text>
              </View>
            )}
            {personal.phone && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <PhoneIcon />
                <Text style={styles.contactItem}>{personal.phone}</Text>
              </View>
            )}
            {personal.location && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <MapPinIcon />
                <Text style={styles.contactItem}>{personal.location}</Text>
              </View>
            )}
            {personal.linkedin && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <LinkedinIcon />
                <Text style={styles.contactItem}>{personal.linkedin}</Text>
              </View>
            )}
            {personal.github && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <GithubIcon />
                <Text style={styles.contactItem}>{personal.github}</Text>
              </View>
            )}
            {personal.website && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <GlobeIcon />
                <Text style={styles.contactItem}>{personal.website}</Text>
              </View>
            )}
          </View>

          {/* Skills */}
          {skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sectionTitle}>SKILLS</Text>
              {skills.map((skill) => (
                <View key={skill.id} style={{ marginBottom: 8 }}>
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
