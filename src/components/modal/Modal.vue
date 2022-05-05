<template>
  <div
    class="modal"
    @click.stop="$emit('closeModal')"
    @keyup.esc="$emit('closeModal')"
  >
    <keep-alive>
      <component :is="switchCurrComponent" v-bind="$attrs" />
    </keep-alive>
  </div>
</template>
<script>
import ModalModify from '@/components/modal/ModalModify.vue';
import ModalProfile from '@/components/modal/ModalProfile.vue';

export default {
  inheritAttrs: false,
  name: 'modal',
  props: {
    parentIndex: String,
  },
  components: {
    ModalModify,
    ModalProfile,
  },
  created() {
    window.addEventListener('keyup', () => {
      console.log('close');
      this.$emit('closeModal');
    });
    document.querySelector('body').style.overflow = 'hidden';
  },
  data() {
    return {
      currComponent: 'modal-profile',
    };
  },
  computed: {
    switchCurrComponent() {
      return this.currComponent;
    },
  },
  watch: {
    parentComponent(nowIndex) {
      const component = ['modal-profile', 'modal-modify'];
      this.currComponent = component[nowIndex];
    },
  },
};
</script>
<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: {
      color: rgba(0, 0, 0, 0.5);
    }
    z-index: 10;
    width: 100vw;
    height: 100vh;
  }
</style>
