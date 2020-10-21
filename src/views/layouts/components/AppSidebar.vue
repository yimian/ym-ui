<template>
  <el-aside class="flex flex-col w-64 bg-brand-700">
    <!-- Header -->
    <header class="flex items-center justify-between flex-shrink-0 px-4 py-4">
      <router-link
        :to="{ path: '/' }"
        aria-label="Home">
        <img
          class="h-8"
          src="@/assets/logo-white.svg"
          alt="Product Logo">
      </router-link>
      <!-- <el-button
        class="p-1 text-white border-none outline-none hover:bg-brand-600 focus:bg-brand-800"
        type="text"
        @click.stop="$emit('toggleSidebar')"
        aria-label="Menu"
        aria-haspopup="true"
      >
        <ym-svg class="w-6 h-6" svgName="menu" />
      </el-button> -->
    </header>
    <!-- Menu -->
    <el-menu
      class="flex-1 py-4 bg-transparent border-none"
      default-active="Homepage"
      :router="true"
      :collapse="!drawer"
    >
      <!-- :style="{ width: drawer ? '199px' : '60px' }" -->
      <el-menu-item
        v-for="item in menuItems"
        :key="item.index"
        :index="item.index"
        class="flex items-center h-12 px-4 text-brand-200 hover:text-white hover:bg-brand-600 focus:bg-brand-600"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <ym-svg :svg-name="item.icon" class="w-5 h-5" />
        </div>
        <span class="ml-1">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <!-- Footer -->
    <footer class="flex-shrink-0 py-4">
      <!-- Language Switcher -->
      <!-- <el-dropdown
        class="flex items-center w-full text-brand-200 hover:text-white hover:bg-brand-600"
        placement="right"
        trigger="click"
      >
        <div class="flex items-center w-full px-4 py-2">
          <div class="flex items-center justify-center w-8 h-8">
            <ym-svg svg-name="translate" class="w-5 h-5" />
          </div>
          <span class="ml-1">En</span>
          <ym-svg svg-name="chevron-down" class="w-4 h-4 ml-auto" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>En</el-dropdown-item>
          <el-dropdown-item>中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
      <base-langbar class="w-full text-brand-200 hover:text-white hover:bg-brand-600">
        <div class="ml-auto">
          <ym-svg svg-name="chevron-down" class="w-4 h-4 transform -rotate-90" />
        </div>
      </base-langbar>
      <!-- User Settings -->
      <el-dropdown
        class="flex items-center w-full text-brand-200 hover:text-white hover:bg-brand-600"
        placement="right"
        trigger="click"
      >
        <div class="flex items-center w-full px-4 py-2">
          <div class="flex items-center justify-center w-8 h-8">
            <ym-svg svg-name="user-avatar" class="w-5 h-5" />
          </div>
          <span class="ml-1">User Name</span>
          <ym-svg svg-name="chevron-down" class="w-4 h-4 ml-auto transform -rotate-90" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="flex items-center">
            <ym-svg svg-name="account" class="mr-2" />
            账号管理
          </el-dropdown-item>
          <el-dropdown-item class="flex items-center">
            <ym-svg svg-name="star" class="mr-2" />
            收藏夹
          </el-dropdown-item>
          <el-dropdown-item class="flex items-center">
            <ym-svg svg-name="user" class="mr-2" />
            个人中心
          </el-dropdown-item>
          <el-dropdown-item divided></el-dropdown-item>
          <el-dropdown-item class="flex items-center">
            <ym-svg svg-name="logout" class="mr-2" />
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </footer>
  </el-aside>
</template>

<script>

import BaseLangbar from '@/components/widgets/BaseLangbar.vue';

export default {
  name: 'AppSidebar',
  components: {
    BaseLangbar
  },

  data() {
    return {
      drawer: true,
      menuItems: [
        {
          name: 'Homepage',
          index: 'Homepage',
          icon: 'home',
        },
        {
          name: 'User Management',
          index: 'Users',
          icon: 'user-group2',
        },
      ],
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

<style lang="scss" scoped>
.el-menu-item {
  &.is-active {
    @apply text-white bg-brand-600 #{!important};
  }
}
</style>
