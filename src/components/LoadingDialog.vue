
<template>
  <v-dialog 
    v-model="isLoading" 
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
    isLoading: Boolean
  }
})
export default class LoadingDialog extends Vue {

  public mounted() {
    console.log('loading-mounted!');
  }
}
</script>
