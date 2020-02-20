<template>
  <div class="about-page about-cooperation">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="about-banner"></div>
      <div class="about-content">
        <div class="about-title-box">
          <h2 class="about-title-cn">{{ titleCn }}</h2>
          <h2 class="about-title-en">{{ titleEn }}</h2>
        </div>
        <div class="cooperation-box">
          <p class="cooperation-desc">
            公司已与多家国内外著名企业、科研和教育机构建立了良好的战略合作关系，其中包括：中山大学、中国移动、中国电信、中国联通、Symantec、IBM、HP、爱立信、东软集团、Actifio、Cloudera、微软、Vmware、腾讯、安信证券等。
          </p>
          <img class="cooperation-img" src="@/assets/images/about/cooperation.jpg" alt="" />
        </div>
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
          // name: 'about6',
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
    data() {
      return {
        SEOInfo: {},
        // banner导航下标
        index: 'cooperation',
        show: false,
        // banner标题
        bannerTitleCn: '精准，轻松致胜',
        bannerTitleEn: 'Accuracy, Easy Business.',
        // 正文标题
        titleCn: '合作伙伴',
        titleEn: 'Cooperation'
      };
    }

  };
</script>

<style></style>
