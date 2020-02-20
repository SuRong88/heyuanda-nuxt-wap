<template>
    <div class="solution-page solution-page08">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="solution-banner flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <section class="sec01">
                    <h2 class="con-tit">方案概述</h2>
                    <p class="con-txt">
                        基于机器学习的异常发现、关联定位和分析处理，针对业务系统所有层级的日志数据，提供数据搜索、报表和可视化展现等功能。通过智能运维平台可以快速构建分布式应用程序。
                    </p>
                    <img class="con-img img01" src="@/assets/images/rest/img03.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">应用场景</h2>
                    <no-ssr>
                        <!-- 垂直方向 -->
                        <!-- <div style="position: relative; padding-bottom: 5.6rem"> -->
                        <!-- 水平方向 -->
                        <div style="position: relative;">
                            <swiper class="swiper" :options="swiperOption" ref="Swiper">
                                <swiper-slide class="swiper-item flex flex-center">
                                    <img class="item-img" src="@/assets/images/rest/img04.jpg" alt="" />
                                    <div class="item-inner">
                                        <img class="item-icon" src="@/assets/images/rest/icon04.png" alt="" />
                                        <p class="item-txt">事件搜索</p>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-item flex flex-center">
                                    <img class="item-img" src="@/assets/images/rest/img05.jpg" alt="" />
                                    <div class="item-inner">
                                        <img class="item-icon" src="@/assets/images/rest/icon05.png" alt="" />
                                        <p class="item-txt">智能运维</p>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-item flex flex-center">
                                    <img class="item-img" src="@/assets/images/rest/img06.jpg" alt="" />
                                    <div class="item-inner">
                                        <img class="item-icon" src="@/assets/images/rest/icon06.png" alt="" />
                                        <p class="item-txt">安全分析</p>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-item flex flex-center">
                                    <img class="item-img" src="@/assets/images/rest/img07.jpg" alt="" />
                                    <div class="item-inner">
                                        <img class="item-icon" src="@/assets/images/rest/icon07.png" alt="" />
                                        <p class="item-txt">关联分析</p>
                                    </div>
                                </swiper-slide>
                                <swiper-slide class="swiper-item flex flex-center">
                                    <img class="item-img" src="@/assets/images/rest/img08.jpg" alt="" />
                                    <div class="item-inner">
                                        <img class="item-icon" src="@/assets/images/rest/icon08.png" alt="" />
                                        <p class="item-txt">运营分析</p>
                                    </div>
                                </swiper-slide>
                            </swiper>
                            <div id="pag" class="swiper-pagination" slot="swiper-pagination"></div>
                        </div>
                    </no-ssr>
                </section>
                <section class="sec03">
                    <h2 class="con-tit">方案优势</h2>
                    <ul class="mul-box clearfix">
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon09.png" alt="" />
                            <p class="item-txt">实时可用性</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon10.png" alt="" />
                            <p class="item-txt">强大的搜索</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon11.png" alt="" />
                            <p class="item-txt">灵活的数据模型</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon12.png" alt="" />
                            <p class="item-txt">灵活定制仪表盘</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon13.png" alt="" />
                            <p class="item-txt">
                                支持复杂多样化的日
                                <br />
                                志格式
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon14.png" alt="" />
                            <p class="item-txt">开放的可扩展的平台</p>
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
    computed: {
        swiper() {
            return this.$refs.swiper.swiper;
        }
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
                    // name: 'solutions3'
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
            bannerTitle: '智能运维解决方案',
            swiperOption: {
                // direction: 'vertical',
                spaceBetween: 5,
                pagination: {
                    el: '#pag'
                }
            }
        };
    }
};
</script>

<style></style>
