<!-- 广告素材及营销漏斗监测 -->
<template>
  <div class="case-page case-page04">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="case-banner case-banner04 flex flex-center">
        <h2 class="banner-title">{{ bannerTitle }}</h2>
      </div>
      <div class="content">
        <section class="sec sec01">
          <h2 class="con-tit">
            案例描述
          </h2>
          <p class="txt">
            某广告监测平台，过往通过虚拟机或SDK获得广告素材，存在素材收集不全，广告曝光、点击、转化数据皆依赖抽样，无法准确量化等问题。
          </p>
        </section>
        <section class="sec sec02">
          <h2 class="con-tit">
            客户需求
          </h2>
          <p class="txt">
            全面收集广告素材，对营销漏斗各个环节进行量化。
          </p>
        </section>
        <section class="sec sec03">
          <h2 class="con-tit">
            实施目标
          </h2>
          <p class="tar-txt">
            基于运营商大数据，对广告素材进行监测。
          </p>
          <img class="img" src="@/assets/images/case/img06.png" alt="" />
        </section>
        <section class="sec sec04">
          <h2 class="con-tit">
            实施成效
          </h2>
          <ul class="common-list02">
            <li class="list-item">
              <img class="item-img" src="@/assets/images/case/img07.jpg" alt="" />
              <p class="item-txt">
                获得广告素材、落地页、转化下载页，并对营销漏斗的各个环节进行量化。便于广告监测平台对全局广告的投放情况进行把控。
              </p>
            </li>
            <li class="list-item">
              <img class="item-img" src="@/assets/images/case/img08.jpg" alt="" />
              <p class="item-txt">
                不需要通过SDK监测便获得全局数据。
              </p>
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
          // name: 'cases4',
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
        bannerTitle: '广告素材及营销漏斗监测'
      };
    },
    computed: {}
  };
</script>

<style></style>
