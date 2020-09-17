<template>
  <el-container>
    <!-- <app-navbar
      class="nav-container"
      @toggleSidebar="toggleSidebar"
    /> -->
    <app-sidebar ref="sidebar" />
    <el-container direction="vertical">
      <app-navbar @toggleSidebar="toggleSidebar" />
      <app-main />
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
