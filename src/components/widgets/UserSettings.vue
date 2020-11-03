<template>
  <el-dropdown
    class="flex items-center w-full text-brand-200 hover:text-white hover:bg-brand-600"
    placement="right"
    trigger="click"
  >
    <div class="flex items-center w-full px-4 py-2">
      <div class="flex items-center justify-center w-8 h-8">
        <ym-svg
          svg-name="user-avatar"
          class="w-5 h-5"
        />
      </div>
      <span class="ml-1">{{ user && user.username }}</span>
      <ym-svg
        svg-name="chevron-down"
        class="w-4 h-4 ml-auto transform -rotate-90"
      />
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