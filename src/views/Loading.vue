
<template>
  <div v-if="isLoading">
    LOADING
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    isLoading: Boolean
  }
})
export default class Loading extends Vue {

}

</script>
