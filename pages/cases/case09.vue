<!-- 性能容量管控平台 -->
<template>
    <div class="case-page case-page09">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="case-banner case-banner08 flex flex-center">
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
                        随着业务的快速发展，业务支撑系统规模的不断扩大，承载业务种类繁杂，业务量巨大。为了确保NGCRM系统高效稳定运行，并构筑和完善性能容量模型，该运营商开展了"
                        NGCRM系统性能管控支持服务项目"。
                    </p>
                </section>
                <section class="sec sec02">
                    <h2 class="con-tit">客户需求</h2>
                    <p class="txt">
                        为了确保NGCRM系统的高效稳定运行，必须对系统的性能进行持续监控和优化提升，同时以监控数据为基础，构筑和完善性能容量模型，为系统容量评估、性能优化、扩容等工作提供参考依据。
                    </p>
                </section>
                <section class="sec sec03">
                    <h2 class="con-tit">实施目标</h2>
                    <p class="tar-txt txt-center">主要建设目标如下：</p>
                    <ul class="common-list01">
                        <li class="list-item">
                            <span class="label">1</span>
                            <p class="item-txt">性能监控工具的维护、升级等一系列工作。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">2</span>
                            <p class="item-txt">性能基础管理：包括系统的业务/服务/IT部件容量基础数据的采集、监控、分析、问题提出及优化建议、问题管理等工作。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">3</span>
                            <p class="item-txt">构筑和完善性能容量模型：分析并构筑业务容量模型，逐步完善性能容量模型，为后续的扩容和优化提供参考依据。</p>
                        </li>
                        <li class="list-item">
                            <span class="label">4</span>
                            <p class="item-txt">预测系统性能和容量状况，对未来可能出现的性能瓶颈和容量不足发出告警，以便提前做好应对措施。</p>
                        </li>
                    </ul>
                </section>
                <section class="sec sec04">
                    <h2 class="con-tit">实施成效</h2>
                    <ul class="common-list02">
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img19.jpg" alt="" />
                            <p class="item-txt">建立了端对端的性能管理体系，能够快速准确定位性能问题，直接给出优化建议，以便快速解决性能问题。</p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img20.jpg" alt="" />
                            <p class="item-txt">
                                构建了性能容量评估模型，将业务数据与性能数据关联起来，为系统业务支撑能力评估、系统性能优化、系统扩容等工作提供参考依据和决策支撑。
                            </p>
                        </li>
                        <li class="list-item">
                            <img class="item-img" src="@/assets/images/case/img21.jpg" alt="" />
                            <p class="item-txt">目前该系统监控设备达到50多台，包括数据库服务器、应用服务器和Web服务器等。</p>
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
                    // name: 'cases9',
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
            bannerTitle: '性能容量管控平台'
        };
    },
    computed: {}
};
</script>

<style></style>
