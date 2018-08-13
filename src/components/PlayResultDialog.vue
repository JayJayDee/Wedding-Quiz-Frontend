
<template>
  <v-dialog 
    v-model="isShow" 
    transition="dialog-bottom-transition"
    fullscreen hide-overlay persistent>
    
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    isShow: Boolean
  }
})
export default class PlayResultDialog extends Vue {

  private isShow: boolean;

  public mounted() {
    console.log('play-result-dialog');
  }
}
</script>
