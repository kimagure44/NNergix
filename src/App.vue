<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-btn
          href="https://www.nnergix.com/"
          target="_blank"
          text
          plain
        >
          <v-img
            alt="NNergix Logo"
            class="shrink mr-2"
            contain
            :src="logo"
            transition="scale-transition"
            width="90"
          />
        </v-btn>
      </div>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import logo from '@/assets/logo.webp';

export default {
  name: 'App',

  data: () => ({
    logo,
  }),
};
</script>
