<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar 
      color="primary" app>
      <v-toolbar-side-icon color="primary"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Seul&Dong's Wedding</v-toolbar-title>
    </v-toolbar>
    <loading :is-loading="isLoading"></loading>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Loading from './views/Loading.vue';

import { State, Action } from 'vuex-class';

@Component({
  name: 'App',
  components: {
    Loading
  }
})
export default class App extends Vue {

  @State('member_token') 
  private memberToken: string | null;

  @State('is_loading')
  private isLoading: boolean;

  @Action('authorize')
  private authorize: () => Promise<any>;

  constructor() {
    super();
  }

  public mounted() {
    console.log('mounted!');
    this.authorize()
    .then(function(resp) {
      console.log('initialize completed!');
    })
    .catch((err: Error) => {
      console.log('something error happended!');
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
