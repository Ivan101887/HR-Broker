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
      <p class="number">共: {{ parentLen }} 人</p>
    </div>
    <section class="main__body">
      <member-table parent-name="自選清單" v-bind="$attrs" />
    </section>
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';
import MemberTable from '../components/table/MemberTable.vue';

export default {
  inheritAttrs: false,
  name: 'admin-view',
  props: {
    parentLen: Number,
    parentCountry: Array,
    parentGender: Array,
  },
  data() {
    return {
      nowOptions: {
        country: '',
        gender: '',
      },
    };
  },
  components: { FilterSelect, MemberTable },
  methods: {
    updateCountry(val) {
      this.nowOptions.country = val;
    },
    updateGender(val) {
      this.nowOptions.gender = val;
    },
  },
  watch: {
    nowOptions: {
      handler() {
        this.$emit('update', this.nowOptions.country, this.nowOptions.gender);
      },
      deep: true,
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
    align-items: center;
  }
</style>
