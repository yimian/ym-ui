<template>
  <el-button
    :type="type"
    :size="size"
    :icon="icon"
    :iconRight="iconRight"
    :disabled="disabled"
    :iconOnly="iconOnly"
    :class="iconOnly ? 'el-button--icon-only' : ''"
    @click="handleClick"
  >
    <!-- Left Icon -->
    <ym-svg
      v-if="icon"
      :class="[
        iconOnly ? '' : 'mr-2',
        size === 'large' ? 'w-5 h-5' : ''
      ]"
      :svg-name="icon"
    />

    <!-- Label -->
    <slot>{{ label }}</slot>

    <!-- Right Icon -->
    <ym-svg
      v-if="iconRight"
      :class="[
        'ml-2',
        size === 'large' ? 'w-5 h-5' : ''
      ]"
      :svg-name="iconRight"
    />
  </el-button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
    icon: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    iconOnly: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
  },
}
</script>
