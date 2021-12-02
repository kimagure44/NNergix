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
          <v-text-field :rules="rules" type="number" placeholder="X" v-model="x"></v-text-field>
          <v-text-field :rules="rules" type="number" placeholder="Y" v-model="y"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
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
    rules: [
      (value) => !!value || 'Required.',
    ],
    x: 0,
    y: 0,
    showModal: false,
  }),
  watch: {
    show: {
      handler(newVal) {
        this.showModal = newVal;
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
