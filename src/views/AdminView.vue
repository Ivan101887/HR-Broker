<template>
  <main class="main container mx-auto">
    <h1 class="title">{{ title }}</h1>
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
      <p class="number">
        <span v-if="nowOptions.country || nowOptions.gender">
          篩選結果 : {{ selectedData.length }} 人，
        </span>
        <span> 共 : {{ data.length }} 人 </span>
      </p>
    </div>
    <section class="main__body">
      <MemberTable
        id="MemberTable"
        :parent-data="sortData(selectedData, listSize)[index]"
        :parent-index="modalIndex"
        @update="updateIndex"
        @checkPage="check"
        v-bind="$attrs"
      />
    </section>
    <Pagination
      :parent-len="sortData(selectedData, listSize).length"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <Modal
      v-if="isShowModal"
      :parent-type="1"
      :parent-data="sortData(selectedData, listSize)[index][modalIndex]"
      @closeModal="closeModal"
    />
  </main>
</template>
<script>
import FilterSelect from '@/components/FilterSelect.vue';
import Pagination from '@/components/Pagination.vue';
import MemberTable from '@/components/table/MemberTable.vue';
import { mapGetters } from 'vuex';
import Modal from '../components/modal/Modal.vue';

export default {
  inheritAttrs: false,
  name: 'admin-view',
  props: {
    parentData: Array,
  },
  provide() {
    return {
      parentName: '自選清單',
    };
  },
  data() {
    return {
      title: '會員列表',
      nowOptions: {
        country: '',
        gender: '',
      },
      index: 0,
      modalIndex: 0,
      listSize: 10,
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
    },
    closeModal() {
      this.$store.dispatch('setIsShow', false);
      document.querySelector('body').style.overflow = '';
    },
    updateIndex(val) {
      this.modalIndex = val;
      this.$store.dispatch('setIsShow', true);
    },
    sortData(array, size) {
      const arr = [];
      array.forEach((item, i) => {
        if (i % size === 0) {
          arr.push([]);
        }
        const index = Math.floor(i / size);
        arr[index].push(item);
      });
      return arr;
    },
    check() {
      if (this.data.length <= this.index * this.listSize) {
        this.index -= 1;
      }
    },
  },
  computed: {
    data() {
      return this.parentData;
    },
    ...mapGetters({
      isShow: 'isShow',
    }),
    countryArr() {
      return [...new Set(this.data.map((item) => item.location.country))];
    },
    genArr() {
      return [...new Set(this.data.map((item) => item.gender))];
    },
    selectedData() {
      if (this.nowOptions.country && this.nowOptions.gender) {
        return this.data
          .filter((item) => item.location.country === this.nowOptions.country)
          .filter((item) => item.gender === this.nowOptions.gender);
      }
      if (this.nowOptions.country) {
        return this.data
          .filter((item) => item.location.country === this.nowOptions.country);
      }
      if (this.nowOptions.gender) {
        return this.data
          .filter((item) => item.gender === this.nowOptions.gender);
      }
      return this.data;
    },
  },
  watch: {
    isShow() {
      this.isShowModal = this.isShow;
    },
    nowOptions: {
      handler() {
        this.index = 0;
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
