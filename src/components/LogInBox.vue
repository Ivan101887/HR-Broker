<template>
  <form class="loginBox" id="LogInBox" @submit="$event.preventDefault()">
    <figure class="imgCntr">
      <img
        src="@/assets/image/logo.png"
        alt="logo"
        class="img"
        width="145"
        height="41"
      />
    </figure>
    <div class="text">請登入</div>
    <label for="account" class="loginBox__label">
      <input
        type="text"
        class="loginBox__input br-tl br-tr"
        name="account"
        v-model="email"
        required
        placeholder="電子郵件"
      />
      <input
        type="text"
        class="loginBox__input br-bl br-br"
        v-model="password"
        required
        placeholder="密碼"
      />
    </label>
    <div class="group">
      <button type="submit" @click="login" class="btn btn-peace">送出</button>
      <button
        type="button"
        @click="$router.replace('/')"
        class="btn btn-outline"
      >
        取消
      </button>
    </div>
  </form>
</template>

<script>

export default {
  name: 'log-in-box',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const config = {
        params: {
          results: 1,
          seed: 'myRandomUser',
          inc: 'login,email',
        },
      };
      const url = 'https://randomuser.me/api/';
      try {
        const res = await this.$http.get(url, config);
        const results = await res.data.results[0];
        if (this.email === results.email && this.password === results.login.password) {
          this.$emit('authenticate', true);
          setTimeout(() => {
            this.$router.replace('/');
          }, 1000);
        } else {
          this.$emit('authenticate', false);
          [this.email, this.password] = ['', ''];
        }
        this.recordTime();
      } catch (e) { console.log(e); }
    },
    recordTime() {
      const now = new Date();
      const exp = new Date(now.setDate(now.getDate() + 1));
      document.cookie = `isLogIn = true; expires = ${exp.toUTCString()}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .loginBox {
    width: 300px;
    text-align: center;
    &__label {
      margin-top: 10px;
    }
    &__input {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0;
      padding: 10px;
      font: {
        size: 15px;
      }
      box-sizing: border-box;
      &:last-of-type {
        margin-top: -1px;
      }
      &:focus {
        position: relative;
        z-index: 1;
        outline: none;
        box-shadow: 0px 0px 0px 3px #2596c768;
      }
    }
  }
  .br {
    &-tl {
      border-top-left-radius: 3px;
    }
    &-tr {
      border-top-right-radius: 3px;
    }
    &-bl {
      border-bottom-left-radius: 3px;
    }
    &-br {
      border-bottom-right-radius: 3px;
    }
  }
  .text {
    font: {
      size: 19px;
    }
    margin: {
      top: 25px;
      bottom: 10px;
    }
  }
  .group {
    margin: {
      top: 15px;
    }
    border-radius: 3px;
    overflow: hidden;
  }
  .btn {
    display: inline-block;
    width: 50%;
    padding: {
      top: 10px;
      bottom: 10px;
    }
    font: {
      size: 16px;
    }
    cursor: pointer;
    &-peace {
      border: 1px solid #1d769c;
      background: {
        color: #1d769c;
      }
      color: #fff;
    }
    &-outline {
      color: #1d769c;
      border: 1px solid #1d769c;
      background: {
        color: transparent;
      }
    }
  }
</style>
