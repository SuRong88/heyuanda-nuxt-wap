<template>
  <div class="about-page about-direction">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="about-banner"></div>
      <div class="about-content">
        <div class="about-title-box">
          <h2 class="about-title-cn">{{titleCn}}</h2>
          <h2 class="about-title-en">{{titleEn}}</h2>
        </div>
        <ul class="direction-box">
          <li class="item">
            <h4 class="item-tit">大数据</h4>
            <p class="item-txt">为企业提供一站式全流程完善的大数据解决方案，包括业务咨询、数据中心规划建设、大数据加工处理、数据可视化分析、云备份以及构建、标准化的云平台运维与管理体系。</p>
            <div class="item-img-box">
              <img class="item-img" src="@/assets/images/about/img01.png" alt="" />
            </div>
          </li>
          <li class="item">
            <h4 class="item-tit">互联网+</h4>
            <p class="item-txt">围绕互联网时代的发展，通过创新技术模式，帮助企业进行运营战略的转型升级，满足用户需求的快速迭代，协助用户利用互联网技术使企业稳健、高效发展。</p>
            <div class="item-img-box">
              <img class="item-img" src="@/assets/images/about/img02.png" alt="" />
            </div>
          </li>
          <li class="item">
            <h4 class="item-tit">SaaS服务</h4>
            <p class="item-txt">通过DMP等平台，为广大客户提供企业管理、客户管理和营销管理等一系列基于SaaS服务的解决方案。</p>
            <div class="item-img-box">
              <img class="item-img" src="@/assets/images/about/img03.png" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </main>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import URL from '~/plugins/url';
  import vNav from '@/components/vNav.vue';
  import vAbout from '@/components/aboutNav.vue';
  import vFooter from '@/components/vFooter.vue';
  export default {
    components: {
      vNav,
      vAbout,
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
          // name: 'about2',
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
    mounted() {
      let that = this;
      window.onscroll = function() {
        if (document.documentElement.scrollTop && document.documentElement.scrollTop >= 500) {
          return (that.show = true);
        } else if (window.pageYOffset && window.pageYOffset >= 500) {
          return (that.show = true);
        } else if (document.body.scrollTop && document.body.scrollTop >= 500) {
          return (that.show = true);
        } else {
          return (that.show = false);
        }
      };
      window.onscroll();
    },
    data() {
      return {
        SEOInfo: {},
        // banner导航下标
        index: 'direction',
        show: false,
        // banner标题
        bannerTitleCn: '精准，轻松致胜',
        bannerTitleEn: 'Accuracy, Easy Business.',
        // 正文标题
        titleCn: '业务方向',
        titleEn: 'Business Direction'
      };
    }
  };
</script>

<style></style>
