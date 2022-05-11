<template>
  <tr class="tbl__tr">
    <td class="tbl__td text-ce">
      <label for="TblTd">
        <input
          type="checkbox"
          id="TblTd"
          :checked="customList.includes(parentData.login.uuid)"
          @click="clickCheckBox"
        />
      </label>
    </td>
    <td class="tbl__td text-ce">
      <figure class="tbl__imgCntr">
        <img
          :src="parentData.picture.thumbnail"
          :alt="parentData.name.first"
          class="tbl__img"
        />
      </figure>
    </td>
    <td class="tbl__td">{{ parentData.login.username }}</td>
    <td class="tbl__td">
      {{ parentData.name.first }} {{ parentData.name.last }}
    </td>
    <td class="tbl__td text-ce">{{ parentData.gender }}</td>
    <td class="tbl__td text-ce">{{ parentData.registered.age }}</td>
    <td class="tbl__td text-ce">{{ parentData.location.country }}</td>
    <td class="tbl__td">{{ parentData.email }}</td>
    <td class="tbl__td pr-20">
      <input
        type="button"
        @click="$emit('update', parentIndex)"
        class="btn btn-danger"
        value="編輯"
      />
    </td>
  </tr>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'member-tbl-item',
  props: {
    parentData: Object,
    parentIndex: Number,
  },
  methods: {
    clickCheckBox(e) {
      if (e.target.checked) {
        this.$store.dispatch('addMember', this.parentData.login.uuid);
      } else {
        this.$store.dispatch('removeMember', this.parentData.login.uuid);
      }
    },
  },
  computed: {
    ...mapGetters({
      customList: 'customList',
    }),
  },
};
</script>
<style lang="scss" scoped>
  .tbl {
    &__tr {
      &:hover {
        background: {
          color: #fff4d2;
        }
      }
    }
    &__imgCntr {
      max-width: 50px;
    }
    &__img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    &__td {
      padding: 10px;
      vertical-align: middle;
      box-sizing: border-box;
    }
  }
  .text {
    &-ce {
      text-align: center;
    }
  }
  .btn {
    border: {
      width: 0;
      radius: 3px;
    }
    font: {
      size: 16px;
    }
    color: #fff;
    padding: 8px 15px;
    &-danger {
      background: {
        color: #dc3545;
      }
    }
  }
  .pr {
    &-20 {
      padding: {
        right: 20px;
      }
    }
  }
</style>
