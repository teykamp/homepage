import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkMode: true,
        darkColor: {
            background:'#1a1a1a',
            text: '#fdfcfc',
            primary: '#2a2c34',
            gold: '#f8a40a',
            accent: '84FFFF',
        },
        lightColor: {
            background:'#fdfcfc',
            text: '#1a1a1a',
            primary: '#F1EFEF',
            mint: '#09f871',
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
                    'I\'m an', 
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