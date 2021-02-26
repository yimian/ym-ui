<template>
  <el-breadcrumb
    class="app-breadcrumb font-medium text-neutral-800"
    separator="/"
  >
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in levelList"
        :key="item.path"
      >
        <span
          v-if="index == levelList.length - 1"
          class="no-redirect"
        >
          {{ $t(`route.${item.name.toLowerCase()}`) }}
        </span>
        <a
          v-else
          @click.prevent="$router.push({ name: item.name })"
        >
          {{ $t(`route.${item.name.toLowerCase()}`) }}
        </a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name && (!item.meta || !item.meta.hidden));
      if (matched[0]?.name !== 'Index') {
        matched = [{ path: '/dashboard', name: 'Index' }].concat(matched);
      }
      this.levelList = matched;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
