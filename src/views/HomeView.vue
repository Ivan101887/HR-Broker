<template>
  <main class="main container mx-auto">
    <h1 class="title">前端開發人力仲介</h1>
    <MemberList v-bind="$attrs" />
  </main>
</template>

<script>
import MemberList from '../components/members/MemberList.vue';

export default {
  inheritAttrs: false,
  name: 'HomeView',
  components: {
    MemberList,
  },
};
</script>
<style lang="scss" scoped>
  .title {
    font: {
      size: 34px;
      weight: 600;
    }
    text-align: center;
    margin: {
      top: 30px;
      bottom: 30px;
    }
  }
</style>
