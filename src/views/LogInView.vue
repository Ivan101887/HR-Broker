<template>
  <div class="login">
    <div class="test">
      <p class="test__email">帳號: reginald.gibson@example.com</p>
      <p class="test__pwd">密碼: 20202020</p>
    </div>
    <dir>
      <logInBox @authenticate="setIsSuccess" />
      <div class="loginStatus bg-success" v-if="isSuccess === true">
        登入成功
      </div>
      <div class="loginStatus bg-danger" v-if="isSuccess === false">
        帳號密碼有誤，請重新輸入
      </div>
      <p class="copyright">
        <font-awesome-icon icon="fa-regular fa-copyright" />
        2021 Design By Away
      </p>
    </dir>
  </div>
</template>
<script>
import LogInBox from '../components/LogInBox.vue';

export default {
  inheritAttrs: false,
  name: 'log-in-view',
  data() {
    return {
      isSuccess: '',
    };
  },
  components: {
    LogInBox,
  },
  methods: {
    setIsSuccess(val) {
      this.isSuccess = val;
      setTimeout(() => { this.isSuccess = null; }, 3000);
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
      color: #f5f5f5;
    }
    display: flex;
    flex: {
      wrap: wrap;
    }
    justify-content: center;
    align-items: center;
  }
  .test {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .loginStatus {
    position: absolute;
    z-index: 2;
    right: 0;
    top: 0;
    padding: 15px;
    color: #fff;
  }
  .copyright {
    color: #999;
    text-align: center;
    margin: {
      top: 50px;
    }
  }
  .bg {
    &-danger {
      background: {
        color: #dc3545;
      }
    }
    &-success {
      background: {
        color: #198753;
      }
    }
  }
</style>
