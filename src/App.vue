<template>
  <div id="app">
    <TheHeader />
    <router-view
      :parent-all-data="data"
      :parent-size="listSize"
      :parent-data="sortData(selectedData, perPage)"
      :parent-list-data="sortData(selectedData, listSize)"
      :parent-len="selectedData.length"
      :parent-country="countryArr"
      :parent-gender="genArr"
      :parent-index="index"
      @update="updateNow"
      @updateIndex="updateIndex"
    >
    </router-view>

    <the-loader v-if="isLoading" />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';
import TheLoader from '@/components/TheLoader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
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
      listSize: 10,
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
          return this.data
            .filter((item) => item.location.country === this.now.country)
            .filter((item) => item.gender === this.now.gender);
        }
        return this.data
          .filter((item) => item.location.country === this.now.country);
      }
      if (this.now.gender) {
        if (this.now.country) {
          return this.data
            .filter((item) => item.location.country === this.now.country)
            .filter((item) => item.gender === this.now.gender);
        }
        return this.data
          .filter((item) => item.gender === this.now.gender);
      }
      return this.data;
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
    updateIndex(val) {
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
    updateNow(country, gender) {
      this.now = { country, gender };
      this.index = 0;
    },
  },
};
</script>
