import { defineStore } from 'pinia'

export const useSnackbar = defineStore('snackbar', {
  state: () => ({
    snackbar: false,
    text: '',
    color: ''
  }),
  actions: {
    showSnackbar(text: string, color: string = '') {
      this.text = text
      this.color = color
      this.snackbar = true
    },
  }
})

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    darkMode: true,
    darkColor: {
      background:'#1a1a1a',
      text: '#fdfcfc',
      primary: '#2a2c34',
      accent: '#f8a40a', // gold
    },
    lightColor: {
      background:'#fdfcfc',
      text: '#1a1a1a',
      primary: '#F1EFEF',
      accent: '#07e467', // mint
      // consider lavender
    }
  }),
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    }
  }
})

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: 'en',
    content: {
      en: { // add stuff for hanse chat and for BOSS whatever thing
        title: [
          'I\'m an', 
          'engineering consultant ', 
          'and ', 
          'full-stack developer', 
          '.'],
        subtitle: 'I solve challenging and engaging problems in any industry .',
        acheivements: {
          1: 'Self-taught Python, Javascript, C, and R',
          2: 'Successful CS and Math Tutor; In-depth over multiple years',
          3: 'Proficient in a variety of disciplines including Engineering, Programming, and Data Science',
          4: 'High increases in productivity on all projects joined',
          5: 'Works well under pressure, and successful in time-sensitive situations',
          6: 'Holds EIT and HAZWOPER 40hr certificates',
        },
        resume: {
          1: {
            company: 'AECOM',
            title: 'Environmental Engineer',
            year: '2023',
            accomplishments: {
              1: 'Successfully oversaw a comprehensive 6-month project from inception to completion, rapidly achieving milestones by boosting objective completion rates by 200% and 150% respectively.',
              2: 'Conceptualized a variety of chemical process diagrams and remediation procedures ranging from heavy metals to fluorinated hydrocarbons in a variety of chellenging environmental conditions.',
              3: 'Integral member of compliance unit tasked with the strategic sampling of both residential and industrial clientele, fostering collaborative interactions with residents and management.',
              4: 'Effectively maintained and improved existing infrastructure and workflows at a variety of sites.',
            }
          },
          2: {
            company: 'PBS Engineering',
            title: 'Environmental Services Intern',
            year: '2021',
            accomplishments: {
              1: 'Spearheaded update of 40+ stormwater plans for new permit.',
              2: 'Wrote a variety of plans for clients to ensure environmental compliance.',
            }
          },
          3: {
            company: 'Rensselaer P. I.',
            title: 'BS, Environmental Engineering',
            year: '2022',
            accomplishments: {
              1: 'Completed coursework with a focus on chemical engineering, environmental engineering, and computer science.',
              2: 'Successfully excecuted a variety of challenging academic research and design projects in the fields of chemical and environmental engineering and computer science.',
            }
          },
        },
        projects: {
          1: {
            title: 'ArtSite',
            description: 'Full stack application that displays text or image posts in a blog-like style. Allows users to like, comment, and reply to posts. Includes database management tools and post statistics.',
            img: '',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'MongoDB': 'green',
              'Typescript': 'blue',
              'Express': 'grey',
            },
            src: 'https://github.com/teykamp/artsite',
            deploy: 'https://artsite-production.up.railway.app/',
          },
          2: {
            title: 'Clubs',
            description: 'Front-end application to generate JSON output for arduino-run LED juggling clubs. Allows Import/Export of JSON, communication with a self-built arduino-api, and ability to run on the arduino itself. Can be accessed through a wi-fi chip on the arduino through a phone or computer.',
            img: '',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'Typescript': 'blue',
            },
            src: 'https://github.com/teykamp/clubs',
            deploy: '',
          },
          // 3: {
          //   title: 'Popout Portfolio',
          //   description: '',
          //   img: '',
          //   tags: {

          //   },
          //   src: '',
          //   deploy: '',
          // }
        }
      },
      de: {
          
      },
    },
  }),
  actions: {
      changeLanguage(language: 'en' | 'de') {
          this.language = language
      }
  }
})