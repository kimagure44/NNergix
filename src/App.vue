<template>
  <v-app>
    <v-app-bar
      app
      color="#41E0B2"
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

<style lang="scss">
  $primary-color: #41E0B2;
  $black: #000000;
  .bg {
    &-color {
      &-primary {
        background-color: $primary-color;
      }
    }
  }
  .text {
    &-color {
      &-black {
        color: $black;
      }
    }
  }
</style>
