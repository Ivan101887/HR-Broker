<script>
import { mapGetters } from 'vuex';
import AdminView from './AdminView.vue';

export default {
  name: 'customer-view',
  extends: AdminView,
  data() {
    return {
      title: '自選清單',
    };
  },
  provide() {
    return {
      parentName: '已加入',
    };
  },
  computed: {
    data() {
      let arr = [];
      if (this.parentData.length > 0) {
        arr = this.customIds.map((customItem) => this.parentData
          .find((item) => item.login.uuid === customItem));
      }
      return arr;
    },
    ...mapGetters({
      customIds: 'customList',
    }),
  },
};
</script>
