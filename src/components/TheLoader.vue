<template>
  <div class="wrap">
    <div class="loading"></div>
    <span class="text">資料下載中...請稍後!</span>
  </div>
</template>
<script>
export default {
  name: 'the-loader',
  created() {
    document.querySelector('body').style.overflow = 'hidden';
  },
};
</script>
<style lang="scss" scoped>
  .wrap {
    position: fixed;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex: {
      direction: column;
    }
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .loading {
    width: 50px;
    height: 50px;
    background-color: #2597c7;
    animation: loading 2s infinite ease-in-out;
  }
  .text {
    margin: {
      top: 10px;
    }
    color: #2597c7;
  }
  @keyframes loading {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }

    50% {
      transform: rotateX(180deg) rotateY(0deg);
    }

    100% {
      transform: rotateX(180deg) rotateY(-180deg);
    }
  }
</style>
