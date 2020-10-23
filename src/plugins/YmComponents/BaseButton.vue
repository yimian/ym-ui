<template>
  <!-- 
    type options: primary, secondary, default, text, ghost
    size options: large, medium, small, mini
   -->
  <el-button
    :type="type"
    :size="size"
    :iconLeft="iconLeft"
    :iconRight="iconRight"
    :disabled="disabled"
  >
    <!-- Left Icon -->
    <ym-svg
      v-if="iconLeft"
      :class="['mr-2', size === 'large' ? 'w-5 h-5' : '']"
      :svg-name="iconLeft"
    />

    <!-- Label -->
    <slot>{{ label }}</slot>

    <!-- Right Icon -->
    <ym-svg
      v-if="iconRight"
      :class="['ml-2', size === 'large' ? 'w-5 h-5' : '']"
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
      default: 'Button',
    },

    type: {
      type: String,
      default: '',
    },

    size: {
      type: String,
      default: 'medium',
    },

    iconLeft: {
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
  },
}
</script>