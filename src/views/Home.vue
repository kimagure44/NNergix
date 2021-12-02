<template>
  <div>
    <v-card class="ma-4">
      <v-toolbar
        flat
        color="primary"
        dark
      >
        <v-row justify="space-around">
          <v-col class="grey--text text--darken-1">
            Currently data
          </v-col>
          <v-col>
            <v-row justify="end">
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="addData"
              >
                Add
              </v-btn>
              <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="resetData"
              >
                Reset
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-toolbar>
      <nx-tabs :data="dataInfo.dataFrontend" @clicked="setTabId">
        <template v-slot:extra>
          <nx-table :data="dataInfo.months[tabId]" />
          <nx-plotly :data="dataInfo.charts[tabId]" />
        </template>
      </nx-tabs>
    </v-card>
    <v-snackbar
      v-model="showAlert"
      absolute
      top
      left
      color="info"
    >
      {{ msnAlert }}
    </v-snackbar>
    <nx-modal :show.sync="showModal" @input="showModal = false" @new-data="newData"></nx-modal>
  </div>
</template>

<script>
import dataInfo from '../data';
import nxTabs from '../components/shared/nxTabs.vue';
import nxTable from '../components/shared/nxTable.vue';
import nxPlotly from '../components/shared/nxPlotly.vue';
import nxModal from '../components/shared/nxModal.vue';

export default {
  name: 'Home',
  data: () => ({
    dataInfo,
    tabId: 0,
    originalData: {},
    showAlert: false,
    msnAlert: '',
    showModal: false,
  }),
  methods: {
    setTabId(id) {
      this.tabId = id;
    },
    show(msn) {
      this.msnAlert = msn;
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
        this.msnAlert = '';
      }, 2000);
    },
    resetData() {
      if (!this.showAlert) {
        this.show('Data reset success');
        this.dataInfo = JSON.parse(JSON.stringify(this.originalData));
      }
    },
    addData() {
      this.showModal = true;
    },
    newData(payload) {
      if (!this.showAlert) {
        const { x, y } = payload;
        this.showModal = false;
        this.show('Data added success');
        this.dataInfo.charts[this.tabId].data[0].x.push(parseFloat(x));
        this.dataInfo.charts[this.tabId].data[0].y.push(parseFloat(y));
        this.dataInfo = JSON.parse(JSON.stringify(this.dataInfo));
      }
    },
  },
  created() {
    this.originalData = JSON.parse(JSON.stringify(this.dataInfo));
  },
  components: {
    nxTabs,
    nxTable,
    nxPlotly,
    nxModal,
  },
};
</script>
