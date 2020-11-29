<template>
  <el-aside class="ym-sidebar">
    <app-sidebar-header />
    <app-sidebar-menu :collapse="collapse" />
    <app-sidebar-footer />
  </el-aside>
</template>

<script>
import AppSidebarHeader from './sidebar/SidebarHeader.vue';
import AppSidebarMenu from './sidebar/SidebarMenu.vue';
import AppSidebarFooter from './sidebar/SidebarFooter.vue';

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarHeader,
    AppSidebarMenu,
    AppSidebarFooter,
  },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>
