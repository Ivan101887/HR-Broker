<template>
  <div id="app">
    <TheHeader />
    <router-view
      :parent-data="selectedData[index]"
      :parent-country="countryArr"
      :parent-gender="genArr"
      @update="updateNow"
    >
    </router-view>
    <Pagination
      v-if="data.length"
      :parent-len="Math.ceil(totalLen / perPage)"
      :parent-index="index"
      @update="updatePageIndex"
    />
    <the-loader v-if="isLoading" />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import Pagination from '@/components/Pagination.vue';
import TheLoader from '@/components/TheLoader.vue';

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
      now: {
        country: '',
        gender: '',
      },
    };
  },
  computed: {
    countryArr() {
      return [...new Set(this.data.map((item) => item.location.country))];
    },
    genArr() {
      return [...new Set(this.data.map((item) => item.gender))];
    },
    selectedData() {
      if (this.now.country) {
        if (this.now.gender) {
          return this.sortData(
            this.data
              .filter((item) => item.country === this.now.country)
              .filter((item) => item.Town === this.now.gender),
          );
        }
        return this.sortData(this.data.filter((item) => item.country === this.now.country));
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
            seed: 'myRandomUser',
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
    updateSelectOpt(val) {
      [this.now.country, this.now.gender] = val;
      this.index = 0;
    },
  },
};
</script>
