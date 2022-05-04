<template>
  <div id="app">
    <TheHeader v-if="!isLogIn" @switch="isLogIn = true" />
    <router-view />
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
  },
  data() {
    return {
      isLogIn: false,

    };
  },
  methods: {

  },
};
</script>
