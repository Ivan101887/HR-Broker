<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img
          src="@/assets/image/logo.png"
          alt="F2E 前端開發"
          class="logo__img"
        />
      </div>
    </router-link>
    <nav class="nav" v-if="isAuthenticated">
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
        :class="['log btn', { 'btn-peace': isAuthenticated }]"
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
        this.$store.dispatch('setAuthenticated', false);
        document.cookie = 'logIn = ;expires=Thu, 01 Jan 1970 00:00:00 UTC';
        if (this.$router.currentRoute.fullPath !== '/') {
          this.$router.replace('/');
        }
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
    justify-content: space-between;
    background: {
      color: #333;
    }
    padding: 10px;
  }
  .login {
    display: block;
    text-align: right;
  }
  .nav {
    &__link {
      font: {
        size: 15px;
      }
      color: #999;
      text-decoration: none;
      margin : {
        right: 15px;
      }
      &:first-of-type {
        margin : {
          left: -60px;
        }
      }
    }
  }
  .btn {
    border: {
      radius: 3px;
      width: 0;
    }
    font: {
      size: 15px;
    }
    padding: 5px 16px;
    &-peace {
      background: {
        color: #2597c7;
      }
      color: #fff;
    }
  }
  .router-link-exact-active {
    color: #fff;
  }
</style>
