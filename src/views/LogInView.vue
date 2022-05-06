<template>
  <div class="login">
    <input type="submit" value="登入" @click="login" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  name: 'log-in-view',
  methods: {
    login() {
      this.$store.dispatch('setAuthenticated', true);
      this.$router.replace('/');
    },
  },
};
</script>
<style lang="scss" scoped>
  .login {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: {
      color: #fff;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
