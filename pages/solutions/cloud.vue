<!-- 云备案解决方案 -->
<template>
    <div class="solution-page solution-page03">
        <v-nav :show="show"></v-nav>
        <main>
            <div class="solution-banner flex flex-center">
                <h2 class="banner-title">{{ bannerTitle }}</h2>
            </div>
            <div class="content">
                <section class="sec01">
                    <h2 class="con-tit">方案概述</h2>
                    <p class="con-txt">
                        通过统一的数据标准制定和发布，结合制度约束、系统控制等手段 实现企业级大数据平台数据的完整性、有效性、一致性、规范性、
                        开放性和共享性管理，提高企业的数据治理水平。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/cloud/img07.png" alt="" />
                </section>
                <section class="sec02">
                    <h2 class="con-tit">方案内容</h2>
                    <p class="con-txt">
                        通过集群应用、网络技术和分布式文件系统等功能， 将大量各种不同类型的存储设备通过TVI备份一体机整合起来，共同对外提供数据
                        存储备份和备份数据快速访问的功能服务。
                    </p>
                    <img class="con-img img01" src="@/assets/images/solution/cloud/img08.jpg" alt="" />
                    <p class="con-txt">集中管理模块(Global Manager),可以实现统一的, 跨数据中心，跨地域，跨云的集中管理。</p>
                    <img class="con-img img02" src="@/assets/images/solution/cloud/img09.jpg" alt="" />
                </section>
                <section class="sec03">
                    <h2 class="con-tit">多租户模式</h2>
                    <ul class="mode-box clearfix">
                        <li class="mode-item">
                            <img class="item-icon" src="@/assets/images/solution/cloud/icon10.png" alt="" />
                            <p class="item-txt">多租户模式是物理集中、逻辑区分</p>
                        </li>
                        <li class="mode-item">
                            <img class="item-icon" src="@/assets/images/solution/cloud/icon11.png" alt="" />
                            <p class="item-txt">多租户以组织为单位，将存储资源、被保护应用、虚拟磁盘、用户等以组织逬行逻辑划分</p>
                        </li>
                        <li class="mode-item">
                            <img class="item-icon" src="@/assets/images/solution/cloud/icon12.png" alt="" />
                            <p class="item-txt">Role Based Access Control (RBAC) 机制提供用户权限管理</p>
                        </li>
                        <li class="mode-item">
                            <img class="item-icon" src="@/assets/images/solution/cloud/icon13.png" alt="" />
                            <p class="item-txt">可对租户的传输带宽进行控制</p>
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
                    // name: 'solutions6',
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
            bannerTitle: '云备案解决方案'
        };
    },
    computed: {}
};
</script>

<style></style>
