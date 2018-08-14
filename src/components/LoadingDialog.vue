
<template>
  <v-dialog 
    content-class="transparent"
    v-model="isLoading" 
    persistent>
    <v-progress-circular
      indeterminate
      size="80"
      color="white">
    </v-progress-circular>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    isLoading: Boolean
  }
})
export default class LoadingDialog extends Vue {

  private isLoading: boolean;

  public mounted() {
    console.log('loading-mounted!');
  }
}
</script>

<style scoped>
.v-dialog.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>