<template>
    <div class="index-page" :class="{ lastScreen: screenIndex == 4 }">
        <v-nav :change="true" class="test"></v-nav>
        <no-ssr>
            <swiper class="index-swiper" :options="swiperOption" ref="indexSwiper">
                <!-- 第一屏 -->
                <swiper-slide class="index-swiper-item index-swiper-item01" :class="{ active: watchMaxIndex >= 0 }">
                    <div class="index-item01">
                        <img class="img-outer" src="@/assets/images/index/index_1_img03.png" alt="" />
                        <img class="img-inner" src="@/assets/images/index/index_1_img02.png" alt="" />
                        <img class="img-txt" src="@/assets/images/index/index_1_img01.png" alt="" />
                    </div>
                </swiper-slide>
                <!-- 第二屏 -->
                <swiper-slide class="index-swiper-item index-swiper-item02" :class="{ active: watchMaxIndex >= 1 }">
                    <div class="item-inner">
                        <div class="inner-top">
                            <h3 class="inner-tit">互联网基础数据平台</h3>
                            <div class="inner-desc">基于运营商大数据，提供准确、稳定、及时的基础数据服务</div>
                        </div>
                        <div class="inner-bottom">
                            <ul class="platform flex flex-jcsb flex-wrap">
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img01.jpg" alt="" /></nuxt-link>
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img02.jpg" alt="" /></nuxt-link>
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img03.jpg" alt="" /></nuxt-link>
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img04.jpg" alt="" /></nuxt-link>
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img05.jpg" alt="" /></nuxt-link>
                                <nuxt-link to="/products/1" tag="li" class="platform-item"><img class="img-item" src="@/assets/images/index/index_2_img06.jpg" alt="" /></nuxt-link>
                            </ul>
                        </div>
                    </div>
                </swiper-slide>
                <!-- 第三屏 -->
                <swiper-slide class="index-swiper-item index-swiper-item03" :class="{ active: watchMaxIndex >= 2 }">
                    <div class="item-inner">
                        <div class="inner-top">
                            <h3 class="inner-tit">DMP平台</h3>
                            <div class="inner-desc">
                                基于精准客户画像获取目标客户、最佳接触时间、最佳接触渠道等信息，运用AI及Look-alike技术进行用户量级拓展，并通过外呼、短信、线上广告投放等多种渠道，为客户实现精准营销或者市场调研等
                            </div>
                        </div>
                        <div class="inner-bottom">
                            <img class="img-avatar" src="@/assets/images/index/index_3_img01.png" alt="" />
                            <img class="img-light" src="@/assets/images/index/index_3_img02.png" alt="" />
                        </div>
                    </div>
                </swiper-slide>
                <!-- 第四屏 -->
                <swiper-slide class="index-swiper-item index-swiper-item04" :class="{ active: watchMaxIndex >= 3 }">
                    <div class="item-inner">
                        <div class="inner-top">
                            <h3 class="inner-tit">大数据分析平台</h3>
                            <div class="inner-desc">基于运营商大数据，提供准确、稳定、及时的基础数据服务</div>
                        </div>
                        <div class="inner-bottom">
                            <ul v-if="subNav.length" class="sub-swiper-nav flex flex-jcsb">
                                <li @click="navSwitch(index)" v-for="(navItem, index) in subNav" class="sub-nav-item" :class="{ active: currentSubIndex == index }">
                                    {{ navItem }}
                                </li>
                            </ul>
                            <div class="sub-swiper-box" v-if="currentSubList.length">
                                <swiper class="index-sub-swiper" :options="swiperSubOption" ref="indexSubSwiper">
                                    <swiper-slide :key="currentSubIndex+'-'+index" v-if="currentSubList.length" v-for="(item, index) in currentSubList" class="sub-swiper-item flex flex-align-center">
                                        <div class="sub-swiper-inner flex flex-center">
                                            <img class="sub-inner-bg" src="@/assets/images/index/index_4_img01.png" alt="" />
                                            <img class="sub-inner-icon" :src="item.img_url" alt="" />
                                            <p class="sub-inner-txt">{{ item.text }}</p>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <div id="subPrev" class="swiper-button-prev"></div>
                                <div id="subNext" class="swiper-button-next"></div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- 第五屏 -->
                <swiper-slide class="index-swiper-item index-swiper-item05" :class="{ active: watchMaxIndex >= 4 }">
                    <div class="item-inner">
                        <div class="inner-top">
                            <h3 class="inner-tit">多行业解决方案</h3>
                            <div class="inner-desc">聚焦在电信、金融、医疗、环保、电商、交通等行业，业务以大数据分析处理、人工智能、大数据价值变现、精准营销为主。</div>
                        </div>
                        <div class="inner-bottom">
                            <ul class="scheme-box flex flex-wrap">
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon01.png" alt="" />
                                    <span class="scheme-txt">电信行业解决方案</span>
                                </li>
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon02.png" alt="" />
                                    <span class="scheme-txt">金融</span>
                                </li>
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon03.png" alt="" />
                                    <span class="scheme-txt">医疗</span>
                                </li>
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon04.png" alt="" />
                                    <span class="scheme-txt">环保</span>
                                </li>
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon05.png" alt="" />
                                    <span class="scheme-txt">电商</span>
                                </li>
                                <li class="scheme-item flex flex-center">
                                    <img class="scheme-icon" src="@/assets/images/index/index_5_icon06.png" alt="" />
                                    <span class="scheme-txt">交通</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <v-footer></v-footer>
                </swiper-slide>
            </swiper>
            <!-- <div class="swiper-pagination" id="pagination" slot="swiper01"></div> -->
        </no-ssr>
        <div class="slide-down" v-show="screenIndex != 4"><img class="icon-down-more" src="@/assets/images/index/arrow.png" alt="" /></div>
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
    beforeCreate() {},
    created() {
        let seoKey = this.$route.path;
        this.$admin_base(
            [
                this.$get(URL.getSEOInfo, {
                    name: seoKey
                })
            ],
            [
                res => {
                    this.SEOInfo = res.data;
                }
            ]
        );
    },
    data() {
        let that = this;
        return {
            SEOInfo: {},
            // 当前第几屏的下标
            screenIndex: 0,
            // 浏览过的第几屏的“最高”下标
            watchMaxIndex: -1,
            swiperOption: {
                // test
                initialSlide: 0,
                // product
                direction: 'vertical',
                on: {
                    init: function() {
                        setTimeout(() => {
                            that.watchMaxIndex = 0;
                        }, 500);
                    },
                    slideChangeTransitionEnd: function() {
                        that.screenIndex = this.activeIndex;
                        that.watchMaxIndex = this.activeIndex > that.watchMaxIndex ? this.activeIndex : that.watchMaxIndex;
                    }
                }
            },
            swiperSubOption: {
                loop: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true, //修改swiper的父元素时，自动初始化swiper
                navigation: {
                    nextEl: '#subNext',
                    prevEl: '#subPrev'
                }
            },
            // 第四屏轮播nav
            subNav: ['SaaS', 'PaaS', 'laaS'],
            // 第四屏轮播下标
            currentSubIndex: 0,
            // 第四屏轮播数组
            subList: [
                [
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-1.png'),
                        text: '大数据智慧交通应用'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-2.png'),
                        text: '大数据旅游分析应用'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-3.png'),
                        text: '大数据交通分析应用'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-4.png'),
                        text: '大数据人口分析应用'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-5.png'),
                        text: '大数据商圈分析应用'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon01-6.png'),
                        text: '大数据选址分析应用'
                    }
                ],
                [
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon02-1.png'),
                        text: 'DMP平台'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon02-2.png'),
                        text: '智慧容量专家'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon02-3.png'),
                        text: '大数据生产管理平台'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon02-4.png'),
                        text: '食品安全追溯系统(区块链)'
                    }
                ],
                [
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon03-1.png'),
                        text: '和元达数据管理一体机'
                    },
                    {
                        img_url: require('@/assets/images/index/icon/index_4_icon03-2.png'),
                        text: '机房统一监控系统TUMS'
                    }
                ]
            ]
        };
    },
    computed: {
        // 第四屏swiper实例
        indexSubSwiper() {
            return this.$refs.indexSubSwiper.swiper;
        },
        // 第四屏当前轮播数组
        currentSubList() {
            return this.subList[this.currentSubIndex] || [];
        }
    },
    watch: {},
    methods: {
        // 第四屏轮播切换
        navSwitch(index) {
            // 先销毁 再重新生成
            this.currentSubIndex = -1;
            this.$nextTick(()=>{
                this.currentSubIndex = index;
            })
        }
    },
    beforeDestroy() {},
    // 注意，这个生命周期没有this
    destroyed() {}
};
</script>

<style></style>
