<template>
  <v-container class="page">
    <WelcomeCard />

    <LoadingCard
      v-if="loading === true" />
    <SignUpCard
      v-if="member === null && loading === false" />
    <MyInfoCard
      v-if="member !== null && loading === false" />
    <DebugLogoutCard
      v-if="member !== null && loading === false" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

import WelcomeCard from '@/components/home-cards/WelcomeCard.vue';
import SignUpCard from '@/components/home-cards/SignUpCard.vue';
import MyInfoCard from '@/components/home-cards/MyInfoCard.vue';
import DebugLogoutCard from '@/components/home-cards/DebugLogoutCard.vue';

import LoadingCard from '@/components/LoadingCard.vue';

export default {
  name: 'Home',
  components: {
    WelcomeCard,
    SignUpCard,
    MyInfoCard,
    LoadingCard,
    DebugLogoutCard
  },
  computed: {
    ...mapState([ 'member', 'loading' ])
  }
}
</script>
