<!-- 大数据解决方案 -->
<template>
    <div class="solution-page solution-page01">
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
                        通过和元达大数据平台所具备的高性能大数据计算能力，丰富统计、 分析、挖掘模型功能，为行业全流程、全周期的生产运营活动提供一
                        个低成本、高性能、多模式的商业智能平台工具支持。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/solve/img01.jpg" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">应用价值</h2>
                    <no-ssr>
                        <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/solution/solve/icon01.png" alt="" /></div>
                                        <p class="item-tit">企业级的大数据平台</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        解决竖井式的大数据建设模式带来的重复存储、重复计算、数据不一致等一系列问题，实现资源的集中管控，资源在租户、应用之间统一调配，有效提升资源的
                                        利用率。提供企业级安全管理，有效防止数据信息泄露，保障数据信息的安全。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/solution/solve/icon02.png" alt="" /></div>
                                        <p class="item-tit">高效的数据资产管理</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        通过多种方式进行数据资产的管理，比如数据共享、数据发布、数据订阅、数据推送、以及产生的相应数据服务。提供统一的访问驱动，无须改变用户编码习惯,
                                        采用驱动实现数据的读取，保证数据的安全性。通过数据访问方式的限制，实现 了数据主权和数据分析的分离。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/solution/solve/icon03.png" alt="" /></div>
                                        <p class="item-tit">高效的数据资产管理</p>
                                    </div>
                                    <div class="item-b item-txt">通过大数据平台可以开发各类应用，如大数据查询类应用、大数据分析类应用、 大数据挖掘类应用、数据采集类应用等。</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-pagination" id="swiperP" slot="pagination"></div>
                        </swiper>
                    </no-ssr>
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
                    // name: 'solutions1',
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
            bannerTitle: '大数据解决方案',
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
