<template>
  <ul class="memberLs">
    <MemberItem
      v-for="(item, index) in parentData"
      :key="index"
      :parent-data="item"
      :parent-index="index"
      v-on="$listeners"
    />
  </ul>
</template>
<script>
import MemberItem from '@/components/members/MemberItem.vue';

export default {
  inheritAttrs: false,
  name: 'member-list',
  components: {
    MemberItem,
  },
  props: {
    parentData: Array,
  },
};
</script>
<style lang="scss" scoped>
  .memberLs {
    display: grid;
    grid: {
      template-columns: repeat(8, 1fr);
    }
    margin: {
      left: -15px;
      right: -15px;
    }
  }
</style>
