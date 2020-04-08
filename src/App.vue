<template>
  <!-- <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div> -->
  <v-app>
    <v-content>
      <v-layout>
        <router-view></router-view>
      </v-layout>
      <div style="height: 50px;"></div>
    </v-content>
    <v-footer>
      <v-bottom-navigation shift fixed>
         <v-btn>
          <span>Home</span>
          <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
          <span>Quiz</span>
          <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
          <span>Rank</span>
          <v-icon>mdi-music-note</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>
figure a img {
  width: 200px;
  height: 200px;
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
