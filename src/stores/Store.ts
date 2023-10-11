import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkMode: true,
        darkColor: {
            background:'#1a1a1a',
            text: '#fdfcfc',
            primary: '#323e49',
            gold: '#f8a40a',
            accent: '84FFFF',
        },
        lightColor: {
            background:'#fdfcfc',
            text: '#1a1a1a',
            primary: '#323e49',
            accent: '84FFFF',
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
            en: {
                title: [
                    'I\'m an ', 
                    'engineering consultant ', 
                    'and ', 
                    'full-stack developer', 
                    '.']
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