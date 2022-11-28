import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import esCL from './esCL/translation.json'

export const resources = {
  esCL: {
    translation: esCL,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'esCL',
  fallbackLng: 'esCL',
  interpolation: {
    escapeValue: false,
  },
})
