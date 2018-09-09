<template>
  <v-container grid-list-md>
    <v-flex xs12>
      <v-card
        color="transparent">
        <v-card-media
          :src="require('../assets/main_top_bg.jpg')"
          height="200px"></v-card-media>
        <v-card-text class="margin-section">
          <h3 class="headline mb-0 typo">우리, 결혼합니다.</h3>
          <p></p>
          <p class="typo">서울에서 온 미대생. 대구에서 온 공대생.</p>
          <p class="typo">달라도 너무 다른 우리.</p>
          <p class="typo">이제, 함께 하려 합니다.</p>
        </v-card-text>
        <hr />
        <v-card-text>
          <p class="typo">이 슬 . 정진동</p>
          <p class="typo">2018.10.27 SAT 11:00 AM</p>
          <p class="typo">복정 밀리토피아 호텔</p>
          <p class="typo">2F 아이리스홀</p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="margin-section" xs12>
      <v-card
        color="transparent">
        <v-card-text>
          <h3 class="headline mb-0 typo">초대합니다</h3>
          <p></p>
          <p class="typo">
            헤어짐의 아쉬움이<br />
            두사람의 발을 묶던 어스름을<br />
            수도 없이 보내왔습니다.
          </p>
          <p class="typo">
            이제 다시는 헤어지지 않으려고 합니다.<br />
            행복하게 살겠습니다.
          </p>
          <p class="typo">
            부디 와 주셔서<br />
            두 사람의 새로운 출발을<br />
            축하해 주시면 감사하겠습니다.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="margin-section" xs12>
      <v-card
        color="transparent">
        <v-card-text>
          <h3 class="headline mb-0 typo">사진 갤러리 영역</h3>
          <vue-picture-swipe :items="images"></vue-picture-swipe>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="margin-section" xs12>
      <v-card
        color="transparent">
        <v-card-text>
          <h3 class="headline mb-0 typo">연락처 영역</h3>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex class="margin-section" xs12>
      <v-card
        color="transparent">
        <v-card-text>
          <h3 class="headline mb-0 typo">일시,장소 가이드 영역</h3>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 class="row margin-section">
      <v-card>
        <v-card-title>
          <h3>퀴즈를 풀어 주세요!</h3>
        </v-card-title>
        <v-card-text>
          <p class="text-sm-left">
            두 사람에 대한 퀴즈가 준비되어 있습니다. 퀴즈의 성적이 좋은 상위 10명에게 상품을 증정합니다!
          </p>
          <v-btn color="info" to="/quiz">퀴즈 풀러 가기!</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VuePictureSwipe,{ GalleryItem } from 'vue-picture-swipe';

@Component({
  components: {
    VuePictureSwipe
  }
})
export default class Home extends Vue {

  private get images(): GalleryItem[] {
    return [
      {
        src: require('../assets/gallery/001_orig.jpg'),
        thumbnail: require('../assets/gallery/001_thumb.jpg')
      }
    ];
  }
}
</script>

<style scoped>
@import url(http://fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
.row {
  margin-top: 20px;
}
.v-card.transparent {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.typo {
  font-family: 'Nanum Myeongjo';
}
h3.typo {
  font-family: 'Nanum Myeongjo' !important;
}
hr {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  border: solid 0.3px;
  border-color: #aaaaaa;
  margin-bottom: 20px;
  margin-top: 10px;
}
.margin-section {
  margin-top: 50px;
}
</style>