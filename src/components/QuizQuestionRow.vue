
<template>
  <div> 
    <div v-if="type === 'TEXT'">
      <p class="text-sm-left">{{ innerContent }}</p>
    </div>
    <div v-if="type === 'IMAGE'">
      <v-img 
        :src="innerContent"
        aspect-radio="1"
        class="grey lighten-2 question-image">
        <v-layout
          slot="placeholder" fill-height
          align-center justify-center ma-0>
          <v-progress-circular 
            indeterminate 
            size="50"
            color="grey lighten-5" />
        </v-layout>
      </v-img>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  props: {
    question_no: Number,
    type: String,
    content: String
  }
})
export default class QuizQuestionRow extends Vue {

  private content: string;
  private type: string;

  public mounted() {
    
  }

  public get innerContent(): string {
    if (!this.content) return ''
    return this.content;
  }
}
</script>

<style scoped>
.question-image {
  margin: 10px;
}
</style>