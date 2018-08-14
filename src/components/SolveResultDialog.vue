
<template>
  <v-dialog 
    v-model="isShow">
    호옹이
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
    console.log('solve-result');
  }
}
</script>

<style lang="css">
.v-dialog.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>