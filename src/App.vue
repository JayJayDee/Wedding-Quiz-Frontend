<template>
  <v-app>
    <v-content class="content">
      <v-layout>
        <router-view></router-view>
      </v-layout>
      <div style="height: 50px;"></div>
    </v-content>
    <v-footer>
      <v-bottom-navigation shift fixed>
         <v-btn to="/">
          <span>Home</span>
          <v-icon>mdi-cards-heart</v-icon>
        </v-btn>

        <v-btn to="/quiz">
          <span>Quiz</span>
          <v-icon>mdi-head-question-outline</v-icon>
        </v-btn>

        <v-btn to="/rank">
          <span>Rank</span>
          <v-icon>mdi-seal</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
    <v-dialog v-model="dialog.show" persistent>
      <v-card>
        <v-card-title class="headline">{{dialog.title}}</v-card-title>
        <v-card-text>{{dialog.text}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog.show = false">닫기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([ 'loading', 'dialog' ])
  },
  methods: {
    ...mapActions({
      afterAppLoaded: 'afterAppLoaded'
    })
  },
  async mounted() {
    const self = this;
    this.$nextTick(function () {
      self.afterAppLoaded();
    });
  }
}
</script>

<style>
figure a img {
  width: 200px;
  height: 200px;
}
.card {
  margin-bottom: 20px;
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
.page {
  padding: 20px;
}
.content {
  background-color: #eeeeee;
}
</style>
