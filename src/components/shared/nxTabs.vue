<template>
  <div>
    <v-tabs vertical>
      <v-tab
        v-for="({ name }, index) in data"
        :key="`tab-${index}`"
        v-text="name"
      />
      <v-tab-item
        v-for="(item, iItem) in data"
        :key="`tabContent-${iItem}`"
        @click="onClickTab(iItem)"
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
            <div class="mt-6">
              <slot name="extra"></slot>
            </div>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'nx-tabs',
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    onClickTab(index) {
      this.$emit('clicked', index);
    },
  },
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
