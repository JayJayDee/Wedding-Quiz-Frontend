<template>
  <v-container class="page">
    <Welcome />
    <div style="height: 20px"></div>

    <LoadingCard
      v-if="loading === true" />
    <SignUp
      v-if="member === null && loading === false" />
    <MyInfoCard
      v-if="member !== null && loading === false" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import Welcome from '@/components/Welcome.vue';
import SignUp from '@/components/SignUp.vue';
import MyInfoCard from '@/components/MyInfoCard.vue';
import LoadingCard from '@/components/LoadingCard.vue';

export default {
  name: 'Home',
  components: {
    Welcome,
    SignUp,
    MyInfoCard,
    LoadingCard
  },
  computed: {
    ...mapState([ 'member', 'loading' ])
  }
}
</script>
