<!-- 佛山大数据分析平台 -->
<template>
  <div class="case-page case-page07">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="case-banner case-banner07 flex flex-center">
        <h2 class="banner-title">{{ bannerTitle }}</h2>
      </div>
      <div class="content">
        <section class="sec sec01">
          <h2 class="con-tit">
            案例描述
          </h2>
          <p class="txt">
            进入DT时代，传统经分系统架构已无法满足拓展数字化服务、数字经济转型以及大数据变现战略布局的需要。面对各类大数据项目需求，急需梳理、整合公司各类数据和渠道资源，做好底层规划，为大数据项目开展提供支撑服务。推动本地大数据项目的拓展,最终实现数据掘金，大数据变现的能力。同时考虑到需要使用更多内部系统和互联网的数据，结合同行经验，急需革新技术架构，引入分布式平台方案，为大数据的分析、报告、接口等提供支撑的能力。
          </p>
        </section>
        <section class="sec sec02">
          <h2 class="con-tit">
            客户需求
          </h2>
          <p class="txt">
            引入Hadoop搭建佛山大数据分析平台，检测各类技术方案的有效性和效率。调研梳理佛山移动分公司所有系统的架构及数据的情况，整合各域数据，结合现状梳理佛山大数据项目开展的各类场景及具体方式，支撑日常大数据项目的数据分析，报告输出等需求。
          </p>
        </section>
        <section class="sec sec03">
          <h2 class="con-tit">
            实施目标
          </h2>
          <p class="tar-txt">
            帮助佛山移动从传统的IT架构向DT架构“云计算+大数据”架构发展。建立Hadoop云平台，为企业提供统一的数据服务。
          </p>
          <img class="img" src="@/assets/images/case/img16.png" alt="" />
        </section>
        <section class="sec sec04">
          <h2 class="con-tit">
            实施成效
          </h2>
          <p class="effect-txt">
            搭建大数据分析平台，提供可视化的统一管理界面。在大数据平台技术架构层面提供数据基础服务能力、系统平台管理能力、数据资产管理能力、应用共享开放能力和数据价值对外变现能力五个部分。
          </p>
          <img class="img" src="@/assets/images/case/img17.png" alt="" />
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
          // name: 'cases7',
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
        bannerTitle: '佛山大数据分析平台'
      };
    },
    computed: {}
  };
</script>

<style></style>
