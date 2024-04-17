import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import cn from './locales/zh-cn.json'
import hk from './locales/zh-hk.json'
import en from './locales/en-us.json'

const resources = {
    cn: {
        translation: cn
    },
    hk: {
        translation: hk
    },
    en: {
        translation: en
    },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    fallbackLng: 'en',
    detection: {
        caches: ['localStorage', 'sessionStorage', 'cookie'],
    }
})

export default i18n