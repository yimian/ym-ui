<template>
  <footer class="ym-sidebar__footer">
    <!-- Language Switcher -->
    <base-langbar
      style="width: 100%"
      className="w-full px-4 py-2 text-brand-200 hover:text-white hover:bg-brand-600">
      <template v-slot:arrow>
        <div class="ml-auto">
          <ym-svg svg-name="chevron-down" class="w-4 h-4 transform -rotate-90" />
        </div>
      </template>
    </base-langbar>
    <!-- User Settings -->
    <user-settings />
  </footer>
</template>

<script>
import BaseLangbar from '@/components/widgets/BaseLangbar.vue';
import UserSettings from '@/components/widgets/UserSettings.vue';

export default {
  name: 'AppSidebarFooter',
  components: {
    BaseLangbar,
    UserSettings,
  },
  data() {
    return {};
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
};
</script>

<style>
</style>
