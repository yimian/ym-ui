<template>
  <!-- Language Switcher -->
  <div class="langSwitcher">
    <!-- Item -->
    <button
      class="langSwitcher__item"
      @click="switchLang('zh-CN')"
      :class="{ 'langSwitcher__item--active': currentLang === 'zh-CN' }">
      中文
    </button>
    <!-- Divider -->
    <span>/</span>
    <!-- Item -->
    <button
      class="langSwitcher__item"
      @click="switchLang('en')"
      :class="{ 'langSwitcher__item--active': currentLang === 'en' }">
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
$--color-neutral-70:  #8C97A9;
$--color-neutral-600: #3D4D68;
$--color-brand-600: #1C72E3;

  .langSwitcher {
    display: flex;
    align-items: center;
    margin-right: -0.25rem;
    line-height: 1rem;
    font-size: 14px;
    color: $--color-neutral-70;

    &__item {
      padding: 0.5rem 0.25rem;
      color: $--color-neutral-600;

      &:focus {
        outline: none;
      }

      &--active {
        color: $--color-brand-600;
      }
    }
  }
</style>
