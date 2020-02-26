<!-- 通信行业解决方案 -->
<template>
    <div class="solution-page solution-page01 solution-page09">
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
                        基于和元达大数据分析平台，打破运营商数据孤岛，贯通通信业务数据与行为业务数据，运用网站统计分析、APP数据分析、小程序数据分析等领域的数据分析方法，进行深入的用户行为分析,挖掘新的增长点。
                    </p>
                    <img class="con-img img01" src="@/assets/images/rest/img09.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">应用价值</h2>
                    <no-ssr>
                        <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon15.png" alt="" /></div>
                                        <p class="item-tit">存量客户价值流失预警分析</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        针对运营商存量用户离网流失问题，通过对用户的基本信息、通信信息、账户信息、交往圈信息、客户异常行为等综合分析，运用回归分析模型，对潜在用户进行识别预判，及时有效识别存量客户的流失倾向以及流失原因，进行对应的挽留与保有工作，降低存量客户流失率。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon16.png" alt="" /></div>
                                        <p class="item-tit">万能副卡潜在用户识别分析</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        经过数据探索以及模型优化调整，充分融合用户的基本信息数据、交往圈关系数据、通信信息数据以及用户家庭关系数据，采用决策树分析模型，识别出具有号码分类使用的需求或承担家庭通信费用的需求但仍未办理万能副卡的客户作为主要的潜在用户，以供业务部门提前介入，提升业务营销转化率。
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <div class="slide-inner">
                                    <div class="item-t">
                                        <div class="item-icon-box flex flex-center"><img class="item-icon" src="@/assets/images/rest/icon17.png" alt="" /></div>
                                        <p class="item-tit">家宽潜在用户识别分析</p>
                                    </div>
                                    <div class="item-b item-txt">
                                        基于网络搜索、位置信令、社交关系圈等互联网大数据，构建“区域-社区-家庭-个人”多层次市场划分分析模型，清晰展示多层级区域网格的市场竞争情况；通过位置轨迹、通信社交、网络偏好分析透析用户间具有家庭特性的相似特征，搭建用户家庭关系识别模型，有效发展家庭宽带业务，找到关键客户营销，减少资源浪费，提高效率。
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
                            <img class="item-icon" src="@/assets/images/rest/icon18.png" alt="" />
                            <p class="item-txt">
                                整合数据，打破数据
                                <br />
                                孤岛
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon19.png" alt="" />
                            <p class="item-txt">客户画像，精准销营</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon20.png" alt="" />
                            <p class="item-txt">提高留存和复购率</p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon21.png" alt="" />
                            <p class="item-txt">
                                精细化运营，提高运
                                <br />
                                营效率
                            </p>
                        </li>
                        <li class="mul-item fl">
                            <img class="item-icon" src="@/assets/images/rest/icon22.png" alt="" />
                            <p class="item-txt">
                                可视化分析，分析具
                                <br />
                                象化
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
                    // name: 'solutions7',
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
            bannerTitle: '通信行业解决方案',
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
