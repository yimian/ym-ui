<template>
  <header class="ym-sidebar__header">
    <router-link
      v-if="!isCollapse"
      :to="{ path: '/' }"
      aria-label="Home"
    >
      <img
        class="h-8"
        src="@/assets/logo-white.svg"
        alt="Product Logo"
      >
    </router-link>
    <!-- <el-button
      class="p-1 text-white border-none outline-none hover:bg-brand-600 focus:bg-brand-800"
      type="text"
      @click.stop="$emit('toggleSidebar')"
      aria-label="Menu"
      aria-haspopup="true"
    >
      <ym-svg class="w-6 h-6" svgName="menu" />
    </el-button> -->
  </header>
</template>

<script>
export default {
  name: 'AppSidebarHeader',
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
