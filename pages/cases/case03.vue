<!-- APP/小程序监测 -->
<template>
    <div class="case-page case-page03">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner03 flex flex-center">
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
                        该互联网应用监测公司，通过SDK或深入调研的模式采集样本，进行互联网应用（小程序、app等）活跃度监测。通过SDK采集客户个体数据，需要客户授权，否则风险很大。同时，采集的数据受到操作系统版本等多种因素的限制，导致样本数据偏差性很大。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">降低数据采集风险，减少样本偏差，能及时地获取到稳定、准确的基础数据。</p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt"></p>
                    <ul class="common-list01">
                        <li class="list-item">
                            <span class="label">1</span>
                            <p class="item-txt">基于运营商大数据，通过DPI等技术实现业务行为的识别，包括APP和小程序的识别、监测，为该公司提供基础数据服务。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">2</span>
                            <p class="item-txt">该公司负责提供解析规则，并隐藏业务目标。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">3</span>
                            <p class="item-txt">我司负责DPI数据的解析，保障基础数据的准确性和稳定性。</p>
                        </li>
                    </ul>
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <p class="effect-txt">该公司及时获得了稳定、准确的业务监测所需基础数据。</p>
                    <img class="img" src="@/assets/images/case/img05.png" alt="" />
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
                    // name: 'cases3',
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
            bannerTitle: 'APP/小程序监测'
        };
    },
    computed: {}
};
</script>

<style></style>
