<template>
  <main class="main container mx-auto">
    <h1 class="title">會員列表</h1>
    <FilterSelect @change="change" :parent-data="parentCountry" parent-name="國家" />
    <FilterSelect @change="change" :parent-data="parentGender" parent-name="性別" />
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';

export default {
  inheritAttrs: false,
  name: 'admin-view',
  props: {
    parentCountry: Array,
    parentGender: Array,
  },
  components: { FilterSelect },
  methods: {
    change() {},
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
