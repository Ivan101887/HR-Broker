<template>
  <main class="main container mx-auto">
    <h1 class="title">前端開發人力仲介</h1>
    <MemberList v-bind="$attrs" :parent-data="parentData[index]" />
    <Pagination
      v-if="parentData.length"
      :parent-len="parentData.length"
      :parent-index="index"
      @update="updatePageIndex"
    />
  </main>
</template>

<script>
import Pagination from '@/components/Pagination.vue';
import MemberList from '../components/members/MemberList.vue';

export default {
  inheritAttrs: false,
  name: 'HomeView',
  props: {
    parentData: Array,
    parentIndex: Number,
  },
  data() {
    return {
      index: this.parentIndex,
    };
  },
  components: {
    MemberList, Pagination,
  },
  methods: {
    updatePageIndex(val) {
      this.index = val;
      this.$emit('updateIndex', this.index);
    },
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
