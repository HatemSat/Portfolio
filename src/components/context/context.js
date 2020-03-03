import React from 'react'
import eng from '../../assets/translations/eng.json'
import fr from '../../assets/translations/fr.json'

export const LanguageContext = React.createContext({
    lang: eng,
    toggleLanguage: () => { }
});