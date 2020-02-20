<!-- 市场精准调研 -->
<template>
  <div class="case-page case-page01">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="case-banner case-banner01 flex flex-center">
        <h2 class="banner-title">{{ bannerTitle }}</h2>
      </div>
      <div class="content">
        <section class="sec sec01">
          <h2 class="con-tit">
            案例描述
          </h2>
          <p class="txt">
            该市场调研公司，过往依赖线下招募志愿者填写问卷的方式进行市场调研。传统调研方式成本较高、覆盖范围小、回复率低，部分调研涉及的人群过于小众，很难通过线下募集。
          </p>
        </section>
        <section class="sec sec02">
          <h2 class="con-tit">
            客户需求
          </h2>
          <p class="txt">
            降低调研成本，提高调研覆盖范围和精准度，以及提高转化率。
          </p>
        </section>
        <section class="sec sec03">
          <h2 class="con-tit">
            实施目标
          </h2>
          <p class="tar-txt txt-center">
            通过聚客易产品的精准短信，实现以下目标：
          </p>
          <ul class="common-list01">
            <li class="list-item">
              <span class="label">
                1
              </span>
              <p class="item-txt">
                通过运营商大数据，基于客户个人属性（性别、年龄段、职业等），结合客户上网行为（安装和使用app、登陆官网等行为），精准定义人群。
              </p>
            </li>
            <li class="list-item">
              <span class="label">
                2
              </span>
              <p class="item-txt">
                通过运营商通道发送短信，精准触达人群。
              </p>
            </li>
            <li class="list-item">
              <span class="label">
                3
              </span>
              <p class="item-txt">
                数据脱敏加密，保护客户个人隐私。
              </p>
            </li>
          </ul>
        </section>
        <section class="sec sec04">
          <h2 class="con-tit">
            实施成效
          </h2>
          <p class="effect-txt"></p>
          <ul class="common-list02">
            <li class="list-item">
              <img class="item-img" src="@/assets/images/case/img01.jpg" alt="" />
              <p class="item-txt">
                短信点击率14%，成功转化率1.1%。
              </p>
            </li>
            <li class="list-item">
              <img class="item-img" src="@/assets/images/case/img02.jpg" alt="" />
              <p class="item-txt">
                单个成功样本消耗的成本，低于传统调研。
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
          // name: 'cases1',
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
        bannerTitle: '市场精准调研'
      };
    },
    computed: {}
  };
</script>

<style></style>
