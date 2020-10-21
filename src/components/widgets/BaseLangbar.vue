<template>
  <el-dropdown
    :placement="placement"
    :trigger="trigger">
    <div :class="[className ,'flex items-center transition duration-150 ease-in-out']">
      <div class="flex items-center justify-center w-8 h-8">
        <ym-svg svg-name="wikis" class="w-5 h-5" />
      </div>
      <span class="ml-1">{{ currentLang === 'zh-CN' ? '中文' : 'En' }}</span>
      <slot name="arrow"></slot>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item @click.native="switchLang('zh-CN')">中文</el-dropdown-item>
      <el-dropdown-item @click.native="switchLang('en')">En</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LangBar',
  props: {
    className: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'right',
    },
    trigger: {
      type: String,
      default: 'click',
    },
  },
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
</style>
