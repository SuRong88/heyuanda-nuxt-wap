<template>
  <div class="solution-page solution-index">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="solution-banner flex flex-center">
        <h2 class="banner-title">{{ bannerTitle }}</h2>
      </div>
      <div class="content">
        <ul class="list-box">
          <li v-if="idx<6||showAll" v-for="(item, idx) in list" :key="idx" class="list-item">
            <div class="item-img"><img class="img" :src="item.imgPath" alt="" /></div>
            <div class="item-desc-box">
              <h4 class="item-tit">{{ item.title }}</h4>
              <p class="item-desc">{{ item.desc }}</p>
            </div>
            <nuxt-link tag="button" :to="item.link" class="item-btn">
              查看详情
              <img class="arrow-icon" src="@/assets/images/solution/list/arrow-icon.png" alt="" />
            </nuxt-link>
          </li>
        </ul>
        <button v-if="!showAll" @click="loadMore" class="loadmore-btn">
          加载更多
        </button>
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
         // name: 'solutions9',
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
        showAll: false,
        show: false,
        bannerTitle: '解决方案',
        list: [{
            imgPath: require('@/assets/images/solution/list/img01.jpg'),
            title: '大数据解决方案',
            desc: '通过和元达大数据平台所具备的高性能大数据计算能力，丰富统计、 分析、挖掘模型功能，为行业全…',
            link: '/solutions/solve'
          },
          {
            imgPath: require('@/assets/images/solution/list/img02.jpg'),
            title: '数据治理解决方案',
            desc: '通过统一的数据标准制定和发布，结合制度约束、系统控制等手段 实现企业级大数据平台数据的完整…',
            link: '/solutions/govern'
          },
          {
            imgPath: require('@/assets/images/solution/list/img03.jpg'),
            title: '智能运维解决方案',
            desc: '基于机器学习的异常发现、关联定位和分析处理，针对业务系统所有层级的日志数据，提供数据搜索、…',
            link: '/solutions/operation'
          },
          {
            imgPath: require('@/assets/images/solution/list/img04.jpg'),
            title: '大数据平台数据保护解决方案',
            desc: '针对大数据平台提供高效、稳定、快速的备份恢复解决方案',
            link: '/solutions/protect'
          },
          {
            imgPath: require('@/assets/images/solution/list/img05.jpg'),
            title: '动态安全防御解决方案',
            desc: '通过动态变换、动态感知、动态响应和动态智能等创新技术实现了从 用户端到服务器端的全方位“主动…',
            link: '/solutions/security'
          },
          {
            imgPath: require('@/assets/images/solution/list/img06.jpg'),
            title: '云备份解决方案',
            desc: '通过集群应用、集中管理、多租户、资源按需动态分配等方式提供安 全可靠的云备份服务',
            link: '/solutions/cloud'
          },
          {
            imgPath: require('@/assets/images/solution/list/img07.jpg'),
            title: '通信行业解决方案',
            desc: '随着业务的快速发展，业务支撑系统规模的不断扩大，承载业务种类繁杂，业务量巨大。为了确保…',
            link: '/solutions/communication'
          },
          {
            imgPath: require('@/assets/images/solution/list/img08.jpg'),
            title: '金融行业解决方案',
            desc: '结合虚拟化及电子化交易将成为大数据时代金融行业发展的趋势特征，基于和元达大数据分析平台，充…',
            link: '/solutions/finance'
          },
          {
            imgPath: require('@/assets/images/solution/list/img09.jpg'),
            title: '交通出行解决方案',
            desc: '基于用户在运营商侧的高质、实时行为与业务数据，运用和元达大数据分析平台，充分糅合用户通信、…',
            link: '/solutions/traffic'
          },
          {
            imgPath: require('@/assets/images/solution/list/img10.jpg'),
            title: '医疗',
            desc: '基于和元达大数据分析平台，通过建立信息化、标准化、智能化的决策支持应用系统，方便医疗管理机…',
            link: '/solutions/medical'
          },
          {
            imgPath: require('@/assets/images/solution/list/img11.jpg'),
            title: '新农业',
            desc: '和元达与中国移动通信集团广东有限公司、爱立信、IBM等合作伙伴共同打造农产品安全信任链。广东…',
            link: '/solutions/newAgriculture'
          },
          {
            imgPath: require('@/assets/images/solution/list/img12.jpg'),
            title: '新零售',
            desc: '基于和元达大数据分析平台，通过对业务数据进行统计分析以发掘数据内在价值，优化业务环节，提升…',
            link: '/solutions/retail'
          }
        ]
      };
    },
    methods: {
      loadMore() {
        this.showAll = true
      }
    }
  };
</script>

<style></style>
