<!-- 广告精准投放 -->
<template>
    <div class="case-page case-page02">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner02 flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <nuxt-link to="/cases" tag="button" class="btn-back-list">
                    <img class="icon-img" src="@/assets/images/icons/back-icon.png" alt="" />
                    返回列表
                </nuxt-link>
                <section class="sec sec01">
                    <h2 class="con-tit">案例描述</h2>
                    <p class="txt">
                        该广告公司，过往使用流量平台自身标签库进行人群筛选，同行业基于同一套规则争抢客户，导致获客成本高或曝光不足。品牌主不愿提供过往正样本，无法做人群扩展。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt txt-center">跨平台多维度获取客户信息，降低获客成本。</p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt txt-center">通过聚客易产品的精准广告投放，实现以下目标：</p>
                    <ul class="common-list01">
                        <li class="list-item">
                            <span class="label">1</span>
                            <p class="item-txt">基于运营商大数据，从多个维度进行人群筛选。从多个维度获取客户，包括竞品维度、价值维度（付费行为）、平台相似度等等。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">2</span>
                            <p class="item-txt">对品牌主过往投放广告的正样本进行监测，获取正样本后，上传至流量平台进行人群扩展。</p>
                        </li>
                    </ul>
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <p class="effect-txt"></p>
                    <ul class="common-list02">
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img03.jpg" alt="" />
                            <p class="item-txt">曝光量提升。</p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img04.jpg" alt="" />
                            <p class="item-txt">经过不断调优，获客成本不断降低。</p>
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
                    // name: 'cases2',
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
            bannerTitle: '广告精准投放'
        };
    },
    computed: {}
};
</script>

<style></style>
