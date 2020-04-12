<template>
  <v-dialog v-model="dialog.simple.show" persistent>
    <v-card>
      <v-card-title class="headline">{{dialog.simple.title}}</v-card-title>
      <v-card-text>{{dialog.simple.text}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="hideSimpleDialog">닫기</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>  
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState([ 'dialog' ])
  },
  methods: {
    ...mapActions([ 'hideSimpleDialog' ])
  }
}
</script>