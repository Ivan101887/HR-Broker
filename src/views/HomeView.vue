<template>
  <main class="main container mx-auto">
    <h1 class="title">前端開發人力仲介</h1>
    <MemberList
      :parent-data="sortData(parentData, perPage)[index]"
      @update="updateIndex"
    />
    <Pagination
      :parent-len="sortData(parentData, perPage).length"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <Modal
      v-if="isShowModal"
      :parent-type="0"
      :parent-data="sortData(parentData, perPage)[index][modalIndex]"
      @closeModal="closeModal"
    />
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Pagination from '@/components/Pagination.vue';
import Modal from '@/components/modal/Modal.vue';
import MemberList from '@/components/members/MemberList.vue';

export default {
  inheritAttrs: false,
  name: 'HomeView',
  props: {
    parentData: Array,
  },
  data() {
    return {
      index: 0,
      perPage: 20,
      modalIndex: 0,
      isShowModal: false,
    };
  },
  components: {
    MemberList, Pagination, Modal,
  },
  computed: {
    ...mapGetters({
      isShow: 'isShow',
    }),
  },
  watch: {
    isShow() {
      this.isShowModal = this.isShow;
    },
  },
  methods: {
    updatePageIndex(val) {
      this.index = val;
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
    closeModal() {
      this.$store.dispatch('setIsShow', false);
      document.querySelector('body').style.overflow = '';
    },
    updateIndex(val) {
      this.modalIndex = val;
      this.$store.dispatch('setIsShow', true);
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
