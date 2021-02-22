<template>
  <el-dropdown
    class="flex items-center"
    placement="right"
    trigger="click"
  >
    <div class="flex items-center w-full py-2 pl-4 pr-3">
      <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 mr-1">
        <ym-svg
          svg-name="user-avatar"
          class="w-5 h-5"
        />
      </div>
      <span class="whitespace-nowrap collapsable-label">
        {{ user && user.username }}
      </span>
      <slot name="arrow"></slot>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item class="flex items-center">
        <ym-svg
          svg-name="password"
          class="mr-2"
        />
        {{ $t('common.account') }}
      </el-dropdown-item>
      <el-dropdown-item divided></el-dropdown-item>
      <el-dropdown-item
        class="flex items-center"
        @click.native="logout"
      >
        <ym-svg
          svg-name="logout"
          class="mr-2"
        />
        {{ $t('common.logout') }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'UserSettings',
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
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
  watch: {
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

<style>
</style>
