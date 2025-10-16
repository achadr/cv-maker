import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Svg, Path } from '@react-pdf/renderer';

export const TemplateElegantPDF = ({ meta, personal, summary, experience, education, skills, languages }) => {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: '#ffffff',
      padding: 40,
      fontFamily: 'Times-Roman',
    },
    header: {
      textAlign: 'center',
      marginBottom: 25,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: meta.accentColor,
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginHorizontal: 'auto',
      marginBottom: 12,
      borderWidth: 2,
      borderColor: meta.accentColor,
    },
    name: {
      fontSize: 28,
      fontWeight: 'normal',
      letterSpacing: 1,
      color: '#111827',
      marginBottom: 6,
    },
    title: {
      fontSize: 14,
      fontStyle: 'italic',
      letterSpacing: 0.8,
      color: meta.accentColor,
      marginBottom: 12,
    },
    contactRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 16,
      fontSize: 9,
      color: '#6B7280',
    },
    contactItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    summary: {
      fontSize: 9,
      lineHeight: 1.6,
      color: '#374151',
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: 25,
      paddingHorizontal: 40,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'normal',
      color: meta.accentColor,
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: 1,
    },
    section: {
      marginBottom: 20,
    },
    experienceItem: {
      marginBottom: 16,
      paddingLeft: 16,
      borderLeftWidth: 2,
      borderLeftColor: meta.accentColor,
    },
    experienceHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 4,
    },
    experienceTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#111827',
    },
    experienceDate: {
      fontSize: 9,
      fontStyle: 'italic',
      color: '#6B7280',
    },
    experienceCompany: {
      fontSize: 10,
      color: '#374151',
      marginBottom: 8,
    },
    bullet: {
      fontSize: 9,
      color: '#374151',
      marginBottom: 4,
      paddingLeft: 10,
    },
    educationItem: {
      textAlign: 'center',
      marginBottom: 12,
    },
    educationDegree: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 4,
    },
    educationSchool: {
      fontSize: 10,
      color: '#374151',
      marginBottom: 2,
    },
    educationDate: {
      fontSize: 9,
      fontStyle: 'italic',
      color: '#6B7280',
    },
    twoColumn: {
      flexDirection: 'row',
      gap: 30,
    },
    column: {
      flex: 1,
    },
    skillItem: {
      textAlign: 'center',
      marginBottom: 6,
    },
    skillName: {
      fontSize: 9,
      fontWeight: 'bold',
      color: '#111827',
    },
    skillLevel: {
      fontSize: 9,
      fontStyle: 'italic',
      color: '#6B7280',
    },
  });

  const MailIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M22 6l-10 7L2 6" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const PhoneIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const MapPinIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const LinkedinIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M2 9h4v12H2z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const GithubIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M9 18c-4.51 2-5-2-7-2" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  const GlobeIcon = () => (
    <Svg width={9} height={9} viewBox="0 0 24 24" style={{ marginRight: 3 }}>
      <Path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M2 12h20" fill="none" stroke="#6B7280" strokeWidth="2" />
      <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="#6B7280" strokeWidth="2" />
    </Svg>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          {personal.photo && <Image src={personal.photo} style={styles.photo} />}
          <Text style={styles.name}>{personal.firstName} {personal.lastName}</Text>
          {personal.title && <Text style={styles.title}>{personal.title}</Text>}
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

        {summary && <Text style={styles.summary}>"{summary}"</Text>}

        {experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experience.map((exp) => (
              <View key={exp.id} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.experienceTitle}>{exp.title}</Text>
                  <Text style={styles.experienceDate}>
                    {exp.startDate} – {exp.endDate || 'Present'}
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
                <Text style={styles.educationDegree}>{edu.degree}</Text>
                <Text style={styles.educationSchool}>
                  {edu.school}{edu.location && ` • ${edu.location}`}
                </Text>
                <Text style={styles.educationDate}>
                  {edu.startDate} – {edu.endDate}
                </Text>
              </View>
            ))}
          </View>
        )}

        <View style={styles.twoColumn}>
          {skills.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {skills.map((skill) => (
                <View key={skill.id} style={styles.skillItem}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  {skill.level && <Text style={styles.skillLevel}> – {skill.level}</Text>}
                </View>
              ))}
            </View>
          )}

          {languages.length > 0 && (
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {languages.map((lang) => (
                <View key={lang.id} style={styles.skillItem}>
                  <Text style={styles.skillName}>{lang.lang}</Text>
                  {lang.level && <Text style={styles.skillLevel}> – {lang.level}</Text>}
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
