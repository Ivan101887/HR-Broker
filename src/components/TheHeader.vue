<template>
  <header class="header">
    <h1 class="logo">
      <img src="@/assets/image/logo.png" alt="F2E 前端開發" class="logo__img" />
    </h1>
    <nav class="nav">
      <router-link class="nav__link" to="/">首頁</router-link>
      <router-link class="nav__link" to="/admin">會員列表</router-link>
      <router-link class="nav__link" to="/customer" v-if="customList.length">
        自選清單
      </router-link>
    </nav>
    <router-link class="login" to="/login">
      <input
        type="button"
        :value="!isAuthenticated ? '登入' : '登出'"
        class="log btn btn-peace"
        @click="clickLog"
      />
    </router-link>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'the-header',
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      customList: 'customList',
    }),
  },
  methods: {
    clickLog(e) {
      if (this.isAuthenticated) {
        console.log(this.isAuthenticated);
        this.$store.dispatch('setAuthenticated', false);
        this.$router.replace('/');
        e.preventDefault();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    background: {
      color: #333;
    }
    padding: 10px;
  }
  .login {
    display: block;
    text-align: right;
  }
  .logo,
  .nav,
  .login {
    width: 33.333%;
  }
  .login {
    justify-self: flex-end;
  }
  .nav {
    text-align: center;
    &__link {
      font: {
        size: 15px;
      }
      color: #999;
      text-decoration: none;
      & + & {
        margin: {
          left: 15px;
        }
      }
    }
  }
  .router-link-exact-active {
    color: #fff;
  }
</style>
