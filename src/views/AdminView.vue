<template>
  <main class="main container mx-auto">
    <h1 class="title">會員列表</h1>
    <div class="main__head">
      <form class="form">
        <FilterSelect
          :parent-data="parentCountry"
          parent-name="國家"
          :parent-select="nowOptions.country"
          @update="updateCountry"
        />
        <FilterSelect
          :parent-data="parentGender"
          parent-name="性別"
          :parent-select="nowOptions.gender"
          @update="updateGender"
        />
      </form>
      <p class="number">共: {{ parentLen }} 人</p>
    </div>
    <section class="main__body">
      <member-table
        parent-name="自選清單"
        :parent-data="parentData[index]"
        :parent-index="modalIndex"
        @update="updateIndex"
      />
    </section>
    <Pagination
      v-if="parentData.length"
      :parent-len="parentData.length"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <Modal
      v-if="isShowModal"
      :parent-index="1"
      :parent-data="parentData[index][modalIndex]"
      @closeModal="closeModal"
    />
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';
import Pagination from '@/components/Pagination.vue';
import MemberTable from '@/components/table/MemberTable.vue';
import Modal from '../components/modal/Modal.vue';

export default {
  inheritAttrs: false,
  name: 'admin-view',
  props: {
    parentLen: Number,
    parentData: Array,
    parentCountry: Array,
    parentGender: Array,
    parentIndex: Number,
  },
  data() {
    return {
      nowOptions: {
        country: '',
        gender: '',
      },
      index: this.parentIndex,
      modalIndex: 0,
      isShowModal: false,
    };
  },

  components: {
    FilterSelect, MemberTable, Pagination, Modal,
  },
  methods: {
    updateCountry(val) {
      this.nowOptions.country = val;
    },
    updateGender(val) {
      this.nowOptions.gender = val;
    },
    updatePageIndex(val) {
      this.index = val;
      this.$emit('updateIndex', this.index);
    },
    closeModal() {
      this.isShowModal = false;
      document.querySelector('body').style.overflow = '';
    },
    updateIndex(val) {
      this.modalIndex = val;
      this.isShowModal = true;
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
