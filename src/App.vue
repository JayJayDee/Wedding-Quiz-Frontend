<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar 
      color="white" app>
      <!-- <v-toolbar-side-icon color="primary"></v-toolbar-side-icon> -->
      <v-toolbar-title class="teal--text">Seul&Dong's Wedding</v-toolbar-title>
    </v-toolbar>
    <loading-dialog :is-loading="isLoading"></loading-dialog>
    <v-content>
      <v-layout v-scroll="onScroll">
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
        <v-btn color="teal" flat value="home" to="/">
          <span>Wedding</span>
          <v-icon>favorite_border</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="quiz" to="/quiz">
          <span>Quiz</span>
          <v-icon>help_outline</v-icon>
        </v-btn>

        <v-btn color="teal" flat value="rank" to="/rank">
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

  private nav: string;
  private prevY: number | null;
  private isNavShow: boolean;

  @State('is_loading')
  private isLoading: boolean;

  @Action('authorize')
  private authorize: () => Promise<any>;

  constructor() {
    super();
    this.nav = 'home';
    this.prevY = null;
    this.isNavShow = true;
  }

  public onScroll(e: any) {
    let currentY: number = window.pageYOffset || document.documentElement.scrollTop;
    if (this.prevY === null) return this.prevY = currentY;
    if (this.prevY < currentY) {
      this.isNavShow = false;
    } else {
      this.isNavShow = true;
    }
    this.prevY = currentY;
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
