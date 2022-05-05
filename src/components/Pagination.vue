<template>
  <div class="page mx-auto">
    <input
      type="button"
      class="page__btn"
      value="«"
      :disabled="parentIndex === 0"
      @click="$emit('update', parentIndex - 1)"
    />
    <input
      type="button"
      :value="item"
      v-for="(item, index) in parentLen"
      :key="item"
      :class="['page__btn', { 'page__btn--active': index === parentIndex }]"
      :disabled="parentIndex === index"
      @click="$emit('update', index)"
    />
    <input
      type="button"
      class="page__btn"
      value="»"
      :disabled="parentIndex === parentLen - 1"
      @click="$emit('update', parentIndex + 1)"
    />
  </div>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    parentIndex: Number,
    parentLen: Number,
  },
};
</script>
<style lang="scss" scoped>
  .page {
    display: flex;
    width: fit-content;
    margin: {
      top: 30px;
      bottom: 30px;
    }
    &__btn {
      border: 1px solid #ddd;
      & + & {
        margin: {
          left: -1px;
        }
      }
      &:first-of-type {
        border-radius: 3px 0 0 3px;
      }
      &:last-of-type {
        border-radius: 0 3px 3px 0;
      }
      padding: 10px 1.03rem;
      background: {
        color: transparent;
      }
      cursor: pointer;
      &:disabled {
        cursor: default;
      }
      &--active {
        position: relative;
        z-index: 1;
        background: {
          color: #2597c7;
        }
        color: #fff;
        border: 0;
        box-shadow: 0px 0px 0px 3px #2596c790;
      }
    }
  }
  // .page {
  //   margin: {
  //     left: 23px;
  //   }
  //   &__btn {
  //     width: 100%;
  //     display: block;
  //     margin: {
  //       top: 6px;
  //       bottom: 6px;
  //     }
  //     border: 0;
  //     background: {
  //       color: transparent;
  //     }
  //     cursor: pointer;
  //     font: {
  //       size: 15px;
  //     }
  //     color: #888;
  //     &:hover {
  //       color: #666;
  //     }
  //     &:disabled {
  //       cursor: default;
  //       color: #666;
  //       font: {
  //         weight: 600;
  //       }
  //       border: {
  //         right: 3px solid #0077b5;
  //       }
  //     }
  //   }
  // }
</style>
