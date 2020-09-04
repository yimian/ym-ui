<template>
  <el-container
    class="app-wrapper"
    direction="vertical"
  >
    <app-navbar
      class="nav-container"
      @toggleSidebar="toggleSidebar"
    />
    <el-container>
      <app-sidebar
        ref="sidebar"
        class="sidebar-container"
      />
      <app-main class="main-container" />
    </el-container>
  </el-container>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    AppNavbar,
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
