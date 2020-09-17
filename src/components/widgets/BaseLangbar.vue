<template>
  <div class="flex items-center -mr-1 leading-4 text-sm text-netural-70">
    <button
      @click="switchLang('zh-CN')"
      :class="{ 'text-brand-600': currentLang === 'zh-CN' }">
      中文
    </button>
    /
    <button
      @click="switchLang('en')"
      :class="{ 'text-brand-600': currentLang === 'en' }">
      En
    </button>
  </div>
</template>

<script>
export default {
  name: 'LangBar',
  data() {
    return {
      currentLang: this.$i18n.locale,
    };
  },
  methods: {
    switchLang(lang = 'zh-CN') {
      this.currentLang = lang;
      this.$locale.use(lang);
      localStorage.setItem('YM-UI_LANGUAGE', lang);
    },
  },
};
</script>
<style lang="scss" scoped>
  button {
    @apply px-1 py-2 text-netural-600;

    &:focus {
      @apply outline-none;
    }
  }
</style>
