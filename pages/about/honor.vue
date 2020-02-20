<template>
  <div class="about-page about-honor">
    <v-nav :show="show"></v-nav>
    <main>
      <div class="about-banner"></div>
      <div class="about-content">
        <div class="about-title-box">
          <h2 class="about-title-cn">{{ titleCn }}</h2>
          <h2 class="about-title-en">{{ titleEn }}</h2>
        </div>
        <div class="honor-box">
          <ul class="honor-ul">
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic01.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">大数据协会会员证书</p>
                <img class="detail-img" src="@/assets/images/about/pic01_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic02.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">高新技术企业证书</p>
                <img class="detail-img" src="@/assets/images/about/pic02_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic03.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">企业信用AAA级证书</p>
                <img class="detail-img" src="@/assets/images/about/pic03_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic04.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">软件产品证书</p>
                <img class="detail-img" src="@/assets/images/about/pic04_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic05.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">软件企业认定证书</p>
                <img class="detail-img" src="@/assets/images/about/pic05_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic06.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">信息系统集成及服务资质证书</p>
                <img class="detail-img" src="@/assets/images/about/pic06_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic07.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">中国通信企业协会会员证书</p>
                <img class="detail-img" src="@/assets/images/about/pic07_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic08.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">营业执照</p>
                <img class="detail-img" src="@/assets/images/about/pic08_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic09.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">CMMI-3认证证书</p>
                <img class="detail-img" src="@/assets/images/about/pic09_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic10.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">ISO9001认证证书</p>
                <img class="detail-img" src="@/assets/images/about/pic10_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic11.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">ISO14001认证证书</p>
                <img class="detail-img" src="@/assets/images/about/pic11_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic12.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">ISO20000认证证书</p>
                <img class="detail-img" src="@/assets/images/about/pic12_img.jpg" alt="" />
              </div>
            </li>
            <li class="honor-li flex">
              <div class="li-icon-box"><img class="li-icon" src="@/assets/images/about/pic12.png" alt="" /></div>
              <div class="detail-box">
                <p class="detail-name">ISO27001认证证书</p>
                <img class="detail-img" src="@/assets/images/about/pic13_img.jpg" alt="" />
              </div>
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
          // name: 'about3',
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
        index: 'honor',
        show: false,
        // banner标题
        bannerTitleCn: '精准，轻松致胜',
        bannerTitleEn: 'Accuracy, Easy Business.',
        // 正文标题
        titleCn: '公司荣誉',
        titleEn: 'Company honor'
      };
    }
  };
</script>

<style></style>
