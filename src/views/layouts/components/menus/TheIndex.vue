<template>
  <el-menu
    :default-active="activeMenu"
    mode="horizontal"
    text-color="#fff"
    background-color="#065bc9"
    active-text-color="#21d5cb"
    router
  >
    <template v-for="(route, index) in routes">
      <template v-if="!route.children">
        <el-menu-item
          v-if="roleShow(route)"
          :key="index"
          :index="route.name"
          :route="route"
        >
          <span slot="title">
            {{ i18nRouteName(route.name) }}
          </span>
        </el-menu-item>
      </template>
      <template v-else-if="route.meta && route.meta.hasMulSub">
        <el-submenu
          v-if="roleShow(route)"
          :index="route.name"
          :key="index"
        >
          <span slot="title">
            {{ i18nRouteName(route.name) }}
          </span>
          <el-menu-item
            v-for="(cRoute, idx) in route.children"
            :key="idx"
            :index="cRoute.name"
            :route="cRoute"
          >
            <span slot="title">
              {{ i18nRouteName(cRoute.name) }}
            </span>
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item
          v-if="roleShow(route.children[0])"
          :key="index"
          :index="getRouteName(route)"
          :route="route.children[0]"
        >
          <span slot="title">
            {{ i18nRouteName(getRouteName(route)) }}
          </span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'Menus',
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$auth.token() && this.$store.state.auth ? this.$store.state.auth.user || {} : {};
    },
    routes() {
      const { routes } = this.$router.options;
      return routes.filter((route) => (!route.meta || !route.meta.hidden));
    },
    activeMenu() {
      return this.$route.name;
    },
  },
  methods: {
    roleShow(route) {
      // console.log('route', route);
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
    getRouteName(route = {}) {
      return route.name || (route.children && route.children[0].name) || '';
    },
    i18nRouteName(name) {
      return name ? this.$t(`route.${name.toLowerCase()}`) : '';
    },
  },
};
</script>
