<template>
  <el-container>
    <app-sidebar
      ref="sidebar"
      :is-collapse="isCollapse"
    />
    <el-container
      class="h-screen"
      direction="vertical"
    >
      <el-header class="z-10 h-auto px-6 py-4 bg-white shadow">
        <div class="flex items-center">
          <ym-button
            class="w-8 h-8 p-0 mr-3 -ml-1"
            type="text"
            icon-only
            @click="isCollapse = !isCollapse"
          >
            <ym-svg
              svgName="menu"
              class="w-6 h-6"
            />
          </ym-button>
          <the-breadcrumb />
        </div>
      </el-header>
      <app-main class="p-6" />
    </el-container>
  </el-container>
</template>

<script>
import TheBreadcrumb from '@/components/widgets/TheBreadcrumb.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'Layout',
  components: {
    AppSidebar,
    AppMain,
    TheBreadcrumb,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>
