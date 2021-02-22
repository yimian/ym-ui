<template>
  <div
    class="flex items-center"
    :status="status"
    :label="label"
  >
    <span :class="[
      status === 'processing' ? 'bg-brand-500' : '',
      status === 'success' ? 'bg-green-500' : '',
      status === 'danger' ? 'bg-red-500' : '',
      status === 'warning' ? 'bg-orange-500' : '',
      status === 'offline' ? 'bg-neutral-40' : '',
      'w-2 h-2 rounded-full'
    ]"></span>
    <span class="ml-2">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Stauts',
  props: {
    label: {
      type: String,
      default: 'Offline',
    },
    status: {
      type: String,
      default: 'offline',
    },
  },
};
</script>

<style>

</style>
