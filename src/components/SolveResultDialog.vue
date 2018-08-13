
<template>
  <v-dialog 
    class="transparent"
    v-model="isShow" 
    persistent>
    <v-progress-circular
      indeterminate
      color="white">
    </v-progress-circular>
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
export default class SolveResultDialog extends Vue {

  private isShow: boolean;

  public mounted() {
    console.log('loading-mounted!');
  }
}
</script>

<style lang="css" scoped>
v-dialog.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>