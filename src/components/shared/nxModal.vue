<template>
  <v-row justify="center">
    <v-dialog
      v-model="showModal"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-h5">
          Add new data
        </v-card-title>
        <v-card-text>
          <v-text-field type="number" placeholder="X" v-model="x" messages="Coord. X"></v-text-field>
          <v-text-field type="number" placeholder="Y" v-model="y" messages="Coord. Y"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="action(false)"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="action(true)"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'nx-modal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data: () => ({
    x: 0,
    y: 0,
    showModal: false,
  }),
  watch: {
    show: {
      handler(value) {
        this.showModal = value;
        this.x = 0;
        this.y = 0;
      },
    },
  },
  methods: {
    action(status) {
      if (status) {
        this.$emit('new-data', { x: this.x, y: this.y });
      }
      this.$emit('update:show', false);
    },
  },
};
</script>
