<!-- 交通出行解决方案 -->
<template>
    <div class="solution-page solution-page01 solution-page11">
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
                        基于用户在运营商侧的高质、实时行为与业务数据，运用和元达大数据分析平台，充分糅合用户通信、行为数据与用户位置数据，无论是在用户出行变化、交通工具使用习惯、人口密度变化、交通疏导数据支撑等都可以实现实时精准的全方面数据支撑，为政府、企业实现资源优化配置打造坚实的数据基石。
                    </p>
                    <img style="width: 19.2rem;display: block;margin: 3rem auto 5rem;" class="con-img img01" src="@/assets/images/rest/img11.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">应用价值</h2>
                    <no-ssr>
                        <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon30.png" alt="" /></div>
                                        <p class="item-tit">汽车租赁</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        基于用户的网络搜索、APP使用、信令位置、交往圈情况，精准识别出用户的用车需求，可为汽车租凭公司提供有效实时的需求数据支撑，为汽车租凭公司在店铺选择、资源配置上提供坚实的数据支撑。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon31.png" alt="" /></div>
                                        <p class="item-tit">公共资源调配</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        基于用户的信令位置数据，通过大数据的持续性监测，运用和元达大数据分析平台，可精准的了解到人口密度的变化情况，可为政府部门在公共交通、道路疏通等方面提供真实、实时有效的数据支撑，有利于提升公共资源的合理调配。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon32.png" alt="" /></div>
                                        <p class="item-tit">房产销售</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        基于用户的基础信息数据、信令位置数据、APP使用数据、网络搜索数据等实时大数据，运用和元达大数据分析平台，通过智能规则识别引擎，精准识别出有房产购买、租凭需求的用户及其画像，有助于分析顾客的消费行为和价值趣向，便于更好地为消费者服务和发展忠诚顾客。
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
                            <img class="item-icon" src="@/assets/images/rest/icon33.png" alt="" />
                            <p class="item-txt">数据精准、全面</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon34.png" alt="" />
                            <p class="item-txt">
                                数据连贯，利于分析
                                <br />
                                趋势，回溯效果
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon35.png" alt="" />
                            <p class="item-txt">
                                可视化操作，简单快
                                <br />
                                捷
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon36.png" alt="" />
                            <p class="item-txt">低成本、高收益</p>
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
                    // name: 'solutions9',
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
            bannerTitle: '交通出行解决方案',
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
