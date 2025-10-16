import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateCreativePDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(meta.accentColor);
  const lightColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : '#f5f5f5';
  const mediumColor = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.15)` : '#e8e8e8';

  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      fontFamily: meta.font === 'Inter, sans-serif' ? 'Helvetica' :
                   meta.font === 'Georgia, serif' ? 'Times-Roman' : 'Helvetica',
    },
    header: {
      backgroundColor: meta.accentColor,
      padding: 25,
      paddingBottom: 35,
    },
    headerContent: {
      flexDirection: 'row',
      gap: 15,
      alignItems: 'flex-start',
    },
    photo: {
      width: 85,
      height: 85,
      objectFit: 'cover',
    },
    photoContainer: {
      padding: 2,
      backgroundColor: '#ffffff',
    },
    name: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#ffffff',
      marginBottom: 4,
      letterSpacing: -0.5,
    },
    titleBadge: {
      backgroundColor: '#ffffff',
      color: meta.accentColor,
      fontSize: 9,
      fontWeight: 'bold',
      paddingHorizontal: 12,
      paddingVertical: 5,
      letterSpacing: 2,
      textTransform: 'uppercase',
      marginTop: 6,
      alignSelf: 'flex-start',
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12,
    },
    contactBadge: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      fontSize: 7,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    content: {
      padding: 25,
    },
    summaryBox: {
      backgroundColor: lightColor,
      borderLeftWidth: 4,
      borderLeftColor: meta.accentColor,
      padding: 12,
      paddingLeft: 16,
      marginBottom: 20,
    },
    summaryTitle: {
      fontSize: 8,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 1.5,
      marginBottom: 6,
    },
    summaryText: {
      fontSize: 9,
      lineHeight: 1.5,
      color: '#374151',
      fontWeight: 500,
    },
    twoColumn: {
      flexDirection: 'row',
      gap: 20,
    },
    leftColumn: {
      flex: 2,
    },
    rightColumn: {
      flex: 1,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
    sectionBar: {
      width: 3,
      height: 20,
      backgroundColor: meta.accentColor,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    sectionTitleSmall: {
      fontSize: 12,
      fontWeight: 'bold',
      color: meta.accentColor,
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
    experienceItem: {
      marginBottom: 14,
      paddingLeft: 15,
      borderLeftWidth: 2,
      borderLeftColor: mediumColor,
      borderLeftStyle: 'dashed',
      position: 'relative',
    },
    timelineDot: {
      position: 'absolute',
      left: -6,
      top: 0,
      width: 10,
      height: 10,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: meta.accentColor,
      backgroundColor: '#ffffff',
    },
    experienceTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    experienceDate: {
      fontSize: 7,
      fontWeight: 'bold',
      color: meta.accentColor,
      backgroundColor: lightColor,
      paddingHorizontal: 6,
      paddingVertical: 3,
      borderRadius: 2,
      alignSelf: 'flex-start',
      marginBottom: 4,
    },
    experienceCompany: {
      fontSize: 9,
      fontWeight: 'bold',
      color: '#6B7280',
      marginBottom: 6,
    },
    bullet: {
      fontSize: 8,
      color: '#374151',
      marginBottom: 3,
      flexDirection: 'row',
      gap: 6,
    },
    bulletSymbol: {
      color: meta.accentColor,
      fontWeight: 'bold',
    },
    educationItem: {
      backgroundColor: lightColor,
      padding: 10,
      borderRadius: 4,
      marginBottom: 10,
    },
    educationDegree: {
      fontSize: 11,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 2,
    },
    educationDate: {
      fontSize: 7,
      fontWeight: 'bold',
      color: meta.accentColor,
      marginBottom: 4,
    },
    educationSchool: {
      fontSize: 9,
      fontWeight: 'bold',
      color: '#6B7280',
    },
    skillItem: {
      marginBottom: 12,
    },
    skillRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    skillName: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#111827',
    },
    skillLevel: {
      fontSize: 7,
      fontWeight: 'bold',
      color: meta.accentColor,
    },
    skillBarBg: {
      width: '100%',
      height: 4,
      backgroundColor: '#E5E7EB',
      borderRadius: 2,
      overflow: 'hidden',
    },
    skillBarFill: {
      height: 4,
      backgroundColor: meta.accentColor,
      borderRadius: 2,
    },
    languageItem: {
      backgroundColor: lightColor,
      padding: 6,
      paddingHorizontal: 10,
      borderRadius: 3,
      marginBottom: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    languageName: {
      fontSize: 8,
      fontWeight: 'bold',
      color: '#111827',
    },
    languageLevel: {
      fontSize: 7,
      fontWeight: 'bold',
      color: meta.accentColor,
    },
    section: {
      marginBottom: 18,
    },
  });

  // Icon components
  const MailIcon = ({ size = 7, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M22 6l-10 7L2 6" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const PhoneIcon = ({ size = 7, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const MapPinIcon = ({ size = 7, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const LinkedinIcon = ({ size = 7, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 9h4v12H2z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GithubIcon = ({ size = 7, color = '#ffffff' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M9 18c-4.51 2-5-2-7-2" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );

  const GlobeIcon = ({ size = 7, color = '#ffffff' }) => (
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
          <View style={styles.headerContent}>
            {/* Photo */}
            {personal.photo && (
              <View style={styles.photoContainer}>
                <Image src={personal.photo} style={styles.photo} />
              </View>
            )}

            {/* Name & Title */}
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {personal.firstName} {personal.lastName}
              </Text>
              {personal.title && (
                <View style={styles.titleBadge}>
                  <Text>{personal.title}</Text>
                </View>
              )}
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.contactRow}>
            {personal.email && (
              <View style={styles.contactBadge}>
                <MailIcon />
                <Text>{personal.email}</Text>
              </View>
            )}
            {personal.phone && (
              <View style={styles.contactBadge}>
                <PhoneIcon />
                <Text>{personal.phone}</Text>
              </View>
            )}
            {personal.location && (
              <View style={styles.contactBadge}>
                <MapPinIcon />
                <Text>{personal.location}</Text>
              </View>
            )}
            {personal.linkedin && (
              <View style={styles.contactBadge}>
                <LinkedinIcon />
                <Text>{personal.linkedin}</Text>
              </View>
            )}
            {personal.github && (
              <View style={styles.contactBadge}>
                <GithubIcon />
                <Text>{personal.github}</Text>
              </View>
            )}
            {personal.website && (
              <View style={styles.contactBadge}>
                <GlobeIcon />
                <Text>{personal.website}</Text>
              </View>
            )}
          </View>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Summary */}
          {summary && (
            <View style={styles.summaryBox}>
              <Text style={styles.summaryTitle}>About Me</Text>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
          )}

          {/* Two Column Layout */}
          <View style={styles.twoColumn}>
            {/* Left Column */}
            <View style={styles.leftColumn}>
              {/* Experience */}
              {experience.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.sectionBar} />
                    <Text style={styles.sectionTitle}>Experience</Text>
                  </View>
                  {experience.map((exp) => (
                    <View key={exp.id} style={styles.experienceItem}>
                      <View style={styles.timelineDot} />
                      <Text style={styles.experienceTitle}>{exp.title}</Text>
                      <Text style={styles.experienceDate}>
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </Text>
                      <Text style={styles.experienceCompany}>
                        {exp.company}{exp.location && ` • ${exp.location}`}
                      </Text>
                      {exp.bullets.filter(b => b).map((bullet, idx) => (
                        <View key={idx} style={styles.bullet}>
                          <Text style={styles.bulletSymbol}>▸</Text>
                          <Text style={{ flex: 1 }}>{bullet}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              )}

              {/* Education */}
              {education.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.sectionBar} />
                    <Text style={styles.sectionTitle}>Education</Text>
                  </View>
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

            {/* Right Column */}
            <View style={styles.rightColumn}>
              {/* Skills */}
              {skills.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.sectionBar} />
                    <Text style={styles.sectionTitleSmall}>Skills</Text>
                  </View>
                  {skills.map((skill) => (
                    <View key={skill.id} style={styles.skillItem}>
                      <View style={styles.skillRow}>
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
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <View style={styles.sectionBar} />
                    <Text style={styles.sectionTitleSmall}>Languages</Text>
                  </View>
                  {languages.map((lang) => (
                    <View key={lang.id} style={styles.languageItem}>
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
        </View>
      </Page>
    </Document>
  );
};
