
<template>
  <v-btn 
    :block="true"
    class="choice-btn" 
    @click="onChoiceClicked">
    <p>{{ btnContent }}</p>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    content: String,
    choice_no: Number
  }
})
export default class QuizChoiceBtn extends Vue {

  private choice_no: number;
  private content: string;

  private get btnContent(): string {
    if (!this.content) return '';
    return this.content;
  }

  private onChoiceClicked() {
    let choiceNo: number = this.choice_no;
    this.$emit('choice_clicked', choiceNo);
  }
}
</script>

<style scoped>
.choice-btn {
  margin-top: 10px;
  padding-top: 7px;
  padding-bottom: 10px;
  font-size: 12pt;
}
</style>