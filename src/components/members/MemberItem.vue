<template>
  <li class="memberItem">
    <figure class="memberItem__imgCntr">
      <img
        :src="parentData.picture.large"
        :alt="parentData.name.first + parentData.name.last"
        class="memberItem__img"
      />
    </figure>

    {{ parentData.name.title }} {{ parentData.name.last }}
  </li>
</template>
<script>
export default {
  name: 'member-item',
  props: {
    parentData: Object,
  },
};
</script>
