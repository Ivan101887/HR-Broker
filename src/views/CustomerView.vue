<template>
  <main class="main container mx-auto">
    <h1 class="title">自選清單</h1>
    <div class="main__head">
      <form class="form">
        <FilterSelect
          :parent-data="countryArr"
          parent-name="國家"
          @update="updateCountry"
        />
        <FilterSelect
          :parent-data="genArr"
          parent-name="性別"
          @update="updateGender"
        />
      </form>
      <p class="number">共: {{ customList.length }} 人</p>
    </div>
    <section class="main__body">
      <MemberTable
        parent-name="自選清單"
        :parent-data="sortData(selectedData)[index]"
        :parent-index="modalIndex"
        @update="updateIndex"
        @checkPage="check"
      />
    </section>
    <Pagination
      :parent-len="sortData(selectedData).length"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <Modal
      v-if="isShowModal"
      :parent-index="1"
      :parent-data="sortData(selectedData)[index][modalIndex]"
      @closeModal="closeModal"
    />
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';
import Pagination from '@/components/Pagination.vue';
import { mapGetters } from 'vuex';
import MemberTable from '@/components/table/MemberTable.vue';
import Modal from '../components/modal/Modal.vue';

export default {
  inheritAttrs: false,
  name: 'customer-view',
  props: {
    parentAllData: Array,
    parentSize: Number,
  },
  data() {
    return {
      nowOptions: {
        country: '',
        gender: '',
      },
      index: 0,
      modalIndex: 0,
      isShowModal: false,
    };
  },
  components: {
    FilterSelect, MemberTable, Pagination, Modal,
  },
  computed: {
    ...mapGetters({
      customIds: 'customList',
    }),
    customList() {
      return this.customIds
        .map((customItem) => this.parentAllData
          .find((item) => item.login.uuid === customItem));
    },
    countryArr() {
      return [...new Set(this.customList.map((item) => item.location.country))];
    },
    genArr() {
      return [...new Set(this.customList.map((item) => item.gender))];
    },
    selectedData() {
      if (this.nowOptions.country) {
        if (this.nowOptions.gender) {
          return this.customList
            .filter((item) => item.location.country === this.nowOptions.country)
            .filter((item) => item.gender === this.nowOptions.gender);
        }
        return this.customList
          .filter((item) => item.location.country === this.nowOptions.country);
      }
      if (this.nowOptions.gender) {
        if (this.nowOptions.country) {
          return this.customList
            .filter((item) => item.location.country === this.nowOptions.country)
            .filter((item) => item.gender === this.nowOptions.gender);
        }
        return this.customList
          .filter((item) => item.gender === this.nowOptions.gender);
      }
      return this.customList;
    },
  },
  watch: {
    nowOptions: {
      handler() {
        this.index = 0;
      },
      deep: true,
    },
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
    },
    sortData(array) {
      const arr = [];
      array.forEach((item, i) => {
        if (i % this.parentSize === 0) {
          arr.push([]);
        }
        const index = Math.floor(i / this.parentSize);
        arr[index].push(item);
      });
      return arr;
    },
    updateIndex(val) {
      this.modalIndex = val;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
      document.querySelector('body').style.overflow = '';
    },
    check() {
      if (this.customIds.length <= this.index * this.parentSize) {
        this.index -= 1;
      }
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
