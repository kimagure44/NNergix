<template>
  <v-card class="mt-6">
    <v-card-title class="primary">
      <v-row justify="space-around">
        <v-col>{{ iData.title }}</v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div :id="randomId" class="plotly"></div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'nx-plotly',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data: () => ({
    iData: {},
    randomId: `id-${Math.random().toString(36).substring(7)}`,
  }),
  watch: {
    data: {
      deep: true,
      immediate: true,
      handler(value) {
        this.iData = { ...value };
      },
    },
  },
  mounted() {
    this.$Plotly.newPlot(this.randomId, this.iData.data, this.iData.layout);
  },
};
</script>

<style lang="scss" scoped>
.plotly {
  display: flex;
  justify-content: center;
}
</style>
