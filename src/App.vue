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
.page {
  padding: 15px;
}
.content {
  background-color: #dddddd;
}
</style>
