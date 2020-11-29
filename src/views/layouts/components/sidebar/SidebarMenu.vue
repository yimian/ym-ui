<template>
  <el-menu
    class="ym-sidebar__menu"
    router
    :default-active="activeMenu"
    :collapse="isCollapse"
  >
    <template v-for="(route, index) in routes">
      <template v-if="!route.children">
        <el-menu-item
          v-if="roleShow(route)"
          class="ym-sidebar__menu-item"
          :key="index"
          :index="route.name"
          :route="route"
        >
          <div class="flex items-center justify-center w-8 h-8 mr-1">
            <ym-svg
              :svg-name="getRouteName(route).toLowerCase()"
              class="w-5 h-5"
            />
          </div>
          <span>
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
          <template slot="title">
            <div class="flex items-center justify-center w-8 h-8 mr-1">
              <ym-svg
                :svg-name="getRouteName(route).toLowerCase()"
                class="w-5 h-5"
              />
            </div>
            <span>{{ i18nRouteName(route.name) }}</span>
          </template>
          <el-menu-item
            v-for="(cRoute, idx) in route.children"
            :key="idx"
            :index="cRoute.name"
            :route="cRoute"
          >
            <template slot="title">
              <div class="flex items-center justify-center w-8 h-8 mr-1">
                <ym-svg
                  :svg-name="getRouteName(cRoute).toLowerCase()"
                  class="w-5 h-5"
                />
              </div>
              <span>{{ i18nRouteName(cRoute.name) }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item
          v-if="roleShow(route.children[0])"
          class="ym-sidebar__menu-item"
          :key="index"
          :index="getRouteName(route)"
          :route="route.children[0]"
        >
          <div class="flex items-center justify-center w-8 h-8 mr-1">
            <ym-svg
              :svg-name="getRouteName(route).toLowerCase()"
              class="w-5 h-5"
            />
          </div>
          <span>
            {{ i18nRouteName(getRouteName(route)) }}
          </span>
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'SidebarMenu',
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
      return (route.name || (route.children && route.children[0].name) || '');
    },
    i18nRouteName(name) {
      return name ? this.$t(`route.${name.toLowerCase()}`) : '';
    },
  },
};
</script>
