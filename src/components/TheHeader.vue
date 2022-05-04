<template>
  <header>
    <figure class="logo">
      <img src="@/assets/logo.png" alt="F2E 前端開發" class="logo__img" />
    </figure>
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/members">會員列表</router-link>
      <router-link to="/custom">自選清單</router-link>
    </nav>
    <input type="button" value="登入" class="btn btn-peace" @click="$emit('switch')">
  </header>
</template>
<script>
export default {
  name: 'the-header',
};
</script>
