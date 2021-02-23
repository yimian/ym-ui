<template>
  <footer :class="['relative flex-shrink-0 py-4 transition-all ym-sidebar__footer',
    { 'ym-sidebar__footer--collapse' : isCollapse }]"
  >
    <!-- Language Switcher -->
    <base-langbar
      class="w-full"
      className="w-full pl-4 pr-3 py-2 text-brand-200 hover:text-white outline-none"
    >
      <template slot="arrow">
        <div class="ml-auto">
          <ym-svg
            svg-name="chevron-down"
            class="w-4 h-4 transform -rotate-90"
          />
        </div>
      </template>
    </base-langbar>

    <!-- User Settings -->
    <user-settings class="w-full text-brand-200 hover:text-white">
      <template slot="arrow">
        <div class="ml-auto">
          <ym-svg
            svg-name="chevron-down"
            class="w-4 h-4 transform -rotate-90"
          />
        </div>
      </template>
    </user-settings>

    <!-- Overflow – Hide the label and arrow when sidebar have been collapsed -->
    <div
      class="'absolute inset-y-0 right-0 opacity-0 left-12 bg-brand-700 transition duration-700 pointer-events-none'"
      :class="[{ 'opacity-100' : isCollapse }]"
    />
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
  },
  watch: {
  },
  methods: {
  },
};
</script>
