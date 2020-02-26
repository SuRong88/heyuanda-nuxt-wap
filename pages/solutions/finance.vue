<!-- 金融行业解决方案 -->
<template>
    <div class="solution-page solution-page01 solution-page10">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="solution-banner flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <nuxt-link to="/solutions" tag="button" class="btn-back-list">
                    <img class="icon-img" src="@/assets/images/icons/back-icon.png" alt="" />
                    返回列表
                </nuxt-link>
                <section class="sec01">
                    <h2 class="con-tit">方案概述</h2>
                    <p class="con-txt">
                        结合虚拟化及电子化交易将成为大数据时代金融行业发展的趋势特征，基于和元达大数据分析平台，充分整合用户行为数据与业务数据，通过对用户网站浏览行为、APP使用行为、小程序使用行为以及用户的基础通信行为进行综合分析，助力企业培育自身的交叉销售、投资管理市场份额及能力等信息核心竞争力。
                    </p>
                    <img class="con-img img01" src="@/assets/images/rest/img10.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">应用价值</h2>
                    <no-ssr>
                        <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon23.png" alt="" /></div>
                                        <p class="item-tit">信用卡潜在用户识别</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        基于客户身份特征、消费行为、位置信息、社交活动等核心大数据，有针对的清晰描绘出客户全息精准画像，以此为基础识别出有信用卡需求、有还款能力的用户，实现精准营销，提升投产比。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon24.png" alt="" /></div>
                                        <p class="item-tit">风险管控</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        通过整合持卡人基本信息、卡基本信息、交易历史、客户历史行为模式、正在发生行为模式(如转账)等，利用和远达智能规则识别进行实时的交易反欺诈分析，有效及时的识别出风险行为。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon25.png" alt="" /></div>
                                        <p class="item-tit">市场和渠道分析优化</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        通过融合用户的基础信息数据与行为数据，使得银行可以监控不同市场推广渠道尤其是网络渠道推广的质量，从而进行合作渠道的调整和优化。同时，也可以分析哪些渠道更适合推广哪类银行产品或者服务，从而进行渠道推广策略的优化。
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" id="swiperP" slot="pagination"></div>
                        </swiper>
                    </no-ssr>
                </section>
                <section class="sec03">
                    <h2 class="con-tit">方案优势</h2>
                    <ul class="mul-box clearfix">
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon26.png" alt="" />
                            <p class="item-txt">
                                深度融合多方数据，
                                <br />
                                挖掘数据价值
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon27.png" alt="" />
                            <p class="item-txt">
                                客户画像，助力精准
                                <br />
                                营销与运营
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon28.png" alt="" />
                            <p class="item-txt">
                                掌握行为数据，完善
                                <br />
                                风险质量
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon29.png" alt="" />
                            <p class="item-txt">
                                精准全面分析，提升
                                <br />
                                用户体检
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
    layout: function(context) {
        return 'default02';
    },
    head() {
        return {
            title: this.SEOInfo.seo_title,
            meta: [
                {
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
        };
    },
    created() {
        let seoKey = this.$route.path;
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    // name: 'solutions8',
                    name: seoKey
                })
            ],
            [
                res => {
                    console.log('seo');
                    console.log(res.data);
                    this.SEOInfo = res.data;
                }
            ]
        );
    },
    mounted() {},
    data() {
        return {
            SEOInfo: {},
            show: false,
            bannerTitle: '金融行业解决方案',
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
