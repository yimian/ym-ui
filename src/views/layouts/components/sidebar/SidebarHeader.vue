<template>
  <header class="flex items-center justify-between flex-shrink-0 px-4 py-4">
    <router-link
      class="relative w-full h-8 overflow-hidden"
      :to="{ path: '/' }"
      aria-label="Home"
    >
      <img
        class="absolute h-8 max-w-none"
        src="@/assets/logo-white.svg"
        alt="Product Logo"
      >
    </router-link>
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
