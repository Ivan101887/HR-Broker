<template>
  <div id="app">
    <TheHeader v-if="!isShow" @switch="isShow = true" />
    <router-view :parent-data="data" />
    <Pagination
      :parent-len="Math.ceil(totalLen / perPage)"
      :parent-index="index"
    />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    Pagination,
  },
  created() {
    this.getData();
  },
  data() {
    return {
      isLogIn: false,
      isShow: false,
      data: [],
      index: 0,
      perPage: 20,
      totalLen: 0,
    };
  },
  computed: {

  },
  methods: {
    async getData() {
      try {
        const config = {
          params: {
            results: 150,
            page: 1,
            seed: 'myRandomUUser',
          },
        };
        const url = 'https://randomuser.me/api/';
        const res = await this.$http.get(url, config);
        console.log(res.data.results[0].picture.medium);
        this.data = res.data.results;
        this.totalLen = this.data.length;
      } catch (e) {
        console.log(e);
      }
    },
    sortData(array) {
      const arr = [];
      array.forEach((item, i) => {
        if (i % this.perPage === 0) {
          arr.push([]);
        }
        const index = Math.floor(i / this.perPage);
        arr[index].push(item);
      });
      return arr;
    },
  },
};
</script>
