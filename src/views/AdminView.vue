<template>
  <main class="main container mx-auto">
    <h1 class="title">會員列表</h1>
    <div class="main__head">
      <form class="form">
        <FilterSelect
          v-on="$listeners"
          :parent-data="parentCountry"
          parent-name="國家"
          @update="updateCountry"
        />
        <FilterSelect
          v-on="$listeners"
          :parent-data="parentGender"
          parent-name="性別"
          @update="updateGender"
        />
      </form>
      <p class="number">共: {{parentData.length}} 人</p>
    </div>
    <section class="main__body">
    </section>
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';

export default {
  inheritAttrs: false,
  name: 'admin-view',
  props: {
    parentData: Array,
    parentCountry: Array,
    parentGender: Array,
  },
  data() {
    return {
      nowOptions: ['', ''],
    };
  },
  components: { FilterSelect },
  methods: {
    updateCountry(val) {
      this.nowOptions[0] = val;
    },
    updateGender(val) {
      this.nowOptions[1] = val;
    },
  },
  watch: {
    nowOptions(newVal) {
      this.$emit('update', newVal);
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
  .main__head {
    display: flex;
    justify-content: space-between;
  }
</style>
