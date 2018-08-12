
<template>
  <v-btn class="choice-btn">
    {{ btnContent }} 
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    choice_no: Number,
    content: String
  }
})
export default class QuizChoiceBtn extends Vue {

  private choice_no: number;
  private content: string;

  private get btnContent(): string {
    if (!this.content) return '';
    return this.content;
  }

}
</script>

<style scoped>
.choice-btn {
  padding: 10px;
  font-size: 12pt;
}
</style>