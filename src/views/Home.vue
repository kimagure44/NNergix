<template>
  <v-card class="ma-4">
    <v-toolbar
      flat
      color="#41E0B2"
      dark
    >
      <v-toolbar-title class="text-color-black">User Profile</v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-account
        </v-icon>
        Option 1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Text 1
            </p>
            <p>
              Text 2
            </p>

            <p class="mb-0">
              Text 3
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Text 4
            </p>

            <p>
              Text 5
            </p>

            <p>
              Text 6
            </p>

            <p>
              Text 7
            </p>

            <p class="mb-0">
              Text 8
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Text 9
            </p>

            <p class="mb-0">
              Text 10
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>

export default {
  name: 'Home',

};
</script>
