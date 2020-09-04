import Vue from 'vue';
import enLang from 'element-ui/lib/locale/lang/en';
import zhLang from 'element-ui/lib/locale/lang/zh-CN';
import VueI18n from 'vue-i18n';
import locales from './locales';

Vue.use(VueI18n);

// Separate each language from locales
const getLocale = (lang, lcs) => {
  let locale = {};

  if (Object.prototype.hasOwnProperty.call(lcs, lang)) {
    locale = lcs[lang];
  } else {
    Object.keys(lcs).forEach((key) => {
      locale[key] = getLocale(lang, lcs[key]);
    });
  }

  return locale;
};

const messages = {
  en: {
    ...getLocale('en', locales),
    ...enLang,
  },
  'zh-CN': {
    ...getLocale('zh-CN', locales),
    ...zhLang,
  },
};
export default new VueI18n({
  locale: 'zh-CN',
  messages,
});
