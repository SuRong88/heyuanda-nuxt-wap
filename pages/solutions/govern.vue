<!-- 数据治理解决方案 -->
<template>
    <div class="solution-page solution-page02">
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
                        通过统一的数据标准制定和发布，结合制度约束、系统控制等手段 实现企业级大数据平台数据的完整性、有效性、一致性、规范性、
                        开放性和共享性管理，提高企业的数据治理水平。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/govern/img01.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">方案内容</h2>
                    <ul class="con-ul">
                        <h4 class="con-subtitle">数据治理原则</h4>
                        <li class="con-li">
                            <p class="li-tit">开放性</p>
                            <p class="li-txt">标准制定人人参与</p>
                        </li>

                        <li class="con-li">
                            <p class="li-tit">共享性</p>
                            <p class="li-txt">数据标准化信息在大数据生态圈共享使用</p>
                        </li>
                        <li class="con-li">
                            <p class="li-tit">规范性</p>
                            <p class="li-txt">制度规范、流程控制、系统管理等</p>
                        </li>
                        <li class="con-li">
                            <p class="li-tit">有效性</p>
                            <p class="li-txt">信息准确度高，理解上不存在歧义</p>
                        </li>
                        <li class="con-li">
                            <p class="li-tit">—致性</p>
                            <p class="li-txt">做到“五统一”，定义统一、口径统一、名称统一、来源统一、参照统一</p>
                        </li>
                        <li class="con-li">
                            <p class="li-tit">完整性</p>
                            <p class="li-txt">涵盖客户、产品、服务、帐务、资源、网络等全部重要数据信息</p>
                        </li>
                    </ul>
                    <img class="con-img img01" src="@/assets/images/solution/govern/img02.png" alt="" />
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
                    // name: 'solutions2',
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
            bannerTitle: '数据治理解决方案'
        };
    },
    computed: {}
};
</script>

<style></style>
