export const sampleData = {
  personalInfo: {
    fullName: 'Sarah Anderson',
    email: 'sarah.anderson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    linkedin: 'linkedin.com/in/sarahanderson',
    website: 'sarahanderson.dev',
    summary: 'Results-driven Full Stack Developer with 5+ years of experience building scalable web applications. Passionate about creating intuitive user experiences and writing clean, maintainable code. Proven track record of leading projects from conception to deployment while collaborating with cross-functional teams.',
    photo: null
  },
  experience: [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      startDate: '2021-06',
      endDate: '',
      current: true,
      description: '• Led development of microservices architecture serving 100K+ daily active users\n• Reduced page load time by 40% through performance optimization and code splitting\n• Mentored 3 junior developers and conducted code reviews\n• Implemented CI/CD pipeline reducing deployment time by 60%'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'San Francisco, CA',
      startDate: '2019-03',
      endDate: '2021-05',
      current: false,
      description: '• Built and maintained 5+ client-facing web applications using React and Node.js\n• Collaborated with design team to implement responsive UI components\n• Integrated third-party APIs including Stripe, SendGrid, and AWS S3\n• Participated in agile ceremonies and sprint planning'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartUp Labs',
      location: 'Oakland, CA',
      startDate: '2018-01',
      endDate: '2019-02',
      current: false,
      description: '• Developed front-end features for e-commerce platform using React and Redux\n• Fixed bugs and improved code quality through comprehensive testing\n• Worked closely with senior developers to learn best practices'
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      startDate: '2014-08',
      endDate: '2018-05',
      gpa: '3.7 / 4.0',
      description: 'Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems, Software Engineering\n\nActivities: President of Women in Tech Club, Hackathon Winner 2017'
    }
  ],
  skills: [
    { id: 1, name: 'JavaScript / TypeScript', level: 'expert' },
    { id: 2, name: 'React / Next.js', level: 'expert' },
    { id: 3, name: 'Node.js / Express', level: 'advanced' },
    { id: 4, name: 'Python / Django', level: 'advanced' },
    { id: 5, name: 'PostgreSQL / MongoDB', level: 'advanced' },
    { id: 6, name: 'AWS / Docker', level: 'intermediate' },
    { id: 7, name: 'Git / CI/CD', level: 'advanced' },
    { id: 8, name: 'Figma / UI Design', level: 'intermediate' }
  ],
  languages: [
    { id: 1, name: 'English', proficiency: 'native' },
    { id: 2, name: 'Spanish', proficiency: 'intermediate' },
    { id: 3, name: 'French', proficiency: 'basic' }
  ]
}
