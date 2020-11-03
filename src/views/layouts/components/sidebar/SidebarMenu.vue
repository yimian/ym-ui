<template>
  <el-menu
    class="ym-sidebar__menu"
    default-active="Homepage"
    :router="true"
    :collapse="collapse"
  >
    <el-menu-item
      class="ym-sidebar__menu-item"
      index="Homepage"
    >
      <div class="flex items-center justify-center w-8 h-8 mr-1">
        <ym-svg
          svg-name="home"
          class="w-5 h-5"
        />
      </div>
      <span>Homepage</span>
    </el-menu-item>
    <el-menu-item
      class="ym-sidebar__menu-item"
      index="Users"
    >
      <div class="flex items-center justify-center w-8 h-8 mr-1">
        <ym-svg
          svg-name="user-group2"
          class="w-5 h-5"
        />
      </div>
      <span>Users</span>
    </el-menu-item>
    <el-submenu index="Components">
      <template slot="title">
        <div class="flex items-center justify-center w-8 h-8 mr-1">
          <ym-svg
            svg-name="wikis"
            class="w-5 h-5"
          />
        </div>
        <span>Components</span>
      </template>
      <el-menu-item-group>
        <span slot="title">Basic</span>
        <el-menu-item index="Buttons">
          <div class="flex items-center" slot="title">
            <span>Buttons</span>
          </div>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  name: 'AppSidebarMenu',
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
</style>
