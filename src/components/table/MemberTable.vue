<template>
  <table class="tbl">
    <thead class="tbl__thead">
      <tr class="tbl__tr">
        <th class="tbl__th cell-md">{{ parentName }}</th>
        <th class="tbl__th cell-xs">照片</th>
        <th class="tbl__th cell-lg">帳號</th>
        <th class="tbl__th cell-xl">姓名</th>
        <th class="tbl__th cell-ms">性別</th>
        <th class="tbl__th cell-sm">年齡</th>
        <th class="tbl__th cell-ml">國籍</th>
        <th class="tbl__th cell-xxl">電子郵件</th>
        <th class="tbl__th">編輯</th>
      </tr>
    </thead>
    <tbody class="tbl__tbody">
      <member-tbl-item
        v-for="(item, i) in parentData"
        :key="item.login.salt"
        :class="{ 'bg-cancel': i % 2 === 0 }"
        :parent-data="item"
        :parent-index="i"
        v-on="$listeners"
      />
    </tbody>
  </table>
</template>
<script>
import MemberTblItem from '@/components/table/MemberTblItem.vue';

export default {
  inheritAttrs: false,
  components: { MemberTblItem },
  name: 'member-table',
  props: {
    parentData: Array,
    parentName: String,
  },
};
</script>
<style lang="scss" scoped>
  .tbl {
    margin: {
      top: 15px;
    }
    width: 100%;
    &__tbody > &__tr {
      border: 1px solid #e6e6e6;
    }
    &__thead > &__tr {
      border: {
        width: 1px 1px 2px 1px;
        style: solid;
        color: #d6d6d6;
      }
      background: {
        image: radial-gradient(farthest-corner at 50% 0%, #f5f5f5, #dfdfdf);
      }
    }
    &__th {
      padding: {
        top: 10px;
        bottom: 10px;
      }
      white-space: nowrap;
      font: {
        size: 0.9375rem;
      }
    }
  }
  .bg {
    &-cancel {
      background: {
        color: #f9f9f9;
      }
    }
  }
  .cell {
    &-xs {
      width: 5.5%;
    }
    &-sm {
      width: 6.3%;
    }
    &-ms {
      width: 8.75%;
    }
    &md {
      width: 9.15%;
    }
    &-ml {
      width: 13.75%;
    }
    &-lg {
      width: 14.1%;
    }
    &-xl {
      width: 15.4%;
    }
    &-xxl {
      width: 18.75%;
    }
  }
</style>
