<template>
  <el-aside class="ym-sidebar">
    <app-sidebar-header :is-collapse="isCollapse" />
    <app-sidebar-menu :is-collapse="isCollapse" />
    <app-sidebar-footer v-if="!isCollapse" />
  </el-aside>
</template>

<script>
import {
  AppSidebarHeader,
  AppSidebarMenu,
  AppSidebarFooter,
} from './sidebar';

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarHeader,
    AppSidebarMenu,
    AppSidebarFooter,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
