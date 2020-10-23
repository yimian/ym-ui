<template>
  <el-aside class="ym-sidebar">
    <app-sidebar-header />
    <app-sidebar-menu />
    <app-sidebar-footer />
  </el-aside>
</template>

<script>
import AppSidebarHeader from './SidebarHeader.vue';
import AppSidebarMenu from './SidebarMenu.vue';
import AppSidebarFooter from './SidebarFooter.vue';

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarHeader,
    AppSidebarMenu,
    AppSidebarFooter,
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
