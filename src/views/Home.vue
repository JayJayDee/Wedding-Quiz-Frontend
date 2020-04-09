<template>
  <v-container class="page">
    <Welcome />
    <div style="height: 20px"></div>
    <SignUp />
  </v-container>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
import SignUp from '@/components/SignUp.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    SignUp
  }
}
</script>
