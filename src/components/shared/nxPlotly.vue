<template>
  <v-card class="mt-6">
    <v-card-title class="primary">
      <v-row justify="space-around">
        <v-col>{{ iData.title }}</v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <div :id="randomId" class="plotly" ref="plotly"></div>
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
    data(value) {
      this.iData = JSON.parse(JSON.stringify(value));
      if (this.$refs.plotly) {
        this.updatePlotly();
      }
    },
  },
  methods: {
    updatePlotly() {
      this.$Plotly.newPlot(this.randomId, this.iData.data, this.iData.layout);
    },
  },
  created() {
    this.iData = JSON.parse(JSON.stringify(this.data));
  },
  mounted() {
    this.updatePlotly();
  },
};
</script>

<style lang="scss" scoped>
.plotly {
  display: flex;
  justify-content: center;
}
</style>
