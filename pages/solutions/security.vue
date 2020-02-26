<template>
    <div class="solution-page solution-page06">
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
                        通过动态变换、动态感知、动态响应和动态智能等创新技术实现了从 用户端到服务器端的全方位“主动防御”，为各类Web应用提供强大
                        的安全保护，让攻击者无从下手，从而大幅提升了业务安全。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/security/img04.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">方案内容</h2>
                    <img class="con-img img01" src="@/assets/images/solution/security/img05.png" alt="" />
                    <ul class="box-ul clearfix">
                        <li class="box-li">
                            <img class="li-icon" src="@/assets/images/solution/security/icon06.png" alt="" />
                            <p class="li-tit">
                                动态变幻
                                <br />
                                (Dynamic Morphism)
                            </p>
                            <p class="li-txt">增加应用行为的“不可预测性”，隐藏安全漏洞</p>
                        </li>
                        <li class="box-li">
                            <img class="li-icon" src="@/assets/images/solution/security/icon07.png" alt="" />
                            <p class="li-tit">
                                动态感知
                                <br />
                                (Dynamic Awareness)
                            </p>
                            <p class="li-txt">动态感知应用业务逻辑与终端威胁态势，全程保护操作安全</p>
                        </li>
                        <li class="box-li">
                            <img class="li-icon" src="@/assets/images/solution/security/icon08.png" alt="" />
                            <p class="li-tit">
                                动态响应
                                <br />
                                (Dynamic Respond)
                            </p>
                            <p class="li-txt">根据攻击态势动态调整防御及响应手段，迷惑攻击者</p>
                        </li>
                        <li class="box-li">
                            <img class="li-icon" src="@/assets/images/solution/security/icon09.png" alt="" />
                            <p class="li-tit">
                                动态智能
                                <br />
                                (Dynamic Intelligence)
                            </p>
                            <p class="li-txt">结合外部威胁情报行程动态安全智能，精准预测攻击者行为，形成多方联合防御体系</p>
                        </li>
                    </ul>
                    <!-- RAS防御前后对比 -->
                    <div class="compare">
                        <h3 class="tit">RAS防御前后对比</h3>
                        <img class="con-img img01" src="@/assets/images/solution/security/img06.png" alt="" />
                    </div>
                </section>
                <section class="sec03">
                    <h2 class="con-tit">方案优势</h2>
                    <ul class="box-ul">
                        <li class="box-li">
                            <dl>
                                <dt class="box-tit">从特征匹配到动态变幻，化被动为主动</dt>
                                <dd class="box-desc">抵御自动化威胁及未知漏洞攻击</dd>
                                <dd class="box-desc">防止业务逻辑攻击</dd>
                                <dd class="box-desc">阻止分布式的多来源攻击</dd>
                            </dl>
                        </li>
                        <li class="box-li">
                            <dl>
                                <dt class="box-tit">从单点防御到全程动态威胁态势感知</dt>
                                <dd class="box-desc">终端威胁主动监控及可视化</dd>
                                <dd class="box-desc">威胁追踪与攻击预测</dd>
                                <dd class="box-desc">抵御业务应用层DDoS攻击</dd>
                            </dl>
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
                    // name: 'solutions5',
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
            bannerTitle: '动态安全防御解决方案'
        };
    }
};
</script>

<style></style>
