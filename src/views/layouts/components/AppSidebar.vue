<template>
  <el-aside class="w-64 bg-brand-700">
    <header class="flex items-center justify-between p-4">
      <router-link
        :to="{ path: '/' }"
        aria-label="Home">
        <img
          class="h-6"
          src="@/assets/logo.svg"
          alt="Product Logo">
      </router-link>
      <!-- <el-button
        class="p-1 text-white border-none hover:bg-brand-600 focus:bg-brand-800 outline-none"
        type="text"
        @click.stop="$emit('toggleSidebar')"
        aria-label="Menu"
        aria-haspopup="true"
      >
        <ym-svg class="w-6 h-6" svgName="menu" />
      </el-button> -->
    </header>
    <el-menu
      class="bg-transparent border-none"
      default-active="1-4-1"
      :collapse="!drawer"
    >
      <!-- :style="{ width: drawer ? '199px' : '60px' }" -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item
        index="3"
        disabled
      >
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'AppSidebar',
  data() {
    return {
      drawer: true,
    };
  },
  computed: {},
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/_variable.scss';

// Override the 'background-color: white' of el-menu that locate in el-submenu
.el-submenu {
  .el-menu {
    @apply bg-transparent;
  }
}
</style>
