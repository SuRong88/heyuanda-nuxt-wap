<!-- 新零售 -->
<template>
  <div class="solution-page solution-page01 solution-page12">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="solution-banner flex flex-center">
        <h2 class="banner-title">{{ bannerTitle }}</h2>
      </div>
      <div class="content">
        <section class="sec01">
          <h2 class="con-tit">方案概述</h2>
          <p class="con-txt">
            基于和元达大数据分析平台，通过对业务数据进行统计分析以发掘数据内在价值，优化业务环节，提升客户体验和用户粘度。通过客户价值分析和用户画像，实现多渠道、精准化、深度服务体系。
          </p>
          <img class="con-img img01" src="@/assets/images/rest/img12.png" alt="" />
        </section>
        <section class="sec02">
          <h2 class="con-tit">应用价值</h2>
          <no-ssr>
            <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
              <swiper-slide class="inner-swiper-item inner-swiper-item01">
                <div class="slide-inner">
                  <div class="item-t">
                    <div class="item-icon-box flex flex-center">
                      <img class="item-icon" src="@/assets/images/rest/icon37.png" alt="" />
                    </div>
                    <p class="item-tit">
                      客户体验分析
                    </p>
                  </div>
                  <div class="item-b item-txt">
                    通过商品热度分析、访问时段分析、访问频次分析、访问偏好分析，还原客户体验状态，为优化业务环节，提升客户体验提供数据支撑。
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="inner-swiper-item inner-swiper-item01">
                <div class="slide-inner">
                  <div class="item-t">
                    <div class="item-icon-box flex flex-center">
                      <img class="item-icon" src="@/assets/images/rest/icon38.png" alt="" />
                    </div>
                    <p class="item-tit">
                      客户价值分析（RFM模型）
                    </p>
                  </div>
                  <div class="item-b item-txt">
                    通过对客户最近一次的消费（Recency），消费频率（Frequency），消费金额（Monetary ）的分析建立RFM模型，为用户分群，实现精细化运营。
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="inner-swiper-item inner-swiper-item01">
                <div class="slide-inner">
                  <div class="item-t">
                    <div class="item-icon-box flex flex-center">
                      <img class="item-icon" src="@/assets/images/rest/icon39.png" alt="" />
                    </div>
                    <p class="item-tit">
                      用户画像
                    </p>
                  </div>
                  <div class="item-b item-txt">
                    通过对客户进行多维度的分析，建设用户画像，全面了解客户的基本信息、行为习惯、消费偏好等，为精准营销，推荐系统做决策数据支撑。
                  </div>
                </div>
              </swiper-slide>
              <div class="swiper-pagination" id="swiperP" slot="pagination"></div>
            </swiper>
          </no-ssr>
        </section>
        <section class="sec03">
          <h2 class="con-tit">方案优势</h2>
          <ul class="sec03-ul">
            <li class="sec03-item">
              <img class="item-img" src="@/assets/images/rest/img13.jpg" alt="" />
              <div class="item-b">
                <p class="item-tit">
                  改进客户洞察
                </p>
                <p class="item-txt">
                  利用客户体验分析，能够直观呈现客户体验之旅，从而洞悉客户的整个购物流程并深入分析客户行为背后的原因，力求为客户提供流畅而愉悦的购物体验，打造更为顺畅的客户体验之旅。
                </p>
              </div>
            </li>
            <li class="sec03-item">
              <img class="item-img" src="@/assets/images/rest/img14.jpg" alt="" />
              <div class="item-b">
                <p class="item-tit">
                  精准化营销
                </p>
                <p class="item-txt">
                  通过对客户的全面了解，来进行精准营销活动，在合适的时间给客户推荐其有需求的商品，提升业务量。
                </p>
              </div>
            </li>
            <li class="sec03-item">
              <img class="item-img" src="@/assets/images/rest/img15.jpg" alt="" />
              <div class="item-b">
                <p class="item-tit">
                  个性化推荐
                </p>
                <p class="item-txt">
                  实现客户在浏览、点击、购买等全流程中的个性化推荐。
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import URL from '~/plugins/url';
  import vNav from '@/components/vNav.vue';
  import vFooter from '@/components/vFooter.vue';
  export default {
    components: {
      vNav,
      vFooter
    },
    head() {
      return {
        title: this.SEOInfo.seo_title,
        meta: [{
            hid: 'keywords',
            name: 'keywords',
            content: this.SEOInfo.seo_keyword
          },
          {
            hid: 'description',
            name: 'description',
            content: this.SEOInfo.seo_desc
          }
        ]
      }
    },
    created() {
      let seoKey = this.$route.path;
      this.$admin_base([
        this.$get(URL.getSEOInfo, {
          // name: 'solutions12',
          name: seoKey
        })
      ], [
        (res) => {
          console.log('seo');
          console.log(res.data);
          this.SEOInfo = res.data
        }
      ])
    },
    mounted() {},
    data() {
      return {
        SEOInfo: {},
        show: false,
        bannerTitle: '新零售',
        swiperOption: {
          loop: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: '#swiperP',
            clickable: true
          },
          spaceBetween: 16
          // slidesOffsetAfter :"20",
          // slidesOffsetBefore : -50
        }
      };
    },
    computed: {
      innerSwiper() {
        return this.$refs.innerSwiper.swiper;
      }
    }
  };
</script>

<style></style>
