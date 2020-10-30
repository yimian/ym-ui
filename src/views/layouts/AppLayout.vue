<template>
  <el-container>
    <!-- <app-navbar @toggleSidebar="toggleSidebar" /> -->
    <app-sidebar ref="sidebar" />
    <el-container
      class="h-screen"
      direction="vertical"
    >
      <el-header class="h-auto px-6 py-4 bg-white shadow">
        <div class="flex items-center">
          <ym-button
            class="w-8 h-8 p-0 mr-3 -ml-1"
            type="text"
            icon-only
            @click="toggleSidebar"
          >
            <ym-svg
              svgName="menu"
              class="w-6 h-6"
            />
          </ym-button>
          <h1 class="font-medium text-neutral-800">User</h1>
        </div>
      </el-header>
      <app-main class="p-6" />
    </el-container>
  </el-container>
</template>

<script>
import AppSidebar from './components/sidebar/index.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    AppSidebar,
    AppMain,
  },
  data() {
    return {};
  },
  methods: {
    toggleSidebar() {
      if (this.$refs.sidebar) {
        this.$refs.sidebar.toggleSidebar();
      }
    },
  },
};
</script>
