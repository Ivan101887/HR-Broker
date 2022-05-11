<template>
  <table class="tbl">
    <thead class="tbl__thead">
      <tr class="tbl__tr">
        <th class="tbl__th cell-md">{{ parentName }}</th>
        <th class="tbl__th cell-xs">照片</th>
        <th class="tbl__th cell-lg">帳號</th>
        <th class="tbl__th cell-ml">姓名</th>
        <th class="tbl__th cell-md">性別</th>
        <th class="tbl__th cell-sm">年齡</th>
        <th class="tbl__th cell-ml">國籍</th>
        <th class="tbl__th cell-xxl">電子郵件</th>
        <th class="tbl__th">編輯</th>
      </tr>
    </thead>
    <tbody class="tbl__tbody">
      <member-tbl-item
        v-for="(item, i) in parentData"
        :key="item.id.value"
        :class="{ 'bg-cancel': i % 2 === 0 }"
        :parent-data="item"
        v-bind="$attrs"
        v-on="$listeners"
      />
    </tbody>
  </table>
</template>
<script>
import MemberTblItem from '@/components/table/MemberTblItem.vue';

export default {
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
    &__thead > &__tr {
      background: {
        color: #d9d9d9;
      }
    }
    &__th {
      padding: 15px;
      white-space: nowrap;
    }
    &__tr {
      border: 1px solid #e6e6e6;
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
      width: 6%;
    }
    &-sm {
      width: 6.75%;
    }
    &-md {
      width: 8%;
    }
    &-ml {
      width: 14%;
    }
    &-lg {
      width: 15%;
    }
    &-xl {
      width: 16.5%;
    }
    &-xxl {
      width: 20%;
    }
  }
</style>
