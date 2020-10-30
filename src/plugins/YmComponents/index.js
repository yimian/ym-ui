import BaseButton from './BaseButton.vue';
import Status from './Status.vue';

const YmButton = {
  install(Vue) {
    Vue.component('YmButton', BaseButton);
  }
}

const YmStatus = {
  install(Vue) {
    Vue.component('YmStatus', Status);
  }
}

export {
  YmButton,
  YmStatus,
};