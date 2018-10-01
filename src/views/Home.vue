<template>
  <v-container grid-list-md class="pa-0 background-home">
    <v-layout grid-list-md class="pa-0" column="1">
      <v-card 
        color="transparent">
        <div class="header-image"></div>
        <div class="title-image"></div>
        <h3 class="headline mb-0 typo">우리, 결혼합니다.</h3>
        <p></p>
        <p class="typo">절대로 결혼은 안 하겠다던</p>
        <p class="typo">두 사람이 만나</p>
        <p class="typo">3년의 연애 끝에</p>
        <p class="typo">결국 결혼합니다.</p>
      </v-card>
    </v-layout>
    <v-layout grid-list-md column="1">
      <v-flex xs12>
        <v-card
          color="transparent">

          <div class="top-separator"></div>

          <v-card-text>
            <p class="typo t2">이 슬 . 정진동</p>
            <p class="typo">2018.10.27 토요일 오전 11시</p>
            <p class="typo">밀리토피아 호텔</p>
            <p class="typo">2F 아이리스홀</p>
          </v-card-text>

          <img :src="require('../assets/home/middle-seperator.png')" class="middle-seperator" />
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
              두사람의 발을 잡던 어스름을<br />
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
            <img :src="require('../assets/home/middle-seperator-2.png')" class="middle-seperator-2" />
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="margin-section" xs12>
        <v-card
          color="transparent">
          <v-card-text>
            <h3 class="headline mb-0 typo">결혼 사진첩</h3>
            <p></p>
            <div class="gallery-header"></div>
            <vue-picture-swipe :items="images"></vue-picture-swipe>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="margin-section" xs12>
        <v-card
          color="transparent">
          <v-card-text>
            <h3 class="headline mb-0 typo">연락하기</h3>
            <p></p>
            <p class="typo">
                신랑, 신부 및 양가 어르신들께<br />축하 인사를 전해 보세요.
            </p>
            <v-layout>
              <v-flex xs6 class="contact-row">
                <p class="typo"><b>신랑</b> 정진동</p>
                <a href="tel:010-5460-2379" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-5460-2379"><img :src="require('../assets/sms.png')" /></a>
              </v-flex>
              <v-flex xs6 class="contact-row">
                <p class="typo"><b>신부</b> 이 슬</p>
                <a href="tel:010-3104-9922" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-3104-9922"><img :src="require('../assets/sms.png')" /></a>
              </v-flex>
            </v-layout>

            <!-- <v-layout row wrap>
              <v-flex xs6>
                <p class="typo"><b>신랑측 혼주</b></p>
              </v-flex>
              <v-flex xs6>
                <p class="typo"><b>신부측 혼주</b></p>
              </v-flex>
            </v-layout> -->

            <v-layout row wrap>
              <v-flex xs6 class="contact-row">
                <p class="typo"><b>아버지</b> 정우현</p>
                <a href="tel:010-4532-2378" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-4532-2378"><img :src="require('../assets/sms.png')" /></a>
                <p class="typo"><b>어머니</b> 전정숙</p>
                <a href="tel:010-9540-2378" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-9540-2378"><img :src="require('../assets/sms.png')" /></a>
              </v-flex>
              <v-flex xs6 class="contact-row">
                <p class="typo"><b>아버지</b> 이충훈</p>
                <a href="tel:010-6388-7289" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-6388-7289"><img :src="require('../assets/sms.png')" /></a>
                <p class="typo"><b>어머니</b> 전미선</p>
                <a href="tel:010-6288-9922" class="phone-icon-cell"><img :src="require('../assets/call.png')" /></a> 
                <a href="sms:010-6288-9922"><img :src="require('../assets/sms.png')" /></a>
              </v-flex>
            </v-layout>
            <!-- <dl>
              <dt>
                <p class="typo">신부 이 슬</p>
              </dt>
              <dd>
                <a href="tel:010-3104-9922"><img :src="require('../assets/call.png')" /></a>
              </dd>
              <dd>
                <a href="sms:010-3104-9922"><img :src="require('../assets/sms.png')" /></a>
              </dd>
            </dl>
            <dl>
              <dt>
                <p class="typo">신랑 정진동</p>
              </dt>
              <dd>
                <a href="tel:010-5460-2379"><img :src="require('../assets/call.png')" /></a>
              </dd>
              <dd>
                <a href="sms:010-5460-2379"><img :src="require('../assets/sms.png')" /></a>
              </dd>
            </dl> -->
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex class="margin-section" xs12>
        <v-card
          color="transparent">
          <v-card-text>
            <h3 class="headline mb-0 typo">오시는 길</h3>
            <p></p>
            <img :src="require('../assets/map.png')" class="map-size" />
          </v-card-text>
          <v-card-text>
            <p class="typo">
              경기 성남시 수정구 창곡동 359-3<br />
              밀리토피아 호텔 웨딩센터
            </p>
            <p class="typo">
              복정역 2번 출구에서 셔틀버스 운행<br />
              10시부터 15분 간격
            </p>
          </v-card-text> 
          <v-card-text>
            <a :href="daumMapLink" class="map-link">
              <img :src="require('../assets/daum-map-icon.png')" class="map-icon" />
              <p class="typo">다음 지도</p>
            </a>
            <a :href="naverMapLink" class="map-link">
              <img :src="require('../assets/naver-map-icon.png')" class="map-icon" />
              <p class="typo">네이버 지도</p>
            </a>
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
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VuePictureSwipe,{ GalleryItem } from 'vue-picture-swipe';

import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

interface MapPos {
  lat: number;
  lng: number;
}

library.add(faCopy);

@Component({
  components: {
    VuePictureSwipe,
    FontAwesomeIcon
  }
})
export default class Home extends Vue {

  private gps: MapPos = {
    lat: 37.4680439,
    lng: 127.1440084
  };

  private location: string = '밀리토피아 웨딩홀';

  private get naverMapLink(): string {
    return `navermaps://?menu=location&pinType=place&lat=${this.gps.lat}&lng=${this.gps.lng}&title=${encodeURIComponent(this.location)}`;
  }

  private get daumMapLink(): string {
    return `daummaps://search?q=${encodeURIComponent(this.location)}&p=${this.gps.lat},${this.gps.lng}`;
  }

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
.middle-seperator {
  width: 120px;
  height: 66px;
}
.middle-seperator-2 {
  width: 120px;
  height: 74px;
}
.margin-section {
  margin-top: 50px;
}
.background-home {
  background-color: #fff8e5;
}
.header-image {
  background: url('../assets/home/header.png') no-repeat center;
  height: 145px;
}
.title-image {
  background: url('../assets/home/welcome-panel.png') no-repeat center;
  background-size: contain;
  width: 100%;
  height: 270px;
}
.top-separator {
  background: url('../assets/home/top-seperator.png') no-repeat center;
  background-size: contain;
  width: 100%;
  height: 240px;
}
.gallery-header {
  background: url('../assets/home/photo-header.png') no-repeat top;
  background-size: contain;
  width: 100%;
  height: 500px;
}
.map-size {
  width: 100%;
  max-width: 500px;
}
.map-icon {
  width: 50px;
  height: 50px;
}
.map-link {
  text-decoration: none;
}
.copy-icon-color {
  color: #372b05;
}
.phone-icon-cell {
  margin-right: 20px;
}
p.typo {
  font-size: 11pt;
}
.contact-row > p {
  margin-bottom: 4px;
}
</style>