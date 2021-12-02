<template>
  <v-data-table
    :headers="headers[tabId]"
    :items="items[tabId]"
    :items-per-page="5"
    class="elevation-1"
    dense
  ></v-data-table>
</template>

<script>
export default {
  name: 'nx-table',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    tabId: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data: () => ({
    headers: [{}],
    items: [{}],
  }),
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler(value) {
        this.headers = value.map(({ schema }) => schema.fields.map((item) => ({ text: item.name, value: item.name, class: 'custom-th' })));
        this.items = value.map(({ data }) => data.map((item) => ({ ...item })));
      },
    },
  },
};
</script>

<style lang="scss">
.custom-th {
  background-color: var(--primary-color);
}
</style>
