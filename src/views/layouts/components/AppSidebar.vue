<template>
  <el-aside :class="['ym-sidebar flex flex-col w-auto bg-brand-700', { 'ym-sidebar--collapse' : isCollapse }]">
    <app-sidebar-header :is-collapse="isCollapse" />
    <app-sidebar-menu :is-collapse="isCollapse" />
    <app-sidebar-footer :is-collapse="isCollapse" />
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
