<template>
  <div id="app">
    <loading :is-loading="isLoading"></loading>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
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
    .then(() => {
      
    })
  }

  public computed() {
    
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
