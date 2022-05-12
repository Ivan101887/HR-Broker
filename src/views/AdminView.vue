<template>
  <main class="main container mx-auto">
    <h1 class="title">會員列表</h1>
    <div class="main__head">
      <form class="form">
        <FilterSelect
          :parent-data="parentCountry"
          parent-name="國家"
          @update="updateCountry"
        />
        <FilterSelect
          :parent-data="parentGender"
          parent-name="性別"
          @update="updateGender"
        />
      </form>
      <p class="number">
        <span v-if="isSelected">篩選結果 : {{ parentLen }} 人，</span>
        <span> 共 : {{ parentTotalLen }} 人 </span>
      </p>
    </div>
    <section class="main__body">
      <member-table
        parent-name="自選清單"
        :parent-data="parentListData[index]"
        :parent-index="modalIndex"
        @update="updateIndex"
        v-bind="$attrs"
      />
    </section>
    <Pagination
      v-if="parentListData.length > 1"
      :parent-len="parentListData.length"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <Modal
      v-if="isShowModal"
      :parent-index="1"
      :parent-data="parentListData[index][modalIndex]"
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
    parentListData: Array,
    parentCountry: Array,
    parentGender: Array,
    parentIndex: Number,
    parentTotalLen: Number,
    parentSize: Number,
  },
  data() {
    return {
      nowOptions: {
        country: '',
        gender: '',
      },
      isSelected: false,
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
        if (this.nowOptions.country !== '' || this.nowOptions.gender !== '') {
          this.isSelected = true;
        } else {
          this.isSelected = false;
        }
        this.index = 0;
        this.$emit('update', this.nowOptions.country, this.nowOptions.gender, this.index);
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
