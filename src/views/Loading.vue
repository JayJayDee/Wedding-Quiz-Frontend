
<template>
  <div id="popup-loading" v-if="isLoading">
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

<style>
#popup-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: 000000;
  z-index: 999;
}
</style>
