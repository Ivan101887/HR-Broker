<template>
  <div id="app">
    <TheHeader />
    <router-view :parent-data="data"></router-view>
    <the-loader v-if="isShowLoading" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TheHeader from '@/components/TheHeader.vue';
import TheLoader from '@/components/TheLoader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    TheLoader,
  },
  async created() {
    this.$store.dispatch('setIsShow', true);
    await this.getData();
    this.load();
    if (document.cookie.includes('logIn')) {
      this.$store.dispatch('setAuthenticated', true);
    }
    document.querySelector('body').style.overflow = '';
    this.$store.dispatch('setIsShow', false);
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    ...mapGetters({
      isShowLoading: 'isShow',
    }),
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
        this.data = await res.data.results;
      } catch (e) {
        console.log(e);
      }
    },
    load() {
      if (document.cookie) {
        let users = [];
        if (document.cookie.includes('logIn')) {
          if (!localStorage.getItem('user')) return;
          users = [...JSON.parse(localStorage.getItem('user'))];
          this.$store.dispatch('setMember', users);
        }
      }
    },
  },
};
</script>
