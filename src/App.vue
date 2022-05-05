<template>
  <div id="app">
    <TheHeader v-if="!isShow" @switch="isShow = true" />
    <router-view :parent-data="sortData(data)[index]"> </router-view>
    <Pagination
      v-if="data.length"
      :parent-len="Math.ceil(totalLen / perPage)"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <the-loader v-if="isLoading"/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import Pagination from './components/Pagination.vue';
import TheLoader from './components/TheLoader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    Pagination,
    TheLoader,
  },
  async created() {
    await this.getData();
    this.isLoading = false;
    document.querySelector('body').style.overflow = '';
  },
  data() {
    return {
      isLogIn: false,
      isLoading: true,
      isShow: false,
      data: [],
      index: 0,
      perPage: 20,
      totalLen: 0,
    };
  },
  computed: {
    cityArr() {
      return [...new Set(this.data.map((item) => item.City))];
    },
    townArr() {
      return [...new Set(
        this.data.filter((item) => item.City === this.now.city).map((item) => item.Town),
      )];
    },
    SelectedData() {
      if (this.now.city) {
        if (this.now.town) {
          return this.sortData(
            this.data
              .filter((item) => item.City === this.now.city)
              .filter((item) => item.Town === this.now.town),
          );
        }
        return this.sortData(this.data.filter((item) => item.City === this.now.city));
      }
      return this.sortData(this.data);
    },
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
        this.data = res.data.results;
        this.totalLen = this.data.length;
      } catch (e) {
        console.log(e);
      }
    },
    updatePageIndex(val) {
      this.index = val;
    },
    updateCity(val) {
      this.now.city = val;
    },
    updateTown(val) {
      this.now.town = val;
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
