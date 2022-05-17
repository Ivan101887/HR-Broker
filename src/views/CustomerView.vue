<script>
import { mapGetters } from 'vuex';
import AdminView from './AdminView.vue';

export default {
  name: 'customer-view',
  extends: AdminView,
  data() {
    return {
      title: '自選清單',
      total: 0,
      data: [],
    };
  },
  provide() {
    return {
      parentName: '已加入',
    };
  },
  created() {
    this.data = this.customList;
    this.total = this.customList.length;
  },
  computed: {
    ...mapGetters({
      customIds: 'customList',
    }),
    customList() {
      return this.customIds
        .map((customItem) => this.parentData
          .find((item) => item.login.uuid === customItem));
    },
  },
  watch: {
    nowOptions: {
      handler() {
        this.index = 0;
      },
      deep: true,
    },
    customList() {
      this.data = this.customList;
      this.total = this.customList.length;
    },
  },
  methods: {
    check() {
      document.querySelector('#MemberTable').addEventListener('checkPage', () => {
        if (this.customIds.length <= this.index * this.listSize) {
          this.index -= 1;
        }
      });
    },
  },
};
</script>
