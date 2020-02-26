<template>
    <div class="solution-page solution-page04">
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
                    <p class="con-txt">
                        和元达与中国移动通信集团广东有限公司、爱立信、IBM等合作伙伴共同打造农产品安全信任链。广东移动基于区块链和物联网技术推出的“和信菜篮子”项目正式在广东省内的云浮杏花鸡农场，河源小黄牛散养基地，从化蔬菜种植基地落地应用。用户只需通过广东移动旗下的电商品牌“岭南生活”APP，即可购买到来自上述三处农场基地的可溯源、有保障的放心肉菜。这一项目将打造创新、协调、绿色、开放、共享的智慧农业，让老百姓吃上安全、健康的食品，更好地支持和落实十九大提出的“食品安全”战略。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/agriculture/img01.jpg" alt="" />
                    <p class="con-txt">
                        <span class="strong">“和信菜篮子</span>
                        项目是广东移动联合和元达、爱立信、IBM等合作伙伴，由广东移动主导规划，和元达开发农场管理系统和电子围栏，利用高科技进行农产品溯源，将生产数据成为区块链上的可信环节，不仅可以进一步推动“岭南生活”的商品销售，也是国内物联网和区块链技术实现农产品溯源应用的首次结合。
                    </p>
                    <img class="con-img img02" src="@/assets/images/solution/agriculture/img02.jpg" alt="" />
                </section>

                <section class="sec02">
                    <h2 class="con-tit">
                        2017年中国移动
                        <br />
                        全球合作伙伴大会活动现场
                    </h2>
                    <p class="con-txt">
                        舌尖上的安全直接关系13亿多人的民生。十九大报告提出，实施食品安全战略，让人民吃得放心。“岭南生活”是广东移动推出的专注于广东特产销售的电商平台，一方面让城市地区的消费者有机会吃上安全健康的绿色食品，另一方面拓宽了贫困地区特色优质农副产品的销售渠道，实现信息化精准扶贫。2016年6月正式上线以来，岭南生活电商平台通过构建地市专区，扶持贫困村打造“一县一产业”、“一村一产品”等相关举措，有效拉动偏远区域农家特产销售。目前注册用户数突破千万，累计引入商品1.63万个，交易额近2.6亿元，成为广东省特色优质农副产品的主要销售渠道。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/agriculture/img03.jpg" alt="" />
                </section>
                <section class="sec03">
                    <h2 class="con-tit">“和信菜篮子”平台展示</h2>
                    <p class="con-txt">
                        “和信菜篮子”一方面采用了最新的网络技术NB-IoT，通过温湿度监测仪、土壤检测仪、耳标、项圈、脚环等设备对养殖环境、蔬菜土壤的肥力以及鸡和牛的生长等多项数据进行采集和监控，并通过区块链技术保障数据的真实可信，形成了可靠的食品安全信任链,来实现对种养殖过程的可视化、精准监控和科学化管理，推动农业发展向集约型、规模化转变。.63万个，交易额近2.6亿元，成为广东省特色优质农副产品的主要销售渠道。
                    </p>
                    <no-ssr>
                        <swiper class="inner-swiper" :options="swiperOption" ref="innerSwiper">
                            <swiper-slide class="inner-swiper-item inner-swiper-item01">
                                <img class="item-img" src="@/assets/images/solution/agriculture/img05.jpg" alt="" />
                                <dl class="item-desc">
                                    <dd>环境：温湿度仪/土壤检测仪</dd>
                                    <dd>直播：实时视频监控</dd>
                                    <dd>温湿度/二氧化碳/光照</dd>
                                    <dd>土壤肥力/水分/温度</dd>
                                </dl>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item02">
                                <img class="item-img" src="@/assets/images/solution/agriculture/img06.jpg" alt="" />
                                <dl class="item-desc">
                                    <dd>牛监控：</dd>
                                    <dd>耳标/项圈</dd>
                                    <dd>全生命周期跟踪</dd>
                                    <dd>运动数据</dd>
                                </dl>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item03">
                                <img class="item-img" src="@/assets/images/solution/agriculture/img07.jpg" alt="" />
                                <dl class="item-desc">
                                    <dd>牛监控：</dd>
                                    <dd>电子围栏</dd>
                                    <dd>实时监控</dd>
                                </dl>
                            </swiper-slide>
                            <swiper-slide class="inner-swiper-item inner-swiper-item04">
                                <img class="item-img" src="@/assets/images/solution/agriculture/img08.jpg" alt="" />
                                <dl class="item-desc">
                                    <dd>环境：温湿度仪/土壤检测仪</dd>
                                    <dd>直播：实时视频监控</dd>
                                    <dd>温湿度/二氧化碳/光照</dd>
                                    <dd>土壤肥力/水分/温度</dd>
                                </dl>
                            </swiper-slide>
                            <div class="swiper-pagination" id="swiperP" slot="pagination"></div>
                        </swiper>
                    </no-ssr>
                </section>
                <section class="sec04">
                    <h2 class="con-tit">电子围栏</h2>
                    <p class="con-txt">
                        *和元达开发的电子围栏：提供基于物联网位置信息的电子围栏，农场管理员不仅可查看每一头牛的实时位置与报警信息，而且还能查看到每一头牛的运动轨迹信息。
                        另一方面，通过物联网获取的农场信息、加工信息，结合物流信息，销售信息，被全面纳入到区块链平台，记录农产品从地到桌的全流程数据，并通过区块链技术的智能合约、分布式账本和防篡改等技术特点，保障农产品数据的真实可信，为消费者建立了一条安全可靠的食品溯源链。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/agriculture/img09.png" alt="" />
                </section>
                <section class="sec05">
                    <h2 class="con-tit">农场管理手持终端界面</h2>
                    <p class="con-txt">
                        *和元达开发的电子围栏：提供基于物联网位置信息的电子围栏，农场管理员不仅可查看每一头牛的实时位置与报警信息，而且还能查看到每一头牛的运动轨迹信息。
                        另一方面，通过物联网获取的农场信息、加工信息，结合物流信息，销售信息，被全面纳入到区块链平台，记录农产品从地到桌的全流程数据，并通过区块链技术的智能合约、分布式账本和防篡改等技术特点，保障农产品数据的真实可信，为消费者建立了一条安全可靠的食品溯源链。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/agriculture/img10.jpg" alt="" />
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
                    // name: 'solutions11',
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
            bannerTitle: '新农业',
            swiperOption: {
                loop: false,
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
