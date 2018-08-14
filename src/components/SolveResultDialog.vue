
<template>
  <v-dialog 
    v-model="isShow"
    transition="dialog-bottom-transition"
    persistent>
    <v-card>
      <v-card-title>
        <h3>정답입니다!</h3>
      </v-card-title>
      <v-card-text>
        호옹이 정답 설명
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat block>확인</v-btn>
      </v-card-actions>
    </v-card>
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