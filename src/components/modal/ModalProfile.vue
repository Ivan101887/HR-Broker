<template>
  <div class="memberInfo">
    <figure class="memberInfo__wrap">
      <img
        :src="parentData.picture.large"
        :alt="parentData.name.first"
        class="memberInfo__img"
      />
    </figure>
    <section class="memberInfo__details">
      <h3 class="memberInfo__name">
        {{ parentData.name.first }} {{ parentData.name.last }}
      </h3>
      <p class="memberInfo__gender">{{ parentData.gender }}</p>
      <p class="memberInfo__mail">{{ parentData.email }}</p>
      <p class="memberInfo__phone">{{ parentData.phone }}</p>
      <p class="memberInfo__age">{{ parentData.dob.age }}</p>
    </section>
    <Map class="memberInfo__map" :parent-data="parentData" />
    <!-- // <iframe
    //   class="memberInfo__map"
    //   title="random user's location"
    //   frameborder="0"
    //   loading="lazy"
    //   referrerpolicy="no-referrer-when-downgrade"
    //   :src="getMapUrl()"
    // >
    // </iframe> -->
  </div>
</template>
<script>
import Map from '@/components/Map.vue';

export default {
  name: 'modal-profile',
  props: {
    parentData: Object,
  },
  components: { Map },
};
</script>
<style lang="scss" scoped>
  .memberInfo {
    display: flex;
    flex: {
      wrap: wrap;
    }
    border: {
      radius: 0.1875rem;
    }
    padding: 15px;
    width: 470px;
    background: {
      color: #fff;
    }
    box-sizing: border-box;
    &__wrap {
      overflow: hidden;
      border: {
        radius: 5px;
      }
    }
    &__img {
      display: block;
      width: 100%;
      height: auto;
    }
    &__details {
      margin: {
        left: 15px;
      }
      p {
        margin: {
          top: 5px;
        }
      }
    }
    &__map {
      margin: {
        top: 15px;
      }
    }
  }
</style>
