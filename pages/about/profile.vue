<template>
  <div class="about-page about-profile">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="about-banner"></div>
      <div class="about-content">
        <div class="profile-box">
          <div class="about-title-box">
            <h2 class="about-title-cn">{{ titleCn }}</h2>
            <h2 class="about-title-en">{{ titleEn }}</h2>
          </div>
          <ul class="profile-txt-box">
            <li class="profile-txt">和元达信息科技有限公司（简称“和元达科技”）成立于2012年4月，于2014年5月入驻中大科技园，注册资金5000万。</li>
            <li class="profile-txt">
              和元达科技是一家以“大数据和互联网+”为发展方向，通过技术创新持续为客户创造价值的高新企业。公司业务涉及多个领域和行业板块，目前主要聚焦在电信、金融、医疗、环保、电商、交通等行业，业务以大数据分析处理、人工智能、大数据价值变现、精准营销为主。
            </li>
            <li class="profile-txt">
              公司已取得了高新技术企业、双软企业CMMI3、信息系统集成及服务4级服务资格、ISCCC信息安全服务二级认证、ISO9001、ISO27001、ISO14001、企业信用AAA等级、广州工商局重信用企业等资质或认证。
            </li>
            <li class="profile-txt">公司以大数据价值变现和人工智能作为战略发展方向，我们期待通过精确的大数据能力快速推动社会进步。</li>
          </ul>
        </div>
        <div class="development-box">
          <div class="about-title-box">
            <h2 class="about-title-cn">发展历程</h2>
            <h2 class="about-title-en">History of Development</h2>
          </div>
          <ul class="development-ul">
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon01.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2017</dt>
                <dd class="d-txt">
                  <span class="month">1月</span>
                  注册资金增加至5000万
                </dd>
                <dd class="d-txt">
                  <span class="month">5月</span>
                  公司更名为“和元达信息科技有限公司”
                </dd>
              </dl>
            </li>
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon02.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2016</dt>
                <dd class="d-txt">
                  <span class="month">3月</span>
                  取得信息系统集成服务四级认证
                </dd>
                <dd class="d-txt">
                  <span class="month">12月</span>
                  加入广东省大数据协会
                </dd>
              </dl>
            </li>
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon03.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2015</dt>
                <dd class="d-txt">
                  <span class="month">1月</span>
                  通过ISO27001信息安全管理体系认证
                </dd>
                <dd class="d-txt">
                  <span class="month">4月</span>
                  通过CMMI3认证
                </dd>
                <dd class="d-txt">
                  <span class="month">10月</span>
                  通过高新技术企业认证
                </dd>
              </dl>
            </li>
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon04.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2014</dt>
                <dd class="d-txt">
                  <span class="month">7月</span>
                  公司规模扩大并搬迁到中山大学科技园
                </dd>
                <dd class="d-txt">
                  <span class="month">8月</span>
                  获取“双软”认证
                </dd>
              </dl>
            </li>
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon05.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2013</dt>
                <dd class="d-txt">
                  <span class="month">5月</span>
                  通过ISO9001质量管理体系认证
                </dd>
              </dl>
            </li>
            <li class="development-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/icon06.png" alt="" /></div>
              <dl class="detail-box">
                <dt class="year">2012</dt>
                <dd class="d-txt">
                  <span class="month">4月</span>
                  “广州和元达信息科技有限公司”成立
                </dd>
              </dl>
            </li>
          </ul>
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
          // name: 'about1',
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
        index: 'profile',
        show: false,
        // banner标题
        bannerTitleCn: '精准，轻松致胜',
        bannerTitleEn: 'Accuracy, Easy Business.',
        // 正文标题
        titleCn: '公司简介',
        titleEn: 'Company Profile'
      };
    },
  };
</script>

<style></style>
