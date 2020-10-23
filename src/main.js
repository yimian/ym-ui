import Vue from 'vue';
import moment from 'moment';
import auth from 'vue-hamlet';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import router from './router';
import store from './store';
import API from './api';
import * as consts from './utils/consts';
import './utils/compatible-ie';
import i18n from './i18n';
import './plugins/element';
import './plugins/ym-components';
import './plugins/echarts';
import './plugins/ym-svg-sprite';
import './styles/index.scss';
import './styles/tailwind.css';


Vue.router = router;
Vue.store = store;

Vue.prototype.$api = API;
Vue.prototype.$consts = consts;
Vue.prototype.$moment = moment;

Vue.filter('formatDate', (v, isUTC = true, dateFormat = 'YYYY-MM-DD HH:mm:ss') => {
  if (v) {
    return isUTC ? moment.utc(v).local().format(dateFormat) : moment.utc(v).format(dateFormat);
  }

  return '';
});

// console.log('process.env', process.env);
Vue.use(auth, {
  appKey: process.env.VUE_APP_APP_KEY,
  // authRedirect: '/login',
  allowThirdpartyLogin: true,

  // get userinfo from own api
  // fetchUser: '/api/common/users/me',
});

sync(store, router);

const supportedLangs = ['zh-CN', 'en'];
let userLocale = navigator.language || navigator.userLanguage;

if (userLocale.match(/^zh/i)) {
  userLocale = 'zh';
} else if (userLocale.match(/^en/i)) {
  userLocale = 'en';
}

Vue.router.beforeEach((to, from, next) => {
  const { locale } = to.query;

  if (locale) {
    /* eslint-disable no-param-reassign */
    delete to.query.locale;
    if (supportedLangs.includes(locale)) {
      i18n.locale = locale;
      localStorage.setItem('YM-UI_LANGUAGE', locale);
    }
  }

  next();
});
i18n.locale = localStorage.getItem('YM-UI_LANGUAGE')
  || (supportedLangs.includes(userLocale) ? userLocale : 'zh-CN');
Vue.prototype.$locale.use(i18n.locale);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
