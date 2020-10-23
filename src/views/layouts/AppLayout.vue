<template>
  <el-container>
    <!-- <app-navbar @toggleSidebar="toggleSidebar" /> -->
    <app-sidebar ref="sidebar" />
    <el-container class="h-screen" direction="vertical">
      <app-main />
    </el-container>
  </el-container>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/sidebar/index.vue';
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
