<template>
  <el-aside class="ym-sidebar">
    <app-sidebar-header />
    <app-sidebar-menu />
    <app-sidebar-footer />
  </el-aside>
</template>

<script>
import SidebarHeader from './SidebarHeader.vue';
import SidebarMenu from './SidebarMenu.vue';
import SidebarFooter from './SidebarFooter.vue';

export default {
  name: 'AppSidebar',
  components: {
    SidebarHeader,
    SidebarMenu,
    SidebarFooter,
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
