<template>
  <el-main>
    <transition
      name="move"
      mode="out-in"
    >
      <router-view />
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>
