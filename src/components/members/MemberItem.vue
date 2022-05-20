<template>
  <li
    class="memberItem"
    @click="$emit('update', parentIndex)"
    @keyup="$emit('update', parentIndex)"
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
      <div
        :class="[
          'icon',
          parentData.gender === 'male' ? 'icon-peace' : 'icon-pink',
        ]"
      >
        <font-awesome-icon
          icon="fa-solid fa-person-dress"
          v-if="parentData.gender === 'female'"
        />
        <font-awesome-icon icon="fa-solid fa-person" v-else />
      </div>
    </figure>
    <div class="memberItem__loc">
      <p class="memberItem__ctr">{{ parentData.location.country }}</p>
      <p class="memberItem__city">{{ parentData.location.city }}</p>
    </div>
  </li>
</template>
<script>

export default {
  name: 'member-item',
  props: {
    parentData: Object,
    parentIndex: Number,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
};
</script>
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
    .icon {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #fff;
      font: {
        size: 12px;
      }
      &-peace {
        background: {
          color: #34a2d1da;
        }
      }
      &-pink {
        background: {
          color: #f272bdd8;
        }
      }
    }
  }
</style>
