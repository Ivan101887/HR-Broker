<template>
  <div id="app">
    <TheHeader v-if="!isShow" @switch="isShow = true" />
    <router-view :parent-data="data" />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
  },
  created() {
    this.getData();
  },
  data() {
    return {
      isLogIn: false,
      isShow: false,
      data: [],
      perPage: 20,
    };
  },
  methods: {
    async getData() {
      try {
        const config = {
          params: {
            results: 150,
            seed: 'randomuserforHRbroker',
          },
        };
        const url = 'https://randomuser.me/api/';
        const res = await this.$http.get(url, config);
        this.data = res.data.results;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
