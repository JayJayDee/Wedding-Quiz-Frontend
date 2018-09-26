<template>
  <div class="background-home">
    <v-container grid-list-md class="pa-0">
      <v-card 
        flat="true"
        color="transparent">
        <v-card-media
          :src="require('../assets/home/header.png')"
          height="150px"></v-card-media>
        <img :src="require('../assets/home/welcome-panel.png')" style="width: 100%;" />
        <h3 class="headline mb-0 typo">우리, 결혼합니다.</h3>
        <p></p>
        <p class="typo">절대로 결혼은 안 하겠다던</p>
        <p class="typo">두 사람이 만나</p>
        <p class="typo">3년의 연애 끝에</p>
        <p class="typo">결국 결혼합니다.</p>
      </v-card>
    </v-container>
    <v-container grid-list-md>
      <v-flex xs12>
        <v-card
          color="transparent">
          <v-card-text class="margin-section">
            
          </v-card-text>

          <img :src="require('../assets/home/top-seperator.png')" style="width: 100%;" />
          <!-- <hr /> -->
          <v-card-text>
            <p class="typo t2">이 슬 . 정진동</p>
            <p class="typo">2018.10.27 토요일 오전 11시</p>
            <p class="typo">밀리토피아 호텔</p>
            <p class="typo">2F 아이리스홀</p>
          </v-card-text>

          <img :src="require('../assets/home/middle-seperator.png')" />        
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
            <br />
            <br />
            <img :src="require('../assets/home/middle-seperator-2.png')" />
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="margin-section" xs12>
        <v-card
          color="transparent">
          <v-card-text>
            <h3 class="headline mb-0 typo">결혼 사진첩</h3>
            <p></p>
            <img :src="require('../assets/home/photo-header.png')" style="width:100%;" />
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

      <v-flex class="margin-section" xs12>
        <v-card
          color="transparent">
          <v-card-text>
            <h3 class="headline mb-0 typo">웨딩 퀴즈</h3>
            <p></p>
            <p class="typo">두 사람의 이야기를 들려드립니다.</p>
            <p class="typo">쉽고 간단힌 퀴즈로 신랑 신부를 알아보세요.</p>
            <p class="typo">퀴즈의 승리자에게는 소정의 경품이 준비되어 있습니다.</p>            
            <v-btn color="default" to="/quiz">퀴즈 풀러 가기</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-container>
  </div>
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
        src: require('../assets/gallery/0001.jpg'),
        thumbnail: require('../assets/gallery/0001_thumb.jpg'),
        w: 1200,
        h: 1200
      },
      {
        src: require('../assets/gallery/0002.jpg'),
        thumbnail: require('../assets/gallery/0002_thumb.jpg'),
        w: 1200,
        h: 1200
      },
      {
        src: require('../assets/gallery/0003.jpg'),
        thumbnail: require('../assets/gallery/0003_thumb.jpg'),
        w: 1184,
        h: 1184 
      },
      {
        src: require('../assets/gallery/0004.jpg'),
        thumbnail: require('../assets/gallery/0004_thumb.jpg'),
        w: 1200,
        h: 1200
      },
      {
        src: require('../assets/gallery/0005.jpg'),
        thumbnail: require('../assets/gallery/0005_thumb.jpg'),
        w: 1200,
        h: 1200
      },
      {
        src: require('../assets/gallery/0006.jpg'),
        thumbnail: require('../assets/gallery/0006_thumb.jpg'),
        w: 1200,
        h: 1200
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
  color: #372b05;
}
.typo.t2 {
  font-size: 12pt;
  font-weight: bold;
}
h3.typo {
  font-family: 'Nanum Myeongjo' !important;
  color: #372b05;
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
.background-home {
  background-color: #fff8e5;
}
</style>