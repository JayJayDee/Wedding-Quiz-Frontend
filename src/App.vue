<template>
  <v-app>
    <!-- <v-navigation-drawer app></v-navigation-drawer> -->
    <v-toolbar 
      color="white" 
      app
      v-if="showTopMenuBar">
      <!-- <v-toolbar-side-icon color="primary"></v-toolbar-side-icon> -->
      <v-toolbar-title class="teal--text">Seul&Dong's Wedding</v-toolbar-title>
    </v-toolbar>
    <loading-dialog :is-loading="isLoading"></loading-dialog>
    <v-content>
      <v-layout>
        <router-view></router-view>
      </v-layout>
      <div style="height: 50px;"></div>
    </v-content>
    <v-footer color="transparent" fixed>
      <v-bottom-nav
        :active.sync="nav"
        :value="isNavShow"
        absolute
        color="white">
        <v-btn color="pink" flat value="home" to="/">
          <span>Wedding</span>
          <v-icon>favorite_border</v-icon>
        </v-btn>

        <v-btn color="pink" flat value="quiz" to="/quiz">
          <span>Quiz</span>
          <v-icon>help_outline</v-icon>
        </v-btn>

        <v-btn color="pink" flat value="rank" to="/rank">
          <span>Rank</span>
          <v-icon>people_outline</v-icon>
        </v-btn>
      </v-bottom-nav> 
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LoadingDialog from './components/LoadingDialog.vue';

import { State, Action } from 'vuex-class';

@Component({
  name: 'App',
  components: {
    LoadingDialog
  }
})
export default class App extends Vue {

  @State('member_token') 
  private memberToken: string | null;

  private prevY: number | null;
  //private isNavShow: boolean;
  private nav: string = '';

  @State('is_loading')
  private isLoading: boolean;

  @Action('authorize')
  private authorize: () => Promise<any>;

  constructor() {
    super();
    this.prevY = null;
    //this.isNavShow = true;
  }

  private getCurrentNav(): string {
    let url = location.href;
    if (url.includes('quiz')) return 'quiz';
    else if (url.includes('rank')) return 'rank';
    return 'home';
  }

  private get isNavShow(): boolean {
    return true;
  }

  public get showTopMenuBar(): boolean {
    if (this.nav === 'quiz' || this.nav === 'rank') return true;
    return false;
  }

  public get routeName(): string | undefined {
    return this.$router.currentRoute.name;
  }

  public mounted() {
    this.authorize()
    .then(function(resp) {})
    .catch((err: Error) => {});
  }
}
</script>

<style>
figure a img {
  width: 180px;
  height: 180px;
}
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

h3 {
  color: #333333;
}

p {
  color: #333333;
}

body {
  overflow:hidden;
}
</style>
