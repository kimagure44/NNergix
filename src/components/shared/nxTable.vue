<template>
  <v-data-table
    :headers="headers"
    :items="items"
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
      type: Object,
      required: true,
      default: () => {},
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
        this.headers = value.schema.fields.map((item) => ({ text: item.name, value: item.name, class: 'custom-th' }));
        this.items = value.data.map((item) => ({ ...item }));
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
