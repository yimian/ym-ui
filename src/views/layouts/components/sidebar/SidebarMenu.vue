<template>
  <el-menu
    class="ym-sidebar__menu"
    default-active="Homepage"
    :router="true"
    :collapse="collpase"
  >
    <template v-for="item in menuItems">
      <el-menu-item
        v-if="!item.children"
        :key="item.index"
        :index="item.index"
        :style="{ width: collapse ? '64px' : '200px' }"
        class="ym-sidebar__menu-item"
      >
        <div class="flex items-center justify-center w-8 h-8">
          <ym-svg
            :svg-name="item.icon"
            class="w-5 h-5"
          />
        </div>
        <span class="ml-1">{{ item.name }}</span>
      </el-menu-item>

      <template v-else>
        <el-submenu
          :index="item.index"
          :key="item.index"
        >
          <div
            class="flex items-center"
            slot="title"
          >
            <div class="flex items-center justify-center w-8 h-8">
              <ym-svg
                svg-name="wikis"
                class="w-5 h-5"
              />
            </div>
            <span class="ml-1">{{ item.name }}</span>
          </div>
          <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.index"
            :index="subItem.index"
          >
            <div
              class="flex items-center"
              slot="title"
            >
              <span>{{ subItem.name }}</span>
            </div>
          </el-menu-item>
        </el-submenu>
      </template>
    </template>
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
      menuItems: [
        {
          name: 'Homepage',
          index: 'Homepage',
          icon: 'home',
        },
        {
          name: 'Users',
          index: 'Users',
          icon: 'user-group2',
        },
        {
          name: 'Components',
          index: 'Components',
          icon: 'wikis',
          children: [
            {
              name: 'Buttons',
              index: 'Buttons',
              icon: '',
            },
            {
              name: 'Test',
              index: 'Test',
              icon: '',
            },
          ],
        },
      ],
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
.el-menu-item {
  &.is-active {
    @apply text-white bg-brand-600 #{!important};
  }
}
</style>
