<template>
  <el-header class="flex-box space-btw">
    <span
      class="toggle-btn"
      @click.stop="$emit('toggleSidebar')"
    >
      <img
        src="@/assets/baseline_menu_white_24dp.png"
        alt=""
      >
    </span>

    <!-- logo -->
    <router-link :to="{ path: '/' }">
      <span class="logo">
        <img
          src="@/assets/logo.png"
          alt=""
        >
      </span>
    </router-link>

    <!-- menu -->
    <navbar-menu></navbar-menu>

    <!-- avatar -->
    <div class="flex-box">
      <el-dropdown>
        <span class="el-dropdown-link userinfo flex-box">
          <span class="avatar flex-box">
            <img
              src="@/assets/avatar.png"
              alt="Demo"
            >
          </span>
          <span>{{ user && user.username }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="changePassword">
            {{ $t('common.account') }}
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            {{ $t('common.logout') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <base-langbar />
    </div>
  </el-header>
</template>

<script>
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';
import NavbarMenu from './menus/TheIndex.vue';

export default {
  name: 'AppNavBar',
  components: {
    BaseLangbar,
    NavbarMenu,
  },
  data() {
    return {};
  },
  computed: {
    activeMenu() {
      return this.$route.name;
    },
    user() {
      return this.$auth.token() && this.$store.state.auth ? this.$store.state.auth.user || {} : {};
    },
  },
  methods: {
    roleShow(route) {
      if (!route.meta) {
        return true;
      }

      // hack, there is no user when logout
      if (!this.user || route.meta.hidden) {
        return false;
      }

      const { auth } = route.meta;
      return auth ? (!auth.length && !this.user.role) || auth.includes(this.user.role) : !auth;
    },
    logout() {
      this.$auth.logout().then(() => {
        this.$router.push({ name: 'Login' });
      });
    },
    changePassword() {
      this.$message({
        showClose: true,
        message: 'Please add a function to change your password',
      });
    },
  },
};
</script>
