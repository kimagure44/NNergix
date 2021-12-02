<template>
  <v-card class="ma-4">
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title class="grey--text text--darken-1">Currently data</v-toolbar-title>
    </v-toolbar>
    <nx-tabs :data="dataInfo.dataFrontend" @clicked="setTabId">
      <template v-slot:extra>
        <nx-table :data="dataInfo.months" :tab-id="tabId"></nx-table>
      </template>
    </nx-tabs>
  </v-card>
</template>

<script>
import dataInfo from '../data';
import nxTabs from '../components/shared/nxTabs.vue';
import nxTable from '../components/shared/nxTable.vue';

export default {
  name: 'Home',
  data: () => ({
    dataInfo,
    tabId: 0,
  }),
  created() {
    console.log(this.dataInfo);
  },
  methods: {
    setTabId(id) {
      this.tabId = id;
    },
  },
  components: {
    nxTabs,
    nxTable,
  },
};
</script>
