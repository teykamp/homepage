import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
    state: () => ({
        darkMode: true,
        darkColor: {
            background:'#1a1a1a',
            text: '#fdfcfc',
            primary: '#323e49',
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