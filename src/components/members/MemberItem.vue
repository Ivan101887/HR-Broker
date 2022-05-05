<template>
  <li
    class="memberItem"
    @click="isShowModal = true"
    @keyup="isShowModal = true"
  >
    <figure class="memberItem__imgCntr">
      <img
        :src="parentData.picture.large"
        :alt="parentData.name.first + parentData.name.last"
        class="memberItem__img"
      />
      <h3 class="memberItem__name">
        {{ parentData.name.first }} {{ parentData.name.last }}
      </h3>
    </figure>
    <div class="memberItem__loc">
      <p class="memberItem__ctr">{{ parentData.location.country }}</p>
      <p class="memberItem__city">{{ parentData.location.city }}</p>
    </div>
    <Modal
      v-if="isShowModal"
      :parent-index="0"
      :parent-data="parentData"
      @closeModal="closeModal"
    />
  </li>
</template>
<script>
import Modal from '../modal/Modal.vue';

export default {
  name: 'member-item',
  props: {
    parentData: Object,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  components: {
    Modal,
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
      document.querySelector('body').style.overflow = '';
    },
  },
};
</script>
    Modal
<style lang="scss" scoped>
  .memberItem {
    padding: 15px;
    &:hover {
      background: {
        color: #fff4d2;
      }
    }
    &__imgCntr {
      position: relative;
    }
    &__img {
      display: block;
      width: 100%;
      height: auto;
    }
    &__name {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 5px;
      font: {
        size: 15px;
      }
      color: #fff;
      background: rgba(0, 0, 0, 0.527);
      box-sizing: border-box;
    }
    &__loc {
      position: relative;
      font: {
        size: 12px;
      }
      color: #aaa;
      margin: {
        top: 5px;
      }
    }
  }
</style>
