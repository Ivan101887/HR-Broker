<template>
  <tr class="tbl__tr">
    <td class="tbl__td text-ce">
      <label :for="parentData.login.uuid">
        <input
          type="checkbox"
          :id="parentData.login.uuid"
          class="input"
          :checked="customList.includes(parentData.login.uuid)"
          @click.self="clickCheckBox"
        />
      </label>
    </td>
    <td class="tbl__td text-ce">
      <figure class="tbl__imgCntr p-10">
        <img
          :src="parentData.picture.thumbnail"
          :alt="parentData.name.first"
          class="tbl__img"
        />
      </figure>
    </td>
    <td class="tbl__td p-10">{{ parentData.login.username }}</td>
    <td class="tbl__td p-10">
      {{ parentData.name.first }} {{ parentData.name.last }}
    </td>
    <td class="tbl__td text-ce p-10">{{ parentData.gender }}</td>
    <td class="tbl__td text-ce p-10">{{ parentData.dob.age }}</td>
    <td class="tbl__td text-ce p-10">{{ parentData.location.country }}</td>
    <td class="tbl__td">{{ parentData.email }}</td>
    <td class="tbl__td p-10 text-ce">
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
  created() {
    this.load();
  },
  methods: {
    clickCheckBox(e) {
      const array = this.customList;
      const user = 'c4f42e99-8b27-4115-a064-2f78987b9d47';
      if (e.target.checked) {
        array.push(this.parentData.login.uuid);
        localStorage.setItem(user, JSON.stringify(array));
        this.$store.dispatch('setMember', array);
      } else {
        const i = array.indexOf(this.parentData.login.uuid);
        array.splice(i, 1);
        localStorage.setItem(user, JSON.stringify(array));
        this.$store.dispatch('setMember', array);
        if (!this.customList.length) {
          if (this.$router.currentRoute.fullPath !== '/admin') {
            this.$router.replace('/admin');
          }
        }
        if (this.$router.currentRoute.fullPath !== '/admin') {
          this.$emit('checkPage');
        }
      }
    },
    load() {
      if (document.cookie) {
        let users = [];
        const id = 'c4f42e99-8b27-4115-a064-2f78987b9d47';
        if (document.cookie.includes(id)) {
          if (!localStorage.getItem(id)) return;
          users = [...JSON.parse(localStorage.getItem(id))];
          this.$store.dispatch('setMember', users);
        }
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
      vertical-align: middle;
      box-sizing: border-box;
    }
  }
  .input {
    margin: 0;
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
    padding: 5px 15px;
    &-danger {
      background: {
        color: #dc3545;
      }
    }
  }
  .p {
    &-10 {
      padding: 10px;
    }
  }
</style>
