// @flow

import i18n from 'i18next';

const en = require('./translations/en');
const hi = require('./translations/hi');

i18n.init({
  fallbackLng: 'en',
  initImmediate: false,
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    hi: {
      translation: hi,
    },
  },
});

i18n.ifExists = key => (i18n.exists(key) ? i18n.t(key) : '');

i18n.tf = (key, fallbackKey) => (i18n.exists(key) ? i18n.t(key) : i18n.ifExists(fallbackKey));

export default i18n;
