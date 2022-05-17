<template>
  <div
    class="modal"
    @click.stop.self="$emit('closeModal')"
    @keyup.esc="$emit('closeModal')"
  >
    <keep-alive>
      <component :is="switchCurrComponent" v-bind="$attrs" v-on="$listeners" />
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
    parentType: Number,
  },
  components: {
    ModalModify,
    ModalProfile,
  },
  created() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) { this.$emit('closeModal'); }
    });
    document.querySelector('body').style.overflow = 'hidden';
  },
  data() {
    return {
      currComponent: ['modal-profile', 'modal-modify'],
    };
  },
  computed: {
    switchCurrComponent() {
      return this.currComponent[this.parentType];
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
      color: rgba(0, 0, 0, 0.788);
    }
    z-index: 10;
    width: 100vw;
    height: 100vh;
  }
</style>
