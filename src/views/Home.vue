<template>
  <v-card class="ma-4">
    <v-toolbar
      flat
      color="primary"
      dark
    >
      <v-toolbar-title class="grey--text text--darken-1">Currently data</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab
        v-for="({ name }, index) in dataInfo.dataFrontend"
        :key="`tab-${index}`"
        v-text="name"
      />
      <v-tab-item
        v-for="(item, iItem) in dataInfo.dataFrontend"
        :key="`tabContent-${iItem}`"
      >
        <v-card flat>
          <v-card-text>
            <v-simple-table dense class="table">
              <template v-slot:default>
                <thead>
                  <tr class="primary">
                    <th
                      v-for="(thItem, iTh) in item"
                      :key="`th-${iTh}`"
                      class="text-left"
                      v-text="iTh"
                    />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      v-for="(tdItem, index) in item"
                      :key="`td-${index}`"
                      v-text="tdItem"
                    />
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import dataInfo from '../data';

export default {
  name: 'Home',
  data: () => ({
    dataInfo,
  }),
};
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #e0e0e0;
  thead {
    tr {
      th {
        text-transform: uppercase;
      }
    }
  }
}
</style>
