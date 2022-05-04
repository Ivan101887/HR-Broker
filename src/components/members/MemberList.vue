<template>
  <ul class="memberLs">
    <MemberItem
      v-for="(item, index) in parentData"
      :key="index"
      :parent-data="item"
    />
  </ul>
</template>
<script>
import MemberItem from '@/components/members/MemberItem.vue';

export default {
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
      template-columns: repeat(8, 12.5%);
      column-gap: 15px;
      row-gap: 15px;
    }
  }
</style>
