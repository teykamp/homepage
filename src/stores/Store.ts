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
    languages: ['en', 'de'],
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
        achievements: {
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
            year: '2023 - Present',
            accomplishments: {
              1: 'Successfully oversaw a comprehensive 6-month project from inception to completion, rapidly achieving milestones by boosting objective completion rates by 200% and 150% respectively.',
              2: 'Conceptualized a variety of chemical process diagrams and remediation procedures ranging from heavy metals to fluorinated hydrocarbons in a variety of chellenging environmental conditions.',
              3: 'Integral member of compliance unit tasked with the strategic sampling of both residential and industrial clientele, fostering collaborative interactions with residents and management.',
              4: 'Effectively maintained and improved existing infrastructure and workflows at a variety of sites.',
            }
          },
          2: {
            company: 'Freelance',
            title: 'Web Developer / Designer',
            year: '2022 - Present',
            accomplishments: {
              1: 'Worked for several clients worldwide.',
              2: 'Successful completion of projects across a variety of scopes and languages.',
            }
          },
          3: {
            company: 'PBS Engineering',
            title: 'Environmental Services Intern',
            year: '2021',
            accomplishments: {
              1: 'Spearheaded update of 40+ stormwater plans for new permit.',
              2: 'Wrote a variety of plans for clients to ensure environmental compliance.',
            }
          },
          4: {
            company: 'Rensselaer Polytechnic Institute',
            title: 'BS, Environmental Engineering',
            accomplishments: {
              1: 'Completed coursework with a focus on chemical engineering, environmental engineering, data science, and computer science.',
              2: 'Successfully executed a variety of challenging academic research and design projects in the fields of chemical and environmental engineering and computer science.',
            }
          },
        },
        projects: {
          1: {
            title: 'ArtSite',
            description: 'Full stack application that displays text or image posts in a blog-like style. Allows users to like, comment, and reply to posts. Includes database management tools and post statistics.',
            img: 'src/data/images/artsite.png',
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
            img: 'src/data/images/clubs.png',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'Typescript': 'blue',
            },
            src: 'https://github.com/teykamp/clubs',
            deploy: '',
          },
          3: {
            title: 'CoLab',
            description: 'Leverages Google Sheets api to generate lab reports and charts. Includes email sending, approvals, socket.io, and google authentication.',
            img: 'src/data/images/colab.png',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'Typescript': 'blue',
              'Socket.io': 'grey',
              'Google OAuth': 'red',
              'Google Sheets': 'green'
            },
            src: 'https://github.com/yonava/colab',
            deploy: '',
          },
          4: {
            title: 'Markov Chains',
            description: 'Drag-and-drop Markov Chain Simulator. Create new chains, run simulations, determine node and edge states, and generate a transition matrix.',
            img: 'src/data/images/markov.png',
            tags: {
              'Vue': 'green',
              'Typescript': 'blue',
              'VueUse': 'green',
              'MathJS': 'red',
            },
            src: 'https://github.com/Yonava/markov-chains',
            deploy: 'https://cs240.netlify.app/',
          },
          // 5: {
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
        title: [
          'Ich bin ein ',
          'Ingenieur ',
          'und ',
          'full-stack Softwareentwickler',
          '.'],
        subtitle: 'Ich löse herausfordernde und spannende Probleme in jeder Branche .',
        achievements: {
          1: 'Python, Javascript, C, and R selbst beigebracht',
          2: 'Erfolgreicher CS- und Mathe-Tutor über mehrere Jahre',
          3: 'Beherrschung vielen Disziplinen: Ingenieurwissenschaft, Softwareentwicklung und Data Science',
          4: 'Hohe Produktivitätssteigerung bei vielen Projekten',
          5: 'Funktioniert gut unter Druck und erfolgreich in zeitkritischen Situationen',
          6: 'Hat EIT und HAZWOPER 40hr Zertifikaten',
        },
        resume: {
          1: {
            company: 'AECOM',
            title: 'Umweltingenieur',
            year: '2023 - Jetzt',
            accomplishments: {
              1: 'Erfolgreiche Beaufsichtigung eines 6-monatigen Projekts von Anfang bis Ende indem die Zielabschlussraten um 200 % bzw. 150 % gesteigert wurden',
              2: 'Konzeption einer Vielzahl von chemischen Prozessdiagrammen und Sanierungsverfahren, die von Schwermetallen bis hin zu fluorierten Kohlenwasserstoffen unter einer Vielzahl von Umgebungsbedingungen reichen',
              3: 'Integrales Mitglied der Compliance-Mannschaft, deren Aufgabe sowohl private als auch gewerbliche Kunden strategisch zu beproben und die Zusammenarbeit mit den Bewohnern und dem Management zu fördern.',
              4: 'Effektive Wartung und Verbesserung der bestehenden Infrastruktur und Arbeitsabläufe an einer Vielzahl von Standorten.',
            }
          },
          2: {
            company: 'Freiberuflich',
            title: 'Web Developer / Designer',
            year: '2022 - Jetzt',
            accomplishments: {
              1: 'Arbeitete für mehrere Kunden weltweit.',
              2: 'Erfolgreicher Abschluss von Projekten in einer Vielzahl von Bereichen und Programmiersprachen.',
            }
          },
          3: {
            company: 'PBS Engineering',
            title: 'Environmental Services Intern',
            year: '2021',
            accomplishments: {
              1: 'Aktualisierung von 40+ Wasserplänen für neue Genehmigungen.',
              2: 'Verfasste eine Vielzahl von Plänen für Kunden, um die Einhaltung von Umweltvorschriften sicherzustellen.',
            }
          },
          4: {
            company: 'Rensselaer Polytechnic Institute',
            title: 'BS, Umweltingenieurwissenschaft',
            year: '2018 - 2022',
            accomplishments: {
              1: 'Studium des Chemieingenieurwesens, Umweltingenieurwesens, Data Science und Informatik.',
              2: 'Erfolgreiche Durchführung von akademischer Forschungs- und Designprojekte in den Bereichen Chemie- und Umweltingenieurwesen und Informatik.',
            }
          },
        },
        projects: {
          1: {
            title: 'ArtSite',
            description: 'Full-Stack-Anwendung, die Text- oder Bildbeiträge in einem Blog-ähnlichen Stil anzeigt. Ermöglicht es Benutzern, Beiträge zu liken, zu kommentieren und darauf zu antworten. Enthält Databaseverwaltungstools und Post-Statistiken.',
            img: 'src/data/images/artsite.png',
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
            description: 'Frontend zur Erstellung einer JSON-Ausgabe für Arduino-betriebene LED-Jonglierclubs. Ermöglicht den Import/Export von JSON, die Kommunikation mit einer selbst gebauten Arduino-API und die Möglichkeit, auf dem Arduino selbst zu laufen. Kann über einen Wi-Fi-Chip auf dem Arduino über ein Händy oder einen Computer aufgerufen werden.',
            img: 'src/data/images/clubs.png',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'Typescript': 'blue',
            },
            src: 'https://github.com/teykamp/clubs',
            deploy: '',
          },
          3: {
            title: 'CoLab',
            description: 'Leverages google sheets api to generate lab reports and charts. Includes email sending, approvals, socket.io, and google authentication.',
            img: 'src/data/images/colab.png',
            tags: {
              'Vue': 'green',
              'Vuetify': 'light-blue',
              'Typescript': 'blue',
              'Socket.io': 'grey',
              'Google OAuth': 'red',
              'Google Sheets': 'green'
            },
            src: 'https://github.com/yonava/colab',
            deploy: '',
          },
          4: {
            title: 'Markov Chains',
            description: 'Drag-and-drop Markov Chain Simulator. Create new chains, run simulations, determine node and edge states, and generate a transition matrix.',
            img: 'src/data/images/markov.png',
            tags: {
              'Vue': 'green',
              'Typescript': 'blue',
              'VueUse': 'green',
              'MathJS': 'red',
            },
            src: 'https://github.com/Yonava/markov-chains',
            deploy: 'https://cs240.netlify.app/',
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
    },
  }),
  actions: {
      setLanguage(language: string) {
          this.language = language
      }
  }
})