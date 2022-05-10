<template>
  <div id="app">
    <TheHeader />
    <router-view
      :parent-data="selectedData[index]"
      :parent-len="data.length"
      :parent-country="countryArr"
      :parent-gender="genArr"
      @update="updateNow"
    >
    </router-view>
    <Pagination
      v-if="selectedData.length"
      :parent-len="selectedData.length"
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
import { mapGetters } from 'vuex';

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
    ...mapGetters({
      customIds: 'customList',
    }),
    customList() {
      return this.customIds.map((customItem) => this.data.find((item) => item.name === customItem));
    },
    selectedData() {
      if (this.now.country) {
        if (this.now.gender) {
          return this.sortData(
            this.data
              .filter((item) => item.location.country === this.now.country)
              .filter((item) => item.gender === this.now.gender),
          );
        }
        return this.sortData(
          this.data
            .filter((item) => item.location.country === this.now.country),
        );
      }
      if (this.now.gender) {
        if (this.now.country) {
          return this.sortData(
            this.data
              .filter((item) => item.location.country === this.now.country)
              .filter((item) => item.gender === this.now.gender),
          );
        }
        return this.sortData(
          this.data
            .filter((item) => item.gender === this.now.gender),
        );
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
    updateNow(country, gender) {
      console.log(country, gender);
      this.now = { country, gender };
      this.index = 0;
    },
  },
};
</script>
