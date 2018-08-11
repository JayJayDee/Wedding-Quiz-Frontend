
<template>
  <div>
    <h1>QUIZ-SCENE</h1>
    <div v-if="play !== null && play.num_played > 0">
      
    </div>
  </div>
</template>

<script lang="ts"> 
import Vue from 'vue';
import { State } from 'vuex-class';
import { Play } from '@/types';

export default class Quiz extends Vue {
  
  @State('play') play: Play | null;

  public mounted() {
    
  }
}
</script>
